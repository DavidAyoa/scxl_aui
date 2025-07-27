import React from "react";
import { Button } from "@/components/ui/button";
import { usePipecatClientTransportState } from "@pipecat-ai/client-react";
import { cn } from "@/lib/utils";

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
        className: "scxl:bg-gray-400 scxl:hover:bg-gray-400 scxl:cursor-not-allowed scxl:px-10 scxl:rounded-full scxl:transition-colors scxl:duration-200 scxl:text-gray-700",
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
          <div className="scxl:flex scxl:items-center scxl:gap-2">
            {text}
            <span className="scxl:w-4 scxl:h-4 scxl:border-2 scxl:border-white scxl:border-t-transparent scxl:rounded-full scxl:animate-spin" />
          </div>
        ),
        variant: "default" as const,
        className: "scxl:bg-indigo-500 scxl:hover:bg-indigo-600 scxl:cursor-not-allowed scxl:px-10 scxl:rounded-full scxl:transition-colors scxl:duration-200",
        disabled: true,
      };
    }
    
    if (isConnected) {
      return {
        children: "Disconnect",
        variant: "destructive" as const,
        className: "scxl:px-10 scxl:rounded-full scxl:transition-colors scxl:duration-200 scxl:bg-red-500 scxl:hover:bg-red-600 scxl:text-white",
      };
    }
    
    return {
      children: "Connect",
      variant: "default" as const,
      className: "scxl:bg-indigo-500 scxl:hover:bg-indigo-600 scxl:cursor-pointer scxl:transition-colors scxl:duration-200 scxl:px-10 scxl:rounded-full",
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