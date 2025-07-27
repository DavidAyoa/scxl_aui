import { useState, useMemo, useEffect } from "react";
import clsx from "clsx";
import "./App.css";
import Conversations from "./components/ChatUI/Conversations";
import ConnectButton from "./components/ChatUI/ConnectButton";
import { useSmallWebRTC } from "./hooks/useSmallWebRTC";
import useConversation from "./hooks/useConversation";
import conversationStore from "./stores/conversationStore";
import {
  PipecatClientAudio,
  PipecatClientProvider,
} from "@pipecat-ai/client-react";
import type { ChatUIProps } from "./types";
import { defaultLabels, getThemeClasses, getSizeClasses } from "./utils/theme";
import type { Participant, PipecatClient } from "@pipecat-ai/client-js";
import {
  TextModeControl,
  VoiceModeControl,
} from "./components/ChatUI/InputControl";

// Enhanced Loading Spinner Component
const LoadingSpinner: React.FC<{
  theme: ReturnType<typeof getThemeClasses>;
  labels: typeof defaultLabels;
  size: ReturnType<typeof getSizeClasses>;
}> = ({ theme, labels, size }) => (
  <div className="scxl:w-full scxl:h-screen scxl:p-5 scxl:font-poppins scxl:flex scxl:justify-center scxl:items-center">
    <div className="scxl:flex scxl:flex-col scxl:items-center scxl:gap-6">
      <div className="scxl:text-center scxl:space-y-2">
        <h1 className={clsx(size.title, "scxl:font-bold", theme.primary)}>
          {labels.title}
        </h1>
        <p className={theme.textSecondary}>{labels.loadingText}</p>
      </div>
      <div
        className={clsx(
          "scxl:animate-spin scxl:rounded-full scxl:h-8 scxl:w-8 scxl:border-b-2",
          theme.inputBorder
        )}
      ></div>
    </div>
  </div>
);

// Enhanced Connection Screen Component
const ConnectionScreen: React.FC<{
  onConnect: () => Promise<void>;
  error: string | null;
  participantId?: string;
  theme: ReturnType<typeof getThemeClasses>;
  labels: typeof defaultLabels;
  size: ReturnType<typeof getSizeClasses>;
  showParticipantId?: boolean;
  trackHasStarted: boolean;
}> = ({
  onConnect,
  error,
  participantId,
  theme,
  labels,
  size,
  showParticipantId = true,
  trackHasStarted,
}) => (
  <div className="scxl:w-full scxl:h-screen scxl:p-5 scxl:font-poppins scxl:flex scxl:justify-center scxl:items-center">
    <div className="scxl:flex scxl:flex-col scxl:items-center scxl:gap-6">
      <div className="scxl:text-center scxl:space-y-2">
        <h1 className={clsx(size.title, "scxl:font-bold", theme.primary)}>
          {labels.title}
        </h1>
        <p className={theme.textSecondary}>{labels.subtitle}</p>
      </div>

      {error && (
        <div
          className={clsx(
            "scxl:border scxl:rounded-lg",
            size.padding,
            theme.errorLight,
            theme.border
          )}
        >
          <p className={clsx(size.text, theme.error)}>{error}</p>
        </div>
      )}

      <ConnectButton onConnect={onConnect} trackHasStarted={trackHasStarted} />

      {showParticipantId && participantId && (
        <p className={clsx(size.text, theme.textMuted)}>
          Participant ID: {participantId}
        </p>
      )}
    </div>
  </div>
);

