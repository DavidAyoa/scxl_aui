import type { ChatUITheme, ChatUISize } from '../types';

// Default theme using Tailwind classes (replaces all indigo-500 references)
export const defaultTheme: ChatUITheme = {
  primary: 'text-indigo-500',
  primaryHover: 'hover:text-indigo-600',
  primaryLight: 'text-indigo-300',
  
  background: 'bg-white',
  cardBackground: 'bg-white',
  inputBackground: 'bg-white',
  
  border: 'border-gray-200',
  inputBorder: 'border-indigo-500',
  inputBorderFocus: 'focus:border-indigo-600',
  
  textPrimary: 'text-gray-900',
  textSecondary: 'text-gray-500',
  textMuted: 'text-gray-400',
  
  success: 'text-emerald-500',
  successLight: 'bg-emerald-100',
  error: 'text-red-500',
  errorLight: 'bg-red-200',
  warning: 'text-amber-500',
  warningLight: 'bg-amber-100',
  
  userBubble: 'bg-indigo-500',
  userBubbleText: 'text-white',
  botBubble: 'bg-gray-100',
  botBubbleText: 'text-gray-900',
  
  connected: 'bg-emerald-500',
  connecting: 'bg-indigo-500',
  disconnected: 'bg-red-500',
  ready: 'bg-emerald-500',
};

// Size configurations
export const sizeConfig = {
  sm: {
    container: 'max-w-md',
    text: 'text-sm',
    padding: 'p-3',
    button: 'px-3 py-1.5 text-xs',
    input: 'p-3 text-sm',
    title: 'text-lg',
  },
  md: {
    container: 'max-w-2xl',
    text: 'text-base',
    padding: 'p-4',
    button: 'px-4 py-2 text-sm',
    input: 'p-4 text-sm',
    title: 'text-xl',
  },
  lg: {
    container: 'max-w-4xl',
    text: 'text-lg',
    padding: 'p-6',
    button: 'px-6 py-3 text-base',
    input: 'p-6 text-base',
    title: 'text-2xl',
  },
};

// Generate theme classes by merging with defaults
export const getThemeClasses = (theme: ChatUITheme = {}) => {
  const mergedTheme = { ...defaultTheme, ...theme };
  
  return {
    primary: mergedTheme.primary || defaultTheme.primary!,
    primaryHover: mergedTheme.primaryHover || defaultTheme.primaryHover!,
    primaryLight: mergedTheme.primaryLight || defaultTheme.primaryLight!,
    
    background: mergedTheme.background || defaultTheme.background!,
    cardBackground: mergedTheme.cardBackground || defaultTheme.cardBackground!,
    inputBackground: mergedTheme.inputBackground || defaultTheme.inputBackground!,
    
    border: mergedTheme.border || defaultTheme.border!,
    inputBorder: mergedTheme.inputBorder || defaultTheme.inputBorder!,
    inputBorderFocus: mergedTheme.inputBorderFocus || defaultTheme.inputBorderFocus!,
    
    textPrimary: mergedTheme.textPrimary || defaultTheme.textPrimary!,
    textSecondary: mergedTheme.textSecondary || defaultTheme.textSecondary!,
    textMuted: mergedTheme.textMuted || defaultTheme.textMuted!,
    
    success: mergedTheme.success || defaultTheme.success!,
    successLight: mergedTheme.successLight || defaultTheme.successLight!,
    error: mergedTheme.error || defaultTheme.error!,
    errorLight: mergedTheme.errorLight || defaultTheme.errorLight!,
    warning: mergedTheme.warning || defaultTheme.warning!,
    warningLight: mergedTheme.warningLight || defaultTheme.warningLight!,
    
    userBubble: mergedTheme.userBubble || defaultTheme.userBubble!,
    userBubbleText: mergedTheme.userBubbleText || defaultTheme.userBubbleText!,
    botBubble: mergedTheme.botBubble || defaultTheme.botBubble!,
    botBubbleText: mergedTheme.botBubbleText || defaultTheme.botBubbleText!,
    
    connected: mergedTheme.connected || defaultTheme.connected!,
    connecting: mergedTheme.connecting || defaultTheme.connecting!,
    disconnected: mergedTheme.disconnected || defaultTheme.disconnected!,
    ready: mergedTheme.ready || defaultTheme.ready!,
  };
};

// Get size-specific classes
export const getSizeClasses = (size: ChatUISize = 'md') => {
  return sizeConfig[size];
};

// Default labels
export const defaultLabels = {
  title: 'Voice Chat',
  subtitle: 'Connect to start your conversation',
  connectButton: 'Connect',
  disconnectButton: 'Disconnect',
  inputPlaceholder: 'Ask anything...',
  voiceTooltip: 'Switch to voice mode',
  textTooltip: 'Switch to text mode',
  loadingText: 'Initializing...',
  errorTitle: 'Connection Error',
  botReadyText: 'Bot Ready',
  connectedText: 'Connected',
  connectingText: 'Connecting...',
};
