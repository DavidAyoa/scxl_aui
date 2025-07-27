import React from "react";
import clsx from "clsx";
import TextareaAutosize, {
  type TextareaHeightChangeMeta,
} from "react-textarea-autosize";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { AudioLines } from "lucide-react";
import UserAudio from "./UserAudio";

interface ThemeProps {
  inputBorder: string;
  inputBackground: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  primary: string;
  error: string;
  ready: string;
  connecting: string;
}

interface SizeProps {
  input: string;
  text: string;
}

interface Labels {
  inputPlaceholder: string;
  botReadyText: string;
  connectedText: string;
  voiceTooltip: string;
  textTooltip: string;
  disconnectButton: string;
}

interface TextModeControlProps {
  theme: ThemeProps;
  size: SizeProps;
  labels: Labels;
  isVoiceMode: boolean;
  isBotReady: boolean;
  isTogglingVoice: boolean;
  showConnectionStatus: boolean;
  showParticipantId: boolean;
  enableVoice: boolean;
  participantId?: string;
  isAtMaxHeight: boolean;
  onTextSend: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onVoiceModeToggle: () => void;
  onDisconnect?: () => void;
  onHeightChange?: (height: number, meta: TextareaHeightChangeMeta) => void;
}

interface DisconnectButtonProps {
  theme: ThemeProps;
  size: SizeProps;
  label: string;
  isVoiceMode: boolean;
  onDisconnect: (() => void) | undefined;
}

const TEXTAREA_CONFIG = {
  MIN_ROWS: 1,
  MAX_ROWS: 10,
} as const;

export const TextModeControl: React.FC<TextModeControlProps> = ({
  theme,
  size,
  labels,
  isVoiceMode,
  isBotReady,
  isTogglingVoice,
  showConnectionStatus,
  showParticipantId,
  enableVoice,
  participantId,
  isAtMaxHeight,
  onTextSend,
  onVoiceModeToggle,
  onDisconnect,
  onHeightChange,
}) => {
  return (
    <div
      className={clsx(
        "w-full flex flex-col border-[1.5px] rounded-2xl",
        theme.inputBorder,
        theme.inputBackground
      )}
    >
      {!isVoiceMode ? (
        <TextareaAutosize
          name="user_input"
          title="User input"
          placeholder={labels.inputPlaceholder}
          minRows={TEXTAREA_CONFIG.MIN_ROWS}
          maxRows={TEXTAREA_CONFIG.MAX_ROWS}
          onHeightChange={onHeightChange}
          onKeyDown={onTextSend}
          className={clsx(
            "font-medium outline-none border-none w-full resize-none transition-all duration-200 ease-in-out",
            size.input,
            theme.textPrimary,
            isAtMaxHeight && "overflow-y-auto"
          )}
        />
      ) : (
        <div className="p-4 text-center">
          <p className={clsx(size.text, theme.textSecondary)}>
            🎤 Voice mode active - Speak to chat
          </p>
        </div>
      )}
      <div className="w-full flex items-center justify-between px-2 h-fit">
        {showConnectionStatus && (
          <div className="flex flex-row items-center p-2">
            <span className="relative flex size-2 justify-center items-center">
              <span
                className={clsx(
                  "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                  isBotReady ? theme.ready : theme.connecting
                )}
              ></span>
              <span
                className={clsx(
                  "relative inline-flex size-2 rounded-full",
                  isBotReady ? theme.ready : theme.connecting
                )}
              ></span>
            </span>
            <div className={clsx("ml-2 text-gray-800 font-medium text-sm")}>
              {isBotReady ? labels.botReadyText : labels.connectedText}
              {showParticipantId && participantId && (
                <span className={clsx("ml-1", theme.textMuted)}>
                  ({participantId.slice(0, 8)}...)
                </span>
              )}
            </div>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm">
          {enableVoice && (
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  title={isVoiceMode ? "Switch to text" : "Switch to voice"}
                  onClick={onVoiceModeToggle}
                  disabled={isTogglingVoice}
                  className={clsx(
                    "flex items-center justify-center gap-1.5 font-medium p-2 cursor-pointer hover:-translate-y-0.5 transition-all duration-200 ease-in-out rounded",
                    isVoiceMode ? "bg-blue-100" : "bg-transparent",
                    isTogglingVoice && "opacity-50 cursor-not-allowed"
                  )}
                  type="button"
                >
                  <span
                    className={clsx(
                      "text-sm",
                    //   size.text,
                      isVoiceMode ? "text-blue-600" : theme.primary
                    )}
                  >
                    {isTogglingVoice
                      ? "Switching..."
                      : isVoiceMode
                      ? "Switch to text"
                      : "Switch to voice"}
                  </span>
                  <AudioLines className="size-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent sideOffset={5}>
                {labels.voiceTooltip}
              </TooltipContent>
            </Tooltip>
          )}

          <DisconnectButton
            theme={theme}
            size={size}
            label={labels.disconnectButton}
            isVoiceMode={isVoiceMode}
            onDisconnect={onDisconnect}
          />
        </div>
      </div>
    </div>
  );
};

const DisconnectButton: React.FC<DisconnectButtonProps> = ({
  theme,
  size,
  label,
  isVoiceMode,
  onDisconnect,
}) => {
  const handleClick = () => {
    onDisconnect?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className={clsx(
            "mb-1 cursor-pointer px-4 text-white p-2 rounded-full transition-colors flex items-center gap-1.5 text-sm",
            size.text,
            theme.error,
            "bg-red-500 hover:bg-red-700"
          )}
          type="button"
        >
          <span>{label}</span>
        </button>
      </TooltipTrigger>
      <TooltipContent sideOffset={5}>
        {isVoiceMode ? "Exit voice mode" : "Disconnect from chat"}
      </TooltipContent>
    </Tooltip>
  );
};

interface VoiceModeControlProps {
  theme: ThemeProps;
  size: SizeProps;
  labels: Labels;
  isVoiceMode: boolean;
  onVoiceModeToggle: () => void;
  isTogglingVoice?: boolean;
  handleDisconnect?: () => void;
}

export const VoiceModeControl = ({
  theme,
  size,
  labels,
  isVoiceMode,
  onVoiceModeToggle,
  isTogglingVoice,
  handleDisconnect,
}: VoiceModeControlProps) => {

  return (
    <div className="flex justify-between items-center w-full text-sm">
      <UserAudio />
      {/* <BotAudioPanel /> */}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            title={isVoiceMode ? "Switch to text" : "Switch to voice"}
            onClick={onVoiceModeToggle}
            disabled={isTogglingVoice}
            className={clsx(
              "flex items-center justify-center gap-1.5 font-medium p-2 border border-indigo-500 rounded-full cursor-pointer hover:-translate-y-0.5 transition-all duration-200 ease-in-out bg-transparent",
              isTogglingVoice && "opacity-50 cursor-not-allowed"
            )}
            type="button"
          >
            <span
              className={clsx(
                "text-sm",
                isVoiceMode ? "text-indigo-500" : theme.primary
              )}
            >
              {isTogglingVoice
                ? "Switching..."
                : isVoiceMode
                ? "Switch to text"
                : "Switch to voice"}
            </span>
            <AudioLines className="size-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>{labels.textTooltip}</TooltipContent>
      </Tooltip>
      <DisconnectButton
        theme={theme}
        size={size}
        label={labels.disconnectButton}
        isVoiceMode={isVoiceMode}
        onDisconnect={handleDisconnect}
      />
    </div>
  );
};