// Enhanced Main Chat Area Component
const MainChatArea: React.FC<{
  isBotReady: boolean;
  participantId?: string;
  onTextSend: (e: any) => void;
  onDisconnect: () => Promise<void>;
  theme: ReturnType<typeof getThemeClasses>;
  labels: typeof defaultLabels;
  size: ReturnType<typeof getSizeClasses>;
  showParticipantId?: boolean;
  showConnectionStatus?: boolean;
  enableVoice?: boolean;
  typewriterSpeed?: number;
  client?: PipecatClient; // Add client prop for WebRTC control
}> = ({
  isBotReady,
  participantId,
  onTextSend,
  onDisconnect,
  theme,
  labels,
  size,
  showParticipantId = true,
  showConnectionStatus = true,
  enableVoice = true,
  client,
}) => {
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isAtMaxHeight, setIsAtMaxHeight] = useState(false);
  const [isTogglingVoice, setIsTogglingVoice] = useState(false);

  const handleHeightChange = (height: number) => {
    setIsAtMaxHeight(height >= 240);
  };

  // Handle voice mode toggle with proper WebRTC integration
  const handleVoiceModeToggle = async () => {
    if (isTogglingVoice) return;

    console.log("Toggling voice mode to", !isVoiceMode);

    try {
      setIsTogglingVoice(true);

      const newVoiceMode = !isVoiceMode;
      client?.enableMic?.(newVoiceMode);
      setIsVoiceMode(newVoiceMode);
      client?.sendClientMessage("voice_mode", { isVoiceMode: newVoiceMode });
      console.log("Switched to", newVoiceMode ? "voice mode" : "text mode");
    } catch (error) {
      console.error("Failed to toggle voice mode:", error);
      // Optionally show error to user
    } finally {
      setIsTogglingVoice(false);
    }
  };

  const handleDisconnect = () => {
    if (isVoiceMode) {
      // If in voice mode, just toggle it off
      handleVoiceModeToggle();
    } else if (onDisconnect) {
      // Otherwise call the disconnect handler if provided
      onDisconnect();
    }
  };

  return (
    <div className="scxl:w-full scxl:h-screen scxl:p-5 scxl:font-poppins scxl:flex scxl:justify-center scxl:items-center">
      <div className="scxl:w-full scxl:h-full scxl:flex scxl:flex-1 scxl:flex-col scxl:justify-center scxl:items-center">
        <div
          className={clsx(
            "scxl:w-full scxl:h-full scxl:flex scxl:flex-col scxl:justify-center scxl:items-center",
            size.container
          )}
        >
          <Conversations />
          {isVoiceMode ? (
            <VoiceModeControl
              theme={theme}
              size={size}
              labels={labels}
              isVoiceMode={isVoiceMode}
              handleDisconnect={handleDisconnect}
              onVoiceModeToggle={handleVoiceModeToggle}
              isTogglingVoice={isTogglingVoice}
            />
          ) : (
            <TextModeControl
              theme={theme}
              size={size}
              labels={labels}
              isVoiceMode={isVoiceMode}
              isBotReady={isBotReady}
              isTogglingVoice={isTogglingVoice}
              showConnectionStatus={showConnectionStatus}
              showParticipantId={showParticipantId}
              enableVoice={enableVoice}
              participantId={participantId}
              isAtMaxHeight={isAtMaxHeight}
              onTextSend={onTextSend}
              onVoiceModeToggle={handleVoiceModeToggle}
              onDisconnect={onDisconnect}
              onHeightChange={handleHeightChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ChatUIEnhanced: React.FC<ChatUIProps> = ({
  systemPrompt = "You are a helpful AI assistant.",
  connectionUrl,
  theme = {},
  className = "",
  callbacks = {},
  labels = {},
  size = "md",
  typewriterSpeed = 20,
  enableVoice = true,
  enableTextInput = true,
  enableMicrophone = true,
  showParticipantId = true,
  showConnectionStatus = true,
  autoConnect = false,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [trackHasStarted, setTrackHasStarted] = useState<boolean>(false);

  // Merge themes and labels with defaults
  const themeClasses = getThemeClasses(theme);
  const sizeClasses = getSizeClasses(size);
  const mergedLabels = { ...defaultLabels, ...labels };

  // Enhanced client options with user callbacks
  const clientOptions = useMemo(
    () => ({
      enableMic: enableMicrophone,
      callbacks: {
        onParticipantJoined: (participant: any) => {
          console.log("Participant joined:", participant);
          setError(null);
          callbacks.onParticipantJoined?.(participant);
        },
        onTrackStarted: (
          track: MediaStreamTrack,
          participant: Participant | undefined
        ) => {
          console.log("Track started:", {
            kind: track.kind,
            enabled: track.enabled,
            muted: track.muted,
            readyState: track.readyState,
            participant: participant,
          });
          track.enabled = false;
          callbacks.onTrackStarted?.(track, participant);
          setTrackHasStarted(true);
        },
        onDisconnected: () => {
          console.log("Client disconnected");
          callbacks.onDisconnect?.();
        },
        onConnected: () => {
          console.log("Client connected");
          callbacks.onConnect?.();
        },
        onError: (message: any) => {
          console.error("Client error:", message);
          const errorMsg = message.label || message.type || "An error occurred";
          setError(errorMsg);
          callbacks.onError?.(errorMsg);
        },
        onBotReady: () => {
          callbacks.onBotReady?.();
          console.log("Bot is ready!");
        },
        onUserStartedSpeaking: () => {
          console.log("User started speaking");
          callbacks.onUserStartedSpeaking?.();
        },
        onUserStoppedSpeaking: () => {
          console.log("User stopped speaking");
          callbacks.onUserStoppedSpeaking?.();
        },
        onBotStartedSpeaking: () => {
          console.log("Bot started speaking");
          callbacks.onBotStartedSpeaking?.();
        },
        onBotStoppedSpeaking: () => {
          console.log("Bot stopped speaking");
          callbacks.onBotStoppedSpeaking?.();
        },
        onClientMessage: (message: any) => {
          console.log("Client message:", message);
          callbacks.onMessageReceived?.(message);
        },
      },
    }),
    [callbacks, enableMicrophone]
  );

  const connectParams = useMemo(
    () => ({
      connectionUrl: connectionUrl || "wss://localhost:8765", // fallback URL
    }),
    [connectionUrl]
  );

  const {
    client,
    isConnected,
    isClientReady,
    isBotReady,
    participantId,
    handleConnect: hookConnect,
    handleDisconnect: hookDisconnect,
  } = useSmallWebRTC({
    noUserAudio: !enableMicrophone,
    connectParams,
    clientOptions,
    systemPrompt,
  });

  const handleConnect = async () => {
    try {
      setError(null);
      await hookConnect();
    } catch (err) {
      console.error("Failed to connect:", err);
      setError(err instanceof Error ? err.message : "Failed to connect");
    }
  };

  const handleDisconnect = async () => {
    try {
      await hookDisconnect();
      setError(null);
    } catch (err) {
      console.error("Failed to disconnect:", err);
      setError(err instanceof Error ? err.message : "Failed to disconnect");
    }
  };

  const { addUserMessage } = useConversation();

  const handleTextSend = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      if (!enableTextInput) return;

      const message = e.target.value.trim();

      if (message && client) {
        console.log("Sending text message:", message);

        conversationStore.markAllMessagesAsStale();
        addUserMessage(message);

        client.sendClientMessage("llm", {
          action: "append_to_messages",
          arguments: {
            messages: [{ role: "user", content: message }],
            run_immediately: true,
          },
        });

        e.target.value = "";

        const event = new Event("input", { bubbles: true });
        e.target.dispatchEvent(event);

        callbacks.onMessageSent?.(message);
      }
    }
  };

  // Auto-connect functionality
  useEffect(() => {
    if (autoConnect && !isConnected && isClientReady) {
      handleConnect();
    }
  }, [autoConnect, isConnected, isClientReady]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (isConnected) {
        handleDisconnect();
      }
    };
  }, []);

  // Component validation
  if (!connectionUrl) {
    return (
      <div className="scxl:w-full scxl:h-screen scxl:p-5 scxl:font-poppins scxl:flex scxl:justify-center scxl:items-center">
        <div
          className={clsx(
            "scxl:border scxl:rounded-lg",
            sizeClasses.padding,
            themeClasses.errorLight,
            themeClasses.border
          )}
        >
          <p className={clsx(sizeClasses.text, themeClasses.error)}>
            Error: connectionUrl prop is required
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(themeClasses.background, className)}>
      <PipecatClientProvider client={client!}>
        <PipecatClientAudio />
        {!isClientReady || !client ? (
          <LoadingSpinner
            theme={themeClasses}
            labels={mergedLabels}
            size={sizeClasses}
          />
        ) : !isConnected ? (
          <ConnectionScreen
            onConnect={handleConnect}
            error={error}
            participantId={participantId}
            theme={themeClasses}
            labels={mergedLabels}
            size={sizeClasses}
            showParticipantId={showParticipantId}
            trackHasStarted={trackHasStarted}
          />
        ) : (
          <MainChatArea
            isBotReady={isBotReady}
            participantId={participantId}
            onTextSend={handleTextSend}
            onDisconnect={handleDisconnect}
            client={client} // Pass the client to MainChatArea
            theme={themeClasses}
            labels={mergedLabels}
            size={sizeClasses}
            showParticipantId={showParticipantId}
            showConnectionStatus={showConnectionStatus}
            enableVoice={enableVoice}
            typewriterSpeed={typewriterSpeed}
          />
        )}
      </PipecatClientProvider>
    </div>
  );
};

export default ChatUIEnhanced;
