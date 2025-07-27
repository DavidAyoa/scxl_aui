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
        "scxl:w-full scxl:flex scxl:flex-col scxl:border-[1.5px] scxl:rounded-2xl",
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
            "scxl:font-medium scxl:outline-none scxl:border-none scxl:w-full scxl:resize-none scxl:transition-all scxl:duration-200 scxl:ease-in-out",
            size.input,
            theme.textPrimary,
            isAtMaxHeight && "scxl:overflow-y-auto"
          )}
        />
      ) : (
        <div className="scxl:p-4 scxl:text-center">
          <p className={clsx(size.text, theme.textSecondary)}>
            🎤 Voice mode active - Speak to chat
          </p>
        </div>
      )}
      <div className="scxl:w-full scxl:flex scxl:items-center scxl:justify-between scxl:px-2 scxl:h-fit">
        {showConnectionStatus && (
          <div className="scxl:flex scxl:flex-row scxl:items-center scxl:p-2">
            <span className="scxl:relative scxl:flex scxl:size-2 scxl:justify-center scxl:items-center">
              <span
                className={clsx(
                  "scxl:absolute scxl:inline-flex scxl:h-full scxl:w-full scxl:animate-ping scxl:rounded-full scxl:opacity-75",
                  isBotReady ? theme.ready : theme.connecting
                )}
              ></span>
              <span
                className={clsx(
                  "scxl:relative scxl:inline-flex scxl:size-2 scxl:rounded-full",
                  isBotReady ? theme.ready : theme.connecting
                )}
              ></span>
            </span>
            <div className={clsx("scxl:ml-2 scxl:text-gray-800 scxl:font-medium scxl:text-sm")}>
              {isBotReady ? labels.botReadyText : labels.connectedText}
              {showParticipantId && participantId && (
                <span className={clsx("scxl:ml-1", theme.textMuted)}>
                  ({participantId.slice(0, 8)}...)
                </span>
              )}
            </div>
          </div>
        )}
        <div className="scxl:flex scxl:items-center scxl:gap-2 scxl:text-sm">
          {enableVoice && (
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  title={isVoiceMode ? "Switch to text" : "Switch to voice"}
                  onClick={onVoiceModeToggle}
                  disabled={isTogglingVoice}
                  className={clsx(
                    "scxl:flex scxl:items-center scxl:justify-center scxl:gap-1.5 scxl:font-medium scxl:p-2 scxl:cursor-pointer hover:scxl:-translate-y-0.5 scxl:transition-all scxl:duration-200 scxl:ease-in-out scxl:rounded",
                    isVoiceMode ? "scxl:bg-blue-100" : "scxl:bg-transparent",
                    isTogglingVoice && "scxl:opacity-50 scxl:cursor-not-allowed"
                  )}
                  type="button"
                >
                  <span
                    className={clsx(
                      "scxl:text-sm",
                    //   size.text,
                      isVoiceMode ? "scxl:text-blue-600" : theme.primary
                    )}
                  >
                    {isTogglingVoice
                      ? "Switching..."
                      : isVoiceMode
                      ? "Switch to text"
                      : "Switch to voice"}
                  </span>
                  <AudioLines className="scxl:size-4" />
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
            "scxl:mb-1 scxl:cursor-pointer scxl:px-4 scxl:text-white scxl:p-2 scxl:rounded-full scxl:transition-colors scxl:flex scxl:items-center scxl:gap-1.5 scxl:text-sm",
            size.text,
            theme.error,
            "scxl:bg-red-500 hover:scxl:bg-red-700"
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
    <div className="scxl:flex scxl:justify-between scxl:items-center scxl:w-full scxl:text-sm">
      <UserAudio />
      {/* <BotAudioPanel /> */}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            title={isVoiceMode ? "Switch to text" : "Switch to voice"}
            onClick={onVoiceModeToggle}
            disabled={isTogglingVoice}
            className={clsx(
              "scxl:flex scxl:items-center scxl:justify-center scxl:gap-1.5 scxl:font-medium scxl:p-2 scxl:border scxl:border-indigo-500 scxl:rounded-full scxl:cursor-pointer hover:scxl:-translate-y-0.5 scxl:transition-all scxl:duration-200 scxl:ease-in-out scxl:bg-transparent",
              isTogglingVoice && "scxl:opacity-50 scxl:cursor-not-allowed"
            )}
            type="button"
          >
            <span
              className={clsx(
                "scxl:text-sm",
                isVoiceMode ? "scxl:text-indigo-500" : theme.primary
              )}
            >
              {isTogglingVoice
                ? "Switching..."
                : isVoiceMode
                ? "Switch to text"
                : "Switch to voice"}
            </span>
            <AudioLines className="scxl:size-4" />
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
