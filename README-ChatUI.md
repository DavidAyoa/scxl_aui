# 🚀 ChatUI - Enhanced Voice & Text Chat Component

A fully customizable, themeable React component for voice and text conversations with AI assistants. Built with TypeScript, Tailwind CSS, and designed for easy integration into any React application.

## ✨ Features

### 🎨 **Complete Theme System**
- **Customizable Colors**: Replace all `indigo-500` references with any Tailwind color
- **Granular Control**: Separate theming for input, chat bubbles, borders, text, and status indicators
- **Size Variants**: Small (`sm`), Medium (`md`), and Large (`lg`) sizing options
- **Dark Mode Ready**: Full support for dark themes

### 🔌 **Flexible Connection**
- **Connection URL as Prop**: Pass your WebSocket connection URL dynamically
- **Auto-Connect**: Optional automatic connection on component mount
- **Reconnection Logic**: Built-in retry mechanism with configurable attempts

### 📝 **Enhanced Text Features**
- **Configurable Typewriter Effect**: Adjustable typing speed (default: 20ms per character)
- **Custom Placeholders**: Personalize input placeholder text
- **Text Input Control**: Enable/disable text input functionality

### 🎤 **Voice Features**
- **Voice Control**: Enable/disable voice functionality
- **Microphone Control**: Granular microphone access control
- **Audio Visualization**: Support for audio visualization components

### 🔔 **Rich Callback System**
- **Connection Events**: `onConnect`, `onDisconnect`, `onError`
- **Bot Events**: `onBotReady`
- **Speaking Events**: `onUserStartedSpeaking`, `onUserStoppedSpeaking`, `onBotStartedSpeaking`, `onBotStoppedSpeaking`
- **Message Events**: `onMessageSent`, `onMessageReceived`
- **Participant Events**: `onParticipantJoined`, `onTrackStarted`

### 🧹 **Resource Management**
- **Automatic Cleanup**: Proper resource cleanup on component unmount
- **Connection Management**: Automatic disconnection when component unmounts
- **Memory Leak Prevention**: Proper event listener cleanup

### 🎯 **UI Customization**
- **Custom Labels**: Personalize all text labels and messages
- **Visibility Controls**: Show/hide participant ID, connection status
- **Custom Icons**: Support for custom icon components
- **Responsive Design**: Mobile-first responsive design

## 📦 Installation

```bash
npm install @scoreexl/chatui
# or
yarn add @scoreexl/chatui
```

## 🚀 Quick Start

```tsx
import { ChatUI } from '@scoreexl/chatui';

function App() {
  return (
    <ChatUI 
      connectionUrl="wss://your-server.com/api/offer"
      systemPrompt="You are a helpful AI assistant."
    />
  );
}
```

## 🎨 Theme Customization

### Basic Color Change (Replace indigo-500 with blue-600)

```tsx
import { ChatUI, ChatUITheme } from '@scoreexl/chatui';

const blueTheme: ChatUITheme = {
  primary: 'scxl:text-blue-600',
  primaryHover: 'hover:scxl:text-blue-700',
  inputBorder: 'scxl:border-blue-600',
  userBubble: 'scxl:bg-blue-600',
  connecting: 'scxl:bg-blue-600',
};

function App() {
  return (
    <ChatUI 
      connectionUrl="wss://your-server.com/api/offer"
      theme={blueTheme}
    />
  );
}
```

### Advanced Theme (Dark Mode)

```tsx
const darkTheme: ChatUITheme = {
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
};
```

## 🔔 Callback Usage

```tsx
import { ChatUI, ChatUICallbacks } from '@scoreexl/chatui';

const callbacks: ChatUICallbacks = {
  onConnect: () => console.log('🔗 Connected!'),
  onDisconnect: () => console.log('🔌 Disconnected'),
  onError: (error) => console.error('❌ Error:', error),
  onBotReady: () => console.log('🤖 Bot ready!'),
  onMessageSent: (message) => console.log('📤 Sent:', message),
  onMessageReceived: (message) => console.log('📥 Received:', message),
  onUserStartedSpeaking: () => console.log('🎤 User speaking'),
  onUserStoppedSpeaking: () => console.log('🔇 User stopped'),
};

function App() {
  return (
    <ChatUI 
      connectionUrl="wss://your-server.com/api/offer"
      callbacks={callbacks}
    />
  );
}
```

## ⚙️ Complete Configuration

```tsx
<ChatUI
  // Required
  connectionUrl="wss://your-server.com/api/offer"
  
  // Basic Config
  systemPrompt="You are a helpful AI assistant."
  theme={customTheme}
  size="lg"
  className="scxl:min-h-screen"
  
  // Typewriter Settings
  typewriterSpeed={30}
  enableTypewriter={true}
  
  // Feature Controls
  enableVoice={true}
  enableTextInput={true}
  enableMicrophone={true}
  showParticipantId={false}
  showConnectionStatus={true}
  
  // Behavior
  autoConnect={false}
  reconnectAttempts={3}
  reconnectDelay={1000}
  
  // Callbacks
  callbacks={callbacks}
  
  // Custom Labels
  labels={{
    title: 'My AI Assistant',
    subtitle: 'Start your conversation',
    connectButton: 'Connect Now',
    disconnectButton: 'End Chat',
    inputPlaceholder: 'Ask me anything...',
    voiceTooltip: 'Switch to voice mode',
    loadingText: 'Initializing chat...',
    botReadyText: 'AI Ready',
    connectedText: 'Online',
  }}
/>
```

## 📋 Props Reference

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `connectionUrl` | `string` | **Required** | WebSocket connection URL |
| `systemPrompt` | `string` | `"You are a helpful AI assistant."` | AI system prompt |
| `theme` | `ChatUITheme` | `defaultTheme` | Theme configuration |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Component size variant |
| `className` | `string` | `''` | Additional CSS classes |

### Feature Controls

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `typewriterSpeed` | `number` | `20` | Typing animation speed (ms per character) |
| `enableTypewriter` | `boolean` | `true` | Enable typewriter effect |
| `enableVoice` | `boolean` | `true` | Show voice controls |
| `enableTextInput` | `boolean` | `true` | Enable text input |
| `enableMicrophone` | `boolean` | `true` | Enable microphone access |
| `showParticipantId` | `boolean` | `true` | Show participant ID |
| `showConnectionStatus` | `boolean` | `true` | Show connection status indicator |

### Behavior

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `autoConnect` | `boolean` | `false` | Auto-connect on mount |
| `reconnectAttempts` | `number` | `3` | Number of reconnection attempts |
| `reconnectDelay` | `number` | `1000` | Delay between reconnection attempts (ms) |

### Customization

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `callbacks` | `ChatUICallbacks` | `{}` | Event callbacks |
| `labels` | `object` | `defaultLabels` | Custom text labels |
| `customIcons` | `object` | `{}` | Custom icon components |

## 🎨 Theme Properties

### Colors (Tailwind Classes)

```tsx
interface ChatUITheme {
  // Primary Colors
  primary?: string;           // e.g., 'scxl:text-blue-500'
  primaryHover?: string;      // e.g., 'hover:scxl:text-blue-600'
  primaryLight?: string;      // e.g., 'scxl:text-blue-300'
  
  // Backgrounds
  background?: string;        // e.g., 'scxl:bg-white'
  cardBackground?: string;    // e.g., 'scxl:bg-gray-50'
  inputBackground?: string;   // e.g., 'scxl:bg-white'
  
  // Borders
  border?: string;           // e.g., 'scxl:border-gray-200'
  inputBorder?: string;      // e.g., 'scxl:border-blue-500'
  inputBorderFocus?: string; // e.g., 'focus:scxl:border-blue-600'
  
  // Text
  textPrimary?: string;      // e.g., 'scxl:text-gray-900'
  textSecondary?: string;    // e.g., 'scxl:text-gray-500'
  textMuted?: string;        // e.g., 'scxl:text-gray-400'
  
  // Status Colors
  success?: string;          // e.g., 'scxl:text-green-500'
  error?: string;            // e.g., 'scxl:text-red-500'
  warning?: string;          // e.g., 'scxl:text-yellow-500'
  
  // Chat Bubbles
  userBubble?: string;       // e.g., 'scxl:bg-blue-500'
  userBubbleText?: string;   // e.g., 'scxl:text-white'
  botBubble?: string;        // e.g., 'scxl:bg-gray-100'
  botBubbleText?: string;    // e.g., 'scxl:text-gray-900'
  
  // Connection Status
  connected?: string;        // e.g., 'scxl:bg-green-500'
  connecting?: string;       // e.g., 'scxl:bg-yellow-500'
  disconnected?: string;     // e.g., 'scxl:bg-red-500'
  ready?: string;           // e.g., 'scxl:bg-green-500'
}
```

## 🔧 Advanced Usage

### Custom Error Handling

```tsx
const callbacks: ChatUICallbacks = {
  onError: (error: string) => {
    // Custom error handling
    if (error.includes('network')) {
      // Handle network errors
      showNetworkErrorDialog();
    } else if (error.includes('auth')) {
      // Handle authentication errors
      redirectToLogin();
    }
  },
};
```

### Auto-Reconnection

```tsx
<ChatUI
  connectionUrl="wss://your-server.com/api/offer"
  autoConnect={true}
  reconnectAttempts={5}
  reconnectDelay={2000}
  callbacks={{
    onDisconnect: () => {
      console.log('Attempting to reconnect...');
    },
    onConnect: () => {
      console.log('Reconnected successfully!');
    }
  }}
/>
```

## 🧪 Testing

The component includes proper cleanup mechanisms and can be easily tested:

```tsx
import { render, cleanup } from '@testing-library/react';
import { ChatUI } from '@scoreexl/chatui';

afterEach(cleanup);

test('renders ChatUI component', () => {
  const { getByText } = render(
    <ChatUI connectionUrl="wss://test.com" />
  );
  // Your tests here
});
```

## 🛠️ Development

### Building for Production

Since this uses Vite + React + TypeScript:

```bash
npm run build
```

### Type Safety

All props are fully typed with TypeScript for excellent developer experience and compile-time error checking.

## 📄 License

MIT License - feel free to use in your projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

---

**Made with ❤️ for the React community**
