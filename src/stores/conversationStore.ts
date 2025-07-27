interface ConversationMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  final?: boolean;
  createdAt: string;
  updatedAt?: string;
  isFresh?: boolean; // Indicates if this message should have typewriter effect
}

interface ConversationState {
  messages: ConversationMessage[];
  isLoading: boolean;
  lastUpdated: string;
}

class ConversationStore {
  private state: ConversationState = {
    messages: [],
    isLoading: false,
    lastUpdated: new Date().toISOString(),
  };

  private listeners: Set<() => void> = new Set();
  private storageKey = 'scxl_conversation_state';
  private useSessionStorage = true; // true = clears on browser close, false = persists forever

  constructor() {
    // Choose your storage strategy:
    
    // Option 1: Fresh session each time (clears on page reload)
    this.clearStorageOnStart();
    
    // Option 2: Session-based (persists during tab navigation, clears on browser close)
    // this.loadFromSessionStorage();
    
    // Option 3: Persistent (keeps conversation history forever)
    // this.loadFromStorage();
  }

  // Clear storage on app start for fresh sessions
  private clearStorageOnStart() {
    try {
      localStorage.removeItem(this.storageKey);
      sessionStorage.removeItem(this.storageKey);
    } catch (error) {
      console.warn('Failed to clear conversation storage:', error);
    }
  }

  // Load from sessionStorage (clears when browser closes)
  private loadFromSessionStorage() {
    try {
      const stored = sessionStorage.getItem(this.storageKey);
      if (stored) {
        const parsedState = JSON.parse(stored);
        // Ensure all messages have the isFresh property (backward compatibility)
        if (parsedState.messages) {
          parsedState.messages = parsedState.messages.map((msg: any) => ({
            ...msg,
            isFresh: msg.isFresh ?? false, // Default to false for existing messages
          }));
        }
        this.state = {
          ...this.state,
          ...parsedState,
        };
      }
    } catch (error) {
      console.warn('Failed to load conversation from sessionStorage:', error);
    }
  }

  // Subscribe to state changes
  subscribe(callback: () => void) {
    this.listeners.add(callback);
    return () => {
      this.listeners.delete(callback);
    };
  }

  // Notify all listeners of state changes
  private notify() {
    this.state.lastUpdated = new Date().toISOString();
    this.saveToStorage();
    this.listeners.forEach(callback => callback());
  }

  // Get current state
  getState(): ConversationState {
    return { ...this.state };
  }

  // Get all messages
  getMessages(): ConversationMessage[] {
    return [...this.state.messages];
  }

