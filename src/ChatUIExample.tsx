import React from 'react';
import ChatUIEnhanced from './ChatUI';
import type { ChatUITheme, ChatUICallbacks } from './types';

// Example usage of the enhanced ChatUI component
const ChatUIExample: React.FC = () => {
  // Custom theme - replace all indigo-500 with blue-600
  const customTheme: ChatUITheme = {
    primary: 'scxl:text-blue-600',
    primaryHover: 'hover:scxl:text-blue-700',
    inputBorder: 'scxl:border-blue-600',
    inputBorderFocus: 'focus:scxl:border-blue-700',
    userBubble: 'scxl:bg-blue-600',
    connecting: 'scxl:bg-blue-600',
    ready: 'scxl:bg-green-500',
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
        className="scxl:min-h-screen scxl:bg-gray-50"
      />

      {/* Example 3: Different theme variations */}
      <ChatUIEnhanced
        connectionUrl="wss://your-chat-server.com/api/offer"
        theme={{
          primary: 'scxl:text-purple-500',
          primaryHover: 'hover:scxl:text-purple-600',
          inputBorder: 'scxl:border-purple-500',
          userBubble: 'scxl:bg-purple-500',
          botBubble: 'scxl:bg-purple-100',
          connecting: 'scxl:bg-purple-500',
          ready: 'scxl:bg-emerald-500',
        }}
        size="sm"
        typewriterSpeed={15}
      />

      {/* Example 4: Green theme */}
      <ChatUIEnhanced
        connectionUrl="wss://your-chat-server.com/api/offer"
        theme={{
          primary: 'scxl:text-emerald-500',
          primaryHover: 'hover:scxl:text-emerald-600',
          inputBorder: 'scxl:border-emerald-500',
          userBubble: 'scxl:bg-emerald-500',
          connecting: 'scxl:bg-emerald-500',
          ready: 'scxl:bg-emerald-600',
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
          background: 'scxl:bg-gray-900',
          cardBackground: 'scxl:bg-gray-800',
          inputBackground: 'scxl:bg-gray-800',
          border: 'scxl:border-gray-600',
          inputBorder: 'scxl:border-gray-500',
          textPrimary: 'scxl:text-white',
          textSecondary: 'scxl:text-gray-300',
          textMuted: 'scxl:text-gray-400',
          primary: 'scxl:text-cyan-400',
          userBubble: 'scxl:bg-cyan-600',
          botBubble: 'scxl:bg-gray-700',
          botBubbleText: 'scxl:text-gray-100',
        }}
        className="scxl:min-h-screen"
      />
    </div>
  );
};

export default ChatUIExample;
