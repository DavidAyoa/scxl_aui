import React from 'react';
import ChatUIEnhanced from './ChatUI';
import type { ChatUITheme, ChatUICallbacks } from './types';

// Example usage of the enhanced ChatUI component
const ChatUIExample: React.FC = () => {
  // Custom theme - replace all indigo-500 with blue-600
  const customTheme: ChatUITheme = {
    primary: 'text-blue-600',
    primaryHover: 'hover:text-blue-700',
    inputBorder: 'border-blue-600',
    inputBorderFocus: 'focus:border-blue-700',
    userBubble: 'bg-blue-600',
    connecting: 'bg-blue-600',
    ready: 'bg-green-500',
  };

  // Custom callbacks
  const callbacks: ChatUICallbacks = {
    onConnect: () => {
      console.log('🔗 Connected to chat!');
    },
    onDisconnect: () => {
      console.log('🔌 Disconnected from chat');
    },
    onError: (error: string) => {
      console.error('❌ Chat error:', error);
    },
    onBotReady: () => {
      console.log('🤖 Bot is ready!');
    },
    onMessageSent: (message: string) => {
      console.log('📤 Message sent:', message);
    },
    onMessageReceived: (message: string) => {
      console.log('📥 Message received:', message);
    },
    onUserStartedSpeaking: () => {
      console.log('🎤 User started speaking');
    },
    onUserStoppedSpeaking: () => {
      console.log('🔇 User stopped speaking');
    },
  };

  // Custom labels
  const customLabels = {
    title: 'My Custom Chat',
    subtitle: 'Connect to start chatting with AI',
    connectButton: 'Start Chat',
    disconnectButton: 'End Chat',
    inputPlaceholder: 'Type your message here...',
    voiceTooltip: 'Switch to voice conversation',
    loadingText: 'Setting up chat...',
    botReadyText: 'AI Ready',
    connectedText: 'Online',
  };

  return (
    <div>
      {/* Example 1: Basic usage */}
      <ChatUIEnhanced 
        connectionUrl="wss://your-chat-server.com/api/offer"
        systemPrompt="You are a helpful assistant specialized in customer support."
      />

      {/* Example 2: Fully customized */}
      <ChatUIEnhanced
        connectionUrl="wss://your-chat-server.com/api/offer"
        systemPrompt="You are a friendly AI tutor."
        theme={customTheme}
        callbacks={callbacks}
        labels={customLabels}
        size="lg"
        typewriterSpeed={30}
        enableVoice={true}
        enableTextInput={true}
        enableMicrophone={true}
        showParticipantId={false}
        showConnectionStatus={true}
        autoConnect={false}
        className="min-h-screen bg-gray-50"
      />

      {/* Example 3: Different theme variations */}
      <ChatUIEnhanced
        connectionUrl="wss://your-chat-server.com/api/offer"
        theme={{
          primary: 'text-purple-500',
          primaryHover: 'hover:text-purple-600',
          inputBorder: 'border-purple-500',
          userBubble: 'bg-purple-500',
          botBubble: 'bg-purple-100',
          connecting: 'bg-purple-500',
          ready: 'bg-emerald-500',
        }}
        size="sm"
        typewriterSpeed={15}
      />

      {/* Example 4: Green theme */}
      <ChatUIEnhanced
        connectionUrl="wss://your-chat-server.com/api/offer"
        theme={{
          primary: 'text-emerald-500',
          primaryHover: 'hover:text-emerald-600',
          inputBorder: 'border-emerald-500',
          userBubble: 'bg-emerald-500',
          connecting: 'bg-emerald-500',
          ready: 'bg-emerald-600',
        }}
        labels={{
          title: 'EcoChat',
          subtitle: 'Your sustainable AI assistant',
        }}
      />

      {/* Example 5: Dark theme-like */}
      <ChatUIEnhanced
        connectionUrl="https://very-weird-name-for-dev-v2.scoreexl.com/api/offer"
        systemPrompt='You only talk about vampire diaries'
        theme={{
          background: 'bg-gray-900',
          cardBackground: 'bg-gray-800',
          inputBackground: 'bg-gray-800',
          border: 'border-gray-600',
          inputBorder: 'border-gray-500',
          textPrimary: 'text-white',
          textSecondary: 'text-gray-300',
          textMuted: 'text-gray-400',
          primary: 'text-cyan-400',
          userBubble: 'bg-cyan-600',
          botBubble: 'bg-gray-700',
          botBubbleText: 'text-gray-100',
        }}
        className="min-h-screen"
      />
    </div>
  );
};

export default ChatUIExample;