  // Add a new message
  addMessage(message: Omit<ConversationMessage, 'id' | 'createdAt'>) {
    const newMessage: ConversationMessage = {
      ...message,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.state.messages.push(newMessage);
    this.notify();
    return newMessage;
  }

  // Update an existing message
  updateMessage(id: string, updates: Partial<ConversationMessage>) {
    const messageIndex = this.state.messages.findIndex(msg => msg.id === id);
    if (messageIndex !== -1) {
      this.state.messages[messageIndex] = {
        ...this.state.messages[messageIndex],
        ...updates,
        updatedAt: new Date().toISOString(),
      };
      this.notify();
      return this.state.messages[messageIndex];
    }
    return null;
  }

  // Update or add message by role and content matching
  updateOrAddMessage(role: "user" | "assistant", content: string, final?: boolean) {
    const now = new Date().toISOString();
    
    // For assistant messages, try to update the last incomplete assistant message
    if (role === "assistant") {
      // Find last index using reverse iteration
      let lastAssistantIndex = -1;
      for (let i = this.state.messages.length - 1; i >= 0; i--) {
        if (this.state.messages[i].role === "assistant" && !this.state.messages[i].final) {
          lastAssistantIndex = i;
          break;
        }
      }
      
      if (lastAssistantIndex !== -1) {
        const existingMessage = this.state.messages[lastAssistantIndex];
        this.state.messages[lastAssistantIndex] = {
          ...existingMessage,
          content: existingMessage.content + content,
          final: final,
          updatedAt: now,
        };
        this.notify();
        return this.state.messages[lastAssistantIndex];
      }
    }

    // Add new message if no existing message to update
    return this.addMessage({ role, content, final });
  }

  // Clear all messages
  clearMessages() {
    this.state.messages = [];
    this.notify();
  }

  // Set loading state
  setLoading(isLoading: boolean) {
    this.state.isLoading = isLoading;
    this.notify();
  }

  // Remove messages older than specified time
  cleanupOldMessages(olderThanHours: number = 24) {
    const cutoffTime = new Date();
    cutoffTime.setHours(cutoffTime.getHours() - olderThanHours);
    
    this.state.messages = this.state.messages.filter(
      msg => new Date(msg.createdAt) > cutoffTime
    );
    this.notify();
  }

  // Find message by ID
  findMessage(id: string): ConversationMessage | undefined {
    return this.state.messages.find(msg => msg.id === id);
  }

  // Get merged messages (combine consecutive messages from same role within time threshold)
  getMergedMessages(timeThresholdMs: number = 30000): ConversationMessage[] {
    const mergedMessages: ConversationMessage[] = [];

    for (let i = 0; i < this.state.messages.length; i++) {
      const currentMessage = this.state.messages[i];
      const lastMerged = mergedMessages[mergedMessages.length - 1];

      const timeDiff = lastMerged
        ? Math.abs(
            new Date(currentMessage.createdAt).getTime() -
            new Date(lastMerged.createdAt).getTime()
          )
        : Infinity;

      const shouldMerge =
        lastMerged &&
        lastMerged.role === currentMessage.role &&
        timeDiff < timeThresholdMs;

      if (shouldMerge) {
        mergedMessages[mergedMessages.length - 1] = {
          ...lastMerged,
          content: `${lastMerged.content} ${currentMessage.content}`,
          updatedAt: currentMessage.updatedAt || currentMessage.createdAt,
          final: currentMessage.final !== false,
        };
      } else {
        mergedMessages.push({ ...currentMessage });
      }
    }

    return mergedMessages;
  }

  // Save to localStorage
  private saveToStorage() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (error) {
      console.warn('Failed to save conversation to localStorage:', error);
    }
  }

  // Load from localStorage
  private loadFromStorage() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        const parsedState = JSON.parse(stored);
        // Ensure all messages have the isFresh property (backward compatibility)
        if (parsedState.messages) {
          parsedState.messages = parsedState.messages.map((msg: any) => ({
            ...msg,
            isFresh: msg.isFresh ?? false, // Default to false for existing messages
          }));
        }
        this.state = {
          ...this.state,
          ...parsedState,
        };
      }
    } catch (error) {
      console.warn('Failed to load conversation from localStorage:', error);
    }
  }

  // Mark all messages as not fresh (disable typewriter for all)
  markAllMessagesAsStale() {
    this.state.messages = this.state.messages.map(msg => ({
      ...msg,
      isFresh: false,
    }));
    this.notify();
  }

  // Mark a specific message as fresh (enable typewriter)
  markMessageAsFresh(id: string) {
    const messageIndex = this.state.messages.findIndex(msg => msg.id === id);
    if (messageIndex !== -1) {
      // First mark all messages as stale
      this.state.messages = this.state.messages.map(msg => ({
        ...msg,
        isFresh: false,
      }));
      
      // Then mark the specific message as fresh
      this.state.messages[messageIndex] = {
        ...this.state.messages[messageIndex],
        isFresh: true,
      };
      this.notify();
    }
  }

  // Mark the latest assistant message as fresh
  markLatestAssistantAsFresh() {
    const lastAssistantIndex = this.state.messages.slice().reverse().findIndex(
      msg => msg.role === "assistant"
    );
    
    if (lastAssistantIndex !== -1) {
      const actualIndex = this.state.messages.length - 1 - lastAssistantIndex;
      const messageId = this.state.messages[actualIndex].id;
      this.markMessageAsFresh(messageId);
    }
  }

  // Generate unique ID
  private generateId(): string {
    return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

// Create singleton instance
export const conversationStore = new ConversationStore();
export default conversationStore;
export type { ConversationMessage, ConversationState };
