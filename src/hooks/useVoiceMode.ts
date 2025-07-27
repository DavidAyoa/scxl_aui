import { useState, useCallback } from "react";
import type { PipecatClient } from "@pipecat-ai/client-js";

/**

Hook to manage voice mode (text ↔ voice) and synchronize with mic & backend
*/
export function useVoiceMode(client?: PipecatClient) {
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const sendVoiceModeMessage = useCallback(
    (mode: boolean) => {
      if (client?.transport?.state === "connected") {
        client.sendClientMessage("voice_mode", { isVoiceMode: mode });
      } else {
        console.warn("Can't send voice_mode - transport not connected");
      }
    },
    [client]
  );

  const toggleVoiceMode = useCallback(async () => {
    if (!client || isToggling) return;

    const newMode = !isVoiceMode;

    try {
      setIsToggling(true);
      // Toggle the mic
      if (client.enableMic) {
        client.enableMic(newMode);
      }
      // Inform backend
      sendVoiceModeMessage(newMode);
      // Update state
      setIsVoiceMode(newMode);
      console.log(`Switched to ${newMode ? "voice" : "text"} mode`);
    } catch (err) {
      console.error("Failed to toggle voice mode:", err);
    } finally {
      setIsToggling(false);
    }
  }, [client, isVoiceMode, isToggling]);

  const waitForTransportReady = useCallback(
    async (client: PipecatClient, timeout = 5000) => {
      const start = Date.now();

      while (Date.now() - start < timeout) {
        // SmallWebRTC might return 'ready' or 'connected'
        const state = client?.transport?.state;

        if (state === "connected" || state === "ready") {
          console.log("✅ Transport is ready");
          return true;
        }

        await new Promise((r) => setTimeout(r, 200));
      }

      console.warn("🕓 Timed out waiting for client transport ready.");
      return false;
    },
    [client]
  );

  const setVoiceMode = useCallback(
    async (voiceMode: boolean) => {
      if (!client) return;
      try {
        if (client.enableMic) {
          client.enableMic(voiceMode);
        }
        sendVoiceModeMessage(voiceMode);
        setIsVoiceMode(voiceMode);
      } catch (err) {
        console.error("Failed to set voice mode:", err);
      }
    },
    [client]
  );

  return {
    isVoiceMode,
    isTogglingVoice: isToggling,
    toggleVoiceMode,
    setVoiceMode,
    waitForTransportReady,
  };
}
