import { usePipecatClientTransportState } from "@pipecat-ai/client-react";
import { Fragment, useCallback, useEffect, useRef } from "react";
import { type LenisRef, ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import useConversation from "../../hooks/useConversation";
import { cn } from "../../lib/utils";
import ResponseParser from "../ResponseParser";
import Thinking from "./Thinking";

interface FrameData {
  delta: number;
  timestamp: number;
  isProcessing: boolean;
}

interface Props {
  classNames?: {
    container?: string;
    message?: string;
    messageContent?: string;
    role?: string;
    time?: string;
    thinking?: string;
  };
  noAutoscroll?: boolean;
}

const Conversations: React.FC<Props> = ({
  classNames = {},
  noAutoscroll = false,
}) => {
  const lenisRef = useRef<LenisRef | null>(null);
  const isScrolledToBottom = useRef(true);

  const transportState = usePipecatClientTransportState();

  // Lenis smooth scrolling setup
  useEffect(() => {
    function update(data: FrameData) {
      if (lenisRef.current?.lenis) {
        lenisRef.current.lenis.raf(data.timestamp);
      }
    }

    frame.update(update, true);
    return () => {
      cancelFrame(update);
    };
  }, []);

  const maybeScrollToBottom = useCallback(() => {
    if (!lenisRef.current?.lenis || noAutoscroll) return;
    if (isScrolledToBottom.current) {
      lenisRef.current.lenis.scrollTo("bottom", { duration: 0.8 });
    }
  }, [noAutoscroll]);

  // Check scroll position before messages update
  const updateScrollState = useCallback(() => {
    if (!lenisRef.current?.lenis || noAutoscroll) return;
    const lenis = lenisRef.current.lenis;
    const scrollElement = lenis.rootElement;
    if (!scrollElement) return;
    
    isScrolledToBottom.current =
      Math.ceil(scrollElement.scrollHeight - scrollElement.scrollTop) <=
      Math.ceil(scrollElement.clientHeight + 50); // 50px threshold
  }, [noAutoscroll]);

  const { messages } = useConversation({
    onMessageAdded: () => {
      if (noAutoscroll) return;
      // Small delay to ensure DOM is updated
      setTimeout(() => maybeScrollToBottom(), 100);
    },
  });

  useEffect(() => {
    if (noAutoscroll) return;
    // Scroll to bottom when messages change
    setTimeout(() => maybeScrollToBottom(), 100);
  }, [messages, maybeScrollToBottom, noAutoscroll]);

  // Update scroll state when user scrolls
  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    const handleScroll = () => updateScrollState();
    lenis.on("scroll", handleScroll);

    // Initial check
    updateScrollState();

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [updateScrollState]);

  const isConnecting =
    transportState === "authenticating" || transportState === "connecting";
  const isConnected =
    transportState === "connected" || transportState === "ready";

  // Render messages when available
  if (messages.length > 0) {
    return (
      <ReactLenis
        options={{
          autoRaf: false,
          smoothWheel: true,
          wheelMultiplier: 2,
          touchMultiplier: 2,
        }}
        className={cn(
          "flex-1 sm:w-3/4 sm:max-w-4xl chat-scxl w-full! sm:p-5 p-2 overflow-y-auto",
          classNames.container
        )}
        ref={lenisRef}
      >
        <div className="w-full h-full flex flex-col gap-2">
          {messages.map((message, index) => (
            <Fragment key={message.id || index}>
              {message.role === "user" ? (
                <div className="flex flex-row w-full justify-end">
                  <div className="max-w-3/4 text-sm bg-indigo-500 p-2 rounded-tr-xl rounded-tl-xl rounded-bl-xl m-2">
                    <p className="text-white">{message.content}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row w-full">
                  <div className="w-full text-sm p-2 m-2">
                    {message.content ? (
                      <ResponseParser 
                        rawContent={message.content} 
                        timeStamp={message.createdAt}
                        disableTypewriter={!message.isFresh} // Only enable typewriter for fresh messages
                      />
                    ) : (
                      <Thinking className={classNames.thinking} />
                    )}
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </ReactLenis>
    );
  }

  // Connection states with your beautiful design
  if (isConnecting) {
    return (
      <ReactLenis
        options={{
          autoRaf: false,
          smoothWheel: true,
          wheelMultiplier: 2,
          touchMultiplier: 2,
        }}
        className={cn(
          "flex-1 sm:w-3/4 sm:max-w-4xl chat-scxl w-full! sm:p-5 p-2 overflow-y-auto",
          classNames.container
        )}
        ref={lenisRef}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-muted-foreground text-sm">
            Connecting to agent...
          </div>
        </div>
      </ReactLenis>
    );
  }

  if (!isConnected) {
    return (
      <ReactLenis
        options={{
          autoRaf: false,
          smoothWheel: true,
          wheelMultiplier: 2,
          touchMultiplier: 2,
        }}
        className={cn(
          "flex-1 sm:w-3/4 sm:max-w-4xl chat-scxl w-full! sm:p-5 p-2 overflow-y-auto",
          classNames.container
        )}
        ref={lenisRef}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-4">
            <div className="text-muted-foreground mb-2">
              Not connected to agent
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Connect to an agent to see conversation messages in real-time.
            </p>
          </div>
        </div>
      </ReactLenis>
    );
  }

  // Waiting state
  return (
    <ReactLenis
      options={{
        autoRaf: false,
        smoothWheel: true,
        wheelMultiplier: 2,
        touchMultiplier: 2,
      }}
      className={cn(
        "flex-1 sm:w-3/4 sm:max-w-4xl chat-scxl w-full! sm:p-5 p-2 overflow-y-auto",
        classNames.container
      )}
      ref={lenisRef}
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-muted-foreground text-sm">
          Waiting for messages...
        </div>
      </div>
    </ReactLenis>
  );
};

export default Conversations;