import React from "react";
import { Button } from "../ui/button";
import { usePipecatClientTransportState } from "@pipecat-ai/client-react";
import { cn } from "../../lib/utils";

export type ConnectButtonProps = {
  className?: string;
  trackHasStarted: boolean;
  onConnect?: () => void;
  onClick?: () => void;
  onDisconnect?: () => void;
};

export const ConnectButton: React.FC<ConnectButtonProps> = ({
  className: passedClassName,
  trackHasStarted,
  onClick,
  onConnect,
  onDisconnect,
}) => {
  const [loading, setLoading] = React.useState(false);
  const transportState = usePipecatClientTransportState();

  React.useEffect(() => {
    if (transportState === "connected" || transportState === "ready") {
      setLoading(false);
    }
  }, [transportState]);

  const getButtonProps = (): React.ComponentProps<typeof Button> => {
    const isConnecting = loading || ["initializing", "authenticating", "connecting"].includes(transportState);
    const isConnected = ["connected", "ready"].includes(transportState);
    const isDisabled = isConnecting || !trackHasStarted;
    
    // If track hasn't started or button is disabled, make it grey
    if (!trackHasStarted || isDisabled) {
      return {
        children: !trackHasStarted ? "Microphone permission not granted" : "Connect",
        variant: "secondary" as const,
        className: "bg-gray-400 hover:bg-gray-400 cursor-not-allowed px-10 rounded-full transition-colors duration-200 text-gray-700",
        disabled: true,
      };
    }
    
    if (isConnecting) {
      let text = "Connecting";
      if (transportState === "initializing") text = "Initializing";
      else if (transportState === "authenticating") text = "Authenticating";
      else if (transportState === "connecting") text = "Connecting";
      
      return {
        children: (
          <div className="flex items-center gap-2">
            {text}
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        ),
        variant: "default" as const,
        className: "bg-indigo-500 hover:bg-indigo-600 cursor-not-allowed px-10 rounded-full transition-colors duration-200",
        disabled: true,
      };
    }
    
    if (isConnected) {
      return {
        children: "Disconnect",
        variant: "destructive" as const,
        className: "px-10 rounded-full transition-colors duration-200 bg-red-500 hover:bg-red-600 text-white",
      };
    }
    
    return {
      children: "Connect",
      variant: "default" as const,
      className: "bg-indigo-500 hover:bg-indigo-600 cursor-pointer transition-colors duration-200 px-10 rounded-full",
    };
  };

  const handleClick = () => {
    console.log("Trying to call onClick");
    onClick?.();
    
    const isConnected = ["connected", "ready"].includes(transportState);
    
    if (isConnected) {
      console.log("Disconnecting from SmallWebRTC connection");
      onDisconnect?.();
    } else {
      console.log("Connecting to SmallWebRTC connection");
      setLoading(true);
      onConnect?.();
    }
  };

  const { children, className, variant, disabled } = getButtonProps();

  return (
    <Button
      className={cn(className, passedClassName)}
      onClick={handleClick}
      variant={variant}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default ConnectButton;