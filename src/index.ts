// Main ChatUI Component
export { default as ChatUI } from './ChatUIEnhanced';
export { default as ChatUIEnhanced } from './ChatUIEnhanced';

// Types
export type { 
  ChatUIProps, 
  ChatUITheme, 
  ChatUICallbacks, 
  ChatUIConfig, 
  ChatUISize, 
  ChatUIState 
} from './types/ChatUITypes';

// Utilities
export { 
  defaultTheme, 
  defaultLabels, 
  getThemeClasses, 
  getSizeClasses 
} from './utils/theme';

// Components
export { default as TypeWriter } from './components/TypeWriter';

// Re-export original component for backward compatibility
export { default as ChatUIOriginal } from './ChatUI';
