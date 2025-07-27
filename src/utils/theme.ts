import type { ChatUITheme, ChatUISize } from '../types';

// Default theme using Tailwind classes (replaces all indigo-500 references)
export const defaultTheme: ChatUITheme = {
  primary: 'scxl:text-indigo-500',
  primaryHover: 'hover:scxl:text-indigo-600',
  primaryLight: 'scxl:text-indigo-300',
  
  background: 'scxl:bg-white',
  cardBackground: 'scxl:bg-white',
  inputBackground: 'scxl:bg-white',
  
  border: 'scxl:border-gray-200',
  inputBorder: 'scxl:border-indigo-500',
  inputBorderFocus: 'focus:scxl:border-indigo-600',
  
  textPrimary: 'scxl:text-gray-900',
  textSecondary: 'scxl:text-gray-500',
  textMuted: 'scxl:text-gray-400',
  
  success: 'scxl:text-emerald-500',
  successLight: 'scxl:bg-emerald-100',
  error: 'scxl:text-red-500',
  errorLight: 'scxl:bg-red-200',
  warning: 'scxl:text-amber-500',
  warningLight: 'scxl:bg-amber-100',
  
  userBubble: 'scxl:bg-indigo-500',
  userBubbleText: 'scxl:text-white',
  botBubble: 'scxl:bg-gray-100',
  botBubbleText: 'scxl:text-gray-900',
  
  connected: 'scxl:bg-emerald-500',
  connecting: 'scxl:bg-indigo-500',
  disconnected: 'scxl:bg-red-500',
  ready: 'scxl:bg-emerald-500',
};

// Size configurations
export const sizeConfig = {
  sm: {
    container: 'scxl:max-w-md',
    text: 'scxl:text-sm',
    padding: 'scxl:p-3',
    button: 'scxl:px-3 scxl:py-1.5 scxl:text-xs',
    input: 'scxl:p-3 scxl:text-sm',
    title: 'scxl:text-lg',
  },
  md: {
    container: 'scxl:max-w-2xl',
    text: 'scxl:text-base',
    padding: 'scxl:p-4',
    button: 'scxl:px-4 scxl:py-2 scxl:text-sm',
    input: 'scxl:p-4 scxl:text-sm',
    title: 'scxl:text-xl',
  },
  lg: {
    container: 'scxl:max-w-4xl',
    text: 'scxl:text-lg',
    padding: 'scxl:p-6',
    button: 'scxl:px-6 scxl:py-3 scxl:text-base',
    input: 'scxl:p-6 scxl:text-base',
    title: 'scxl:text-2xl',
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
