import { useEffect, useState, useCallback, useRef } from "react";
import {
  PipecatClient,
  RTVIMessage,
  type Participant,
  type PipecatClientOptions,
} from "@pipecat-ai/client-js";
import {
  SmallWebRTCTransport,
  type SmallWebRTCTransportConstructorOptions,
} from "@pipecat-ai/small-webrtc-transport";
import type { WebRTCTransportProps, UseSmallWebRTCReturn } from "@/types";

const defaultClientOptions: Partial<PipecatClientOptions> = {};

export const useSmallWebRTC = ({
  audioCodec = "default",
  clientOptions = defaultClientOptions,
  connectParams,
  noUserAudio = false,
  systemPrompt = "You are a helpful AI assistant.",
  transportType = "smallwebrtc",
}: WebRTCTransportProps): UseSmallWebRTCReturn => {
  const clientRef = useRef<PipecatClient | null>(null);
  const [participantId, setParticipantId] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isClientReady, setIsClientReady] = useState(false);
  const [isBotReady, setIsBotReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!connectParams) {
      console.error("connectParams is required");
      return;
    }
    if (clientRef.current) return;

    let transport: SmallWebRTCTransport | undefined;
    try {
      transport = new SmallWebRTCTransport(
        connectParams as SmallWebRTCTransportConstructorOptions
      );
    } catch (error) {
      console.error("Failed to create transport:", error);
      return;
    }

    const mergedCallbacks = {
      ...(clientOptions.callbacks ?? {}),
      onParticipantJoined: (participant: Participant) => {
        setParticipantId(participant.id || "");
        clientOptions?.callbacks?.onParticipantJoined?.(participant);
      },
      onTrackStarted: (track: MediaStreamTrack, participant: Participant | undefined) => {
        if (participant?.id && participant.local)
          setParticipantId(participant.id);
        clientOptions?.callbacks?.onTrackStarted?.(track, participant);
      },
      onConnected: () => {
        setIsConnected(true);
        clientOptions?.callbacks?.onConnected?.();
      },
      onDisconnected: () => {
        setIsConnected(false);
        clientOptions?.callbacks?.onDisconnected?.();
      },
      onError: (error: RTVIMessage) => {
        clientOptions?.callbacks?.onError?.(error);
      },
      onBotReady: () => {
        clientOptions?.callbacks?.onBotReady?.({
          version: "0.1.0",
        });
        setIsBotReady(true);
      },
      onUserStartedSpeaking: () => {
        clientOptions?.callbacks?.onUserStartedSpeaking?.();
      },
      onUserStoppedSpeaking: () => {
        clientOptions?.callbacks?.onUserStoppedSpeaking?.();
      },
      onBotStartedSpeaking: () => {
        clientOptions?.callbacks?.onBotStartedSpeaking?.();
      },
      onBotStoppedSpeaking: () => {
        clientOptions?.callbacks?.onBotStoppedSpeaking?.();
      },
    };

    clientRef.current = new PipecatClient({
      ...clientOptions,
      transport,
      enableMic: !noUserAudio,
      callbacks: mergedCallbacks,
    });

    clientRef.current.initDevices().catch((error) => {
      console.error("Failed to initialize devices:", error);
    });

    setIsClientReady(true);

    return () => {
      setIsClientReady(false);
      setIsConnected(false);
      clientRef.current?.disconnect().catch((error) => {
        console.error("Failed to disconnect client:", error);
      });
      clientRef.current = null;
      setParticipantId("");
    };
  }, []);

  useEffect(() => {
    if (clientRef.current && transportType === "smallwebrtc" && audioCodec) {
      const transport = clientRef.current.transport as SmallWebRTCTransport;
      if (transport.setAudioCodec) {
        transport.setAudioCodec(audioCodec);
      }
    }
  }, [audioCodec, transportType]);

  const handleConnect = useCallback(async () => {
    if (!clientRef.current) return;
    try {
      await clientRef.current.connect();
      if (systemPrompt) {
        clientRef.current.appendToContext({
          role: "assistant",
          content: systemPrompt+". Start this conversation with a greeting like I didn't just tell you anything... starting with hello, hey, hi, etc.",
        });
      }
    } catch (e) {
      console.error("Connection failed:", e);
      try {
        await clientRef.current.disconnect();
      } catch {}
    }
  }, [systemPrompt]);

  const handleDisconnect = useCallback(async () => {
    if (!clientRef.current) return;
    try {
      await clientRef.current.disconnect();
    } catch (e) {
      console.error("Disconnect failed:", e);
    }
  }, []);

  return {
    client: clientRef.current,
    isClientReady,
    isBotReady,
    isConnected,
    participantId,
    handleConnect,
    handleDisconnect,
  };
};
