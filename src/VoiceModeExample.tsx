import React from 'react';
import ChatUIEnhanced from './ChatUI';

// Example showing how the voice mode toggle works
const VoiceModeExample: React.FC = () => {
  return (
    <div>
      <ChatUIEnhanced 
        connectionUrl="wss://your-chat-server.com/api/offer"
        systemPrompt="You are a helpful AI assistant."
        callbacks={{
          onConnect: () => console.log('🔗 Connected to chat!'),
          onDisconnect: () => console.log('🔌 Disconnected from chat'),
        }}
        labels={{
          title: 'Voice Mode Demo',
          subtitle: 'Click the voice button to toggle audio',
          voiceTooltip: 'Toggle voice mode on/off',
        }}
      />
    </div>
  );
};

export default VoiceModeExample;
