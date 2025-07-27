import { useEffect, useState } from 'react';
import { RTVIEvent } from "@pipecat-ai/client-js";
import { useRTVIClientEvent } from "@pipecat-ai/client-react";
import conversationStore, { type ConversationMessage, type ConversationState } from '../stores/conversationStore';

interface Props {
  onMessageAdded?: (message: ConversationMessage) => void;
}

export const useConversation = ({ onMessageAdded }: Props = {}) => {
  const [state, setState] = useState<ConversationState>(conversationStore.getState());

  useEffect(() => {
    const unsubscribe = conversationStore.subscribe(() => {
      setState(conversationStore.getState());
    });

    return unsubscribe;
  }, []);

  useRTVIClientEvent(RTVIEvent.Connected, () => {
    conversationStore.clearMessages();
  });

  useRTVIClientEvent(RTVIEvent.BotLlmStarted, () => {
    const messages = conversationStore.getMessages();
    const lastBotMessage = messages.slice().reverse().find((msg: ConversationMessage) => msg.role === "assistant");
    
    if (!lastBotMessage || lastBotMessage.content) {
      const newMessage = conversationStore.addMessage({
        role: "assistant",
        content: "",
        final: false,
        isFresh: true,
      });
      conversationStore.markMessageAsFresh(newMessage.id);
      onMessageAdded?.(newMessage);
    } else {
      conversationStore.markMessageAsFresh(lastBotMessage.id);
    }
  });

  useRTVIClientEvent(RTVIEvent.BotLlmText, (data) => {
    const messages = conversationStore.getMessages();
    const lastBotMessage = messages.slice().reverse().find((msg: ConversationMessage) => msg.role === "assistant");

    if (lastBotMessage && !lastBotMessage.final) {
      const updatedMessage = conversationStore.updateMessage(lastBotMessage.id, {
        content: lastBotMessage.content + data.text,
      });
      if (updatedMessage) {
        onMessageAdded?.(updatedMessage);
      }
    } else {
      const newMessage = conversationStore.addMessage({
        role: "assistant",
        content: data.text,
        final: false,
      });
      onMessageAdded?.(newMessage);
    }
  });

  useRTVIClientEvent(RTVIEvent.BotLlmStopped, () => {
    const messages = conversationStore.getMessages();
    const lastBotMessage = messages.slice().reverse().find((msg: ConversationMessage) => msg.role === "assistant");

    if (lastBotMessage) {
      if (!lastBotMessage.content) {
        const messageIndex = messages.findIndex((msg: ConversationMessage) => msg.id === lastBotMessage.id);
        if (messageIndex !== -1) {
          const newMessages = [...messages];
          newMessages.splice(messageIndex, 1);
          conversationStore.clearMessages();
          newMessages.forEach(msg => conversationStore.addMessage(msg));
        }
      } else {
        const updatedMessage = conversationStore.updateMessage(lastBotMessage.id, {
          final: true,
        });
        if (updatedMessage) {
          onMessageAdded?.(updatedMessage);
        }
      }
    }
  });

  useRTVIClientEvent(RTVIEvent.UserStartedSpeaking, () => {
    const messages = conversationStore.getMessages();
    const lastUserMessage = messages.slice().reverse().find((msg: ConversationMessage) => msg.role === "user");
    if (!lastUserMessage || lastUserMessage.content) {
      const newMessage = conversationStore.addMessage({
        role: "user",
        content: "",
        final: false,
      });
      onMessageAdded?.(newMessage);
    }
  });

  useRTVIClientEvent(RTVIEvent.UserTranscript, (data) => {
    const messages = conversationStore.getMessages();
    const lastUserMessage = messages.slice().reverse().find((msg: ConversationMessage) => msg.role === "user" && !msg.final);

    if (lastUserMessage) {
      const updatedMessage = conversationStore.updateMessage(lastUserMessage.id, {
        content: data.text,
        final: data.final,
      });
      if (updatedMessage) {
        onMessageAdded?.(updatedMessage);
      }
    } else {
      const newMessage = conversationStore.addMessage({
        role: "user",
        content: data.text,
        final: data.final,
      });
      onMessageAdded?.(newMessage);
    }
  });

  useRTVIClientEvent(RTVIEvent.UserStoppedSpeaking, () => {
    setTimeout(() => {
      const messages = conversationStore.getMessages();
      const lastUserMessage = messages.slice().reverse().find((msg: ConversationMessage) => msg.role === "user");

      if (lastUserMessage && !lastUserMessage.content) {
        const messageIndex = messages.findIndex((msg: ConversationMessage) => msg.id === lastUserMessage.id);
        if (messageIndex !== -1) {
          const newMessages = [...messages];
          newMessages.splice(messageIndex, 1);
          conversationStore.clearMessages();
          newMessages.forEach(msg => conversationStore.addMessage(msg));
        }
      }
    }, 5000);
  });

  const addUserMessage = (content: string) => {
    const newMessage = conversationStore.addMessage({
      role: "user",
      content,
      final: true,
    });
    onMessageAdded?.(newMessage);
    return newMessage;
  };

  const addAssistantMessage = (content: string) => {
    const newMessage = conversationStore.addMessage({
      role: "assistant",
      content,
      final: true,
    });
    onMessageAdded?.(newMessage);
    return newMessage;
  };

  const clearMessages = () => {
    conversationStore.clearMessages();
  };

  const setLoading = (isLoading: boolean) => {
    conversationStore.setLoading(isLoading);
  };

  return {
    messages: conversationStore.getMergedMessages(),
    isLoading: state.isLoading,
    lastUpdated: state.lastUpdated,
    addUserMessage,
    addAssistantMessage,
    clearMessages,
    setLoading,
  };
};

export default useConversation;
