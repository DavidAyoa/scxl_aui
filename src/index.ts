import "./App.css";
import "./index.css";

// Types
export type { 
  ChatUIProps, 
  ChatUITheme, 
  ChatUICallbacks, 
  ChatUIConfig, 
  ChatUISize, 
  ChatUIState 
} from './types';

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
export { default as ChatUI } from './ChatUI';
