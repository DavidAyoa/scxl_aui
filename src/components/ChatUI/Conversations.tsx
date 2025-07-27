import { usePipecatClientTransportState } from "@pipecat-ai/client-react";
import { Fragment, useCallback, useEffect, useRef } from "react";
import { type LenisRef, ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import useConversation from "@/hooks/useConversation";
import { cn } from "@/lib/utils";
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

  const { messages, isLoading, lastUpdated } = useConversation({
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
          "scxl:flex-1 scxl:sm:w-3/4 scxl:sm:max-w-4xl chat-scxl scxl:w-full! scxl:sm:p-5 scxl:p-2 scxl:overflow-y-auto",
          classNames.container
        )}
        ref={lenisRef}
      >
        <div className="scxl:w-full scxl:h-full scxl:flex scxl:flex-col scxl:gap-2">
          {messages.map((message, index) => (
            <Fragment key={message.id || index}>
              {message.role === "user" ? (
                <div className="scxl:flex scxl:flex-row scxl:w-full scxl:justify-end">
                  <div className="scxl:max-w-3/4 scxl:text-sm scxl:bg-indigo-500 scxl:p-2 scxl:rounded-tr-xl scxl:rounded-tl-xl scxl:rounded-bl-xl scxl:m-2">
                    <p className="scxl:text-white">{message.content}</p>
                  </div>
                </div>
              ) : (
                <div className="scxl:flex scxl:flex-row scxl:w-full">
                  <div className="scxl:w-full scxl:text-sm scxl:p-2 scxl:m-2">
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
          "scxl:flex-1 scxl:sm:w-3/4 scxl:sm:max-w-4xl chat-scxl scxl:w-full! scxl:sm:p-5 scxl:p-2 scxl:overflow-y-auto",
          classNames.container
        )}
        ref={lenisRef}
      >
        <div className="scxl:flex scxl:items-center scxl:justify-center scxl:h-full">
          <div className="scxl:text-muted-foreground scxl:text-sm">
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
          "scxl:flex-1 scxl:sm:w-3/4 scxl:sm:max-w-4xl chat-scxl scxl:w-full! scxl:sm:p-5 scxl:p-2 scxl:overflow-y-auto",
          classNames.container
        )}
        ref={lenisRef}
      >
        <div className="scxl:flex scxl:items-center scxl:justify-center scxl:h-full">
          <div className="scxl:text-center scxl:p-4">
            <div className="scxl:text-muted-foreground scxl:mb-2">
              Not connected to agent
            </div>
            <p className="scxl:text-sm scxl:text-muted-foreground scxl:max-w-md">
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
        "scxl:flex-1 scxl:sm:w-3/4 scxl:sm:max-w-4xl chat-scxl scxl:w-full! scxl:sm:p-5 scxl:p-2 scxl:overflow-y-auto",
        classNames.container
      )}
      ref={lenisRef}
    >
      <div className="scxl:flex scxl:items-center scxl:justify-center scxl:h-full">
        <div className="scxl:text-muted-foreground scxl:text-sm">
          Waiting for messages...
        </div>
      </div>
    </ReactLenis>
  );
};

export default Conversations;