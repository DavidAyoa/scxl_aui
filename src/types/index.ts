import {
  type PipecatClient,
  type ConnectionEndpoint,
  type PipecatClientOptions,
  type TransportConnectionParams,
} from "@pipecat-ai/client-js";

export interface ResponseParserProps {
  rawContent: string
  className?: string
  typewriterEffect?: boolean
  timeStamp?: string
  typewriterSpeed?: number
  disableTypewriter?: boolean
}

export interface ChatUITheme {
  // Primary Colors (Tailwind classes)
  primary?: string; // e.g., 'scxl:text-blue-500'
  primaryHover?: string; // e.g., 'hover:scxl:text-blue-600'
  primaryLight?: string; // e.g., 'scxl:text-blue-300'
  
  // Background Colors (Tailwind classes)
  background?: string; // e.g., 'scxl:bg-white'
  cardBackground?: string; // e.g., 'scxl:bg-gray-50'
  inputBackground?: string; // e.g., 'scxl:bg-white'
  
  // Border Colors (Tailwind classes)
  border?: string; // e.g., 'scxl:border-gray-200'
  inputBorder?: string; // e.g., 'scxl:border-blue-500'
  inputBorderFocus?: string; // e.g., 'focus:scxl:border-blue-600'
  
  // Text Colors (Tailwind classes)
  textPrimary?: string; // e.g., 'scxl:text-gray-900'
  textSecondary?: string; // e.g., 'scxl:text-gray-500'
  textMuted?: string; // e.g., 'scxl:text-gray-400'
  
  // Status Colors (Tailwind classes)
  success?: string; // e.g., 'scxl:text-green-500'
  successLight?: string; // e.g., 'scxl:bg-green-100'
  error?: string; // e.g., 'scxl:text-red-500'
  errorLight?: string; // e.g., 'scxl:bg-red-200'
  warning?: string; // e.g., 'scxl:text-yellow-500'
  warningLight?: string; // e.g., 'scxl:bg-yellow-100'
  
  // Chat Bubble Colors (Tailwind classes)
  userBubble?: string; // e.g., 'scxl:bg-blue-500'
  userBubbleText?: string; // e.g., 'scxl:text-white'
  botBubble?: string; // e.g., 'scxl:bg-gray-100'
  botBubbleText?: string; // e.g., 'scxl:text-gray-900'
  
  // Connection Status Colors (Tailwind classes)
  connected?: string; // e.g., 'scxl:bg-green-500'
  connecting?: string; // e.g., 'scxl:bg-yellow-500'
  disconnected?: string; // e.g., 'scxl:bg-red-500'
  ready?: string; // e.g., 'scxl:bg-green-500'
}

export interface ChatUICallbacks {
  onConnect?: () => void;
  onDisconnect?: () => void;
  onError?: (error: string) => void;
  onBotReady?: () => void;
  onUserStartedSpeaking?: () => void;
  onUserStoppedSpeaking?: () => void;
  onBotStartedSpeaking?: () => void;
  onBotStoppedSpeaking?: () => void;
  onMessageSent?: (message: string) => void;
  onMessageReceived?: (message: string) => void;
  onParticipantJoined?: (participant: any) => void;
  onTrackStarted?: (track: any, participant: any) => void;
}

export interface ChatUIConfig {
  // Connection
  connectionUrl: string;
  systemPrompt?: string;
  
  // Appearance
  theme?: ChatUITheme;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  
  // Typewriter Settings
  typewriterSpeed?: number;
  enableTypewriter?: boolean;
  
  // Features
  enableVoice?: boolean;
  enableTextInput?: boolean;
  enableMicrophone?: boolean;
  showParticipantId?: boolean;
  showConnectionStatus?: boolean;
  
  // Audio Settings
  enableAudioVisualization?: boolean;
  audioGainControl?: boolean;
  
  // Behavior
  autoConnect?: boolean;
  reconnectAttempts?: number;
  reconnectDelay?: number;
  
  // Callbacks
  callbacks?: ChatUICallbacks;
  
  // Labels & Text
  labels?: {
    title?: string;
    subtitle?: string;
    connectButton?: string;
    disconnectButton?: string;
    inputPlaceholder?: string;
    voiceTooltip?: string;
    loadingText?: string;
    errorTitle?: string;
    botReadyText?: string;
    connectedText?: string;
    connectingText?: string;
  };
  
  // Custom Components
  customIcons?: {
    microphone?: React.ComponentType;
    send?: React.ComponentType;
    bot?: React.ComponentType;
    audio?: React.ComponentType;
    disconnect?: React.ComponentType;
  };
}

export interface ChatUIProps extends ChatUIConfig {
  // Legacy support
  systemPrompt?: string;
}

export type ChatUISize = 'sm' | 'md' | 'lg';

export interface ChatUIState {
  isConnected: boolean;
  isConnecting: boolean;
  isBotReady: boolean;
  error: string | null;
  participantId?: string;
}

export interface WebRTCTransportProps {
  /**
   * Sets the audio codec. Only applicable for SmallWebRTC transport.
   * Defaults to "default" which uses the browser's default codec.
   */
  audioCodec?: string;
  /**
   * Options for configuring the RTVI client.
   */
  clientOptions?: Partial<PipecatClientOptions>;
  /**
   * Parameters for connecting to the transport.
   */
  connectParams?: TransportConnectionParams | ConnectionEndpoint;
  /**
   * Disables user audio input entirely.
   */
  noUserAudio?: boolean;
  /**
   * System prompt to be used for the AI assistant.
   * This defines the behavior and personality of the AI.
   */
  systemPrompt?: string;
  /**
   * Type of transport to use for the RTVI client.
   * - "smallwebrtc" for SmallWebRTC Transport
   * Defaults to "smallwebrtc".
   */
  transportType?: "smallwebrtc";
}

export interface UseSmallWebRTCReturn {
  client: PipecatClient | null;
  isClientReady: boolean;
  isBotReady: boolean;
  isConnected: boolean;
  participantId: string;
  handleConnect: () => Promise<void>;
  handleDisconnect: () => Promise<void>;
}

export interface ConversationMessage {
  role: "user" | "assistant";
  content: string;
  final?: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface Props {
  onMessageAdded?: (message: ConversationMessage) => void;
}