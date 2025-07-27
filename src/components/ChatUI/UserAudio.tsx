"use client";

import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/buttongroup";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import {
  PipecatClientMicToggle,
  usePipecatClient,
  usePipecatClientMediaDevices,
  VoiceVisualizer,
} from "@pipecat-ai/client-react";
import { useEffect } from "react";
import { cn } from "../../lib/utils";
import { ChevronDown, Mic, MicOff } from 'lucide-react';

interface Props {
  buttonProps?: Partial<React.ComponentProps<typeof Button>>;
  classNames?: {
    container?: string;
    button?: string;
    buttongroup?: string;
    popoverTrigger?: string;
    popoverContent?: string;
    radioGroup?: string;
    radioGroupItem?: string;
    label?: string;
  };
  dropdownButtonProps?: Partial<React.ComponentProps<typeof Button>>;
  noDevicePicker?: boolean;
  noVisualizer?: boolean;
  visualizerProps?: Partial<React.ComponentProps<typeof VoiceVisualizer>>;
}

const UserAudio: React.FC<Props> = ({
  buttonProps = {},
  classNames = {},
  dropdownButtonProps = {},
  noDevicePicker = false,
  noVisualizer = false,
  visualizerProps = {},
}) => {
  const client = usePipecatClient();
  const { availableMics, selectedMic, updateMic } =
    usePipecatClientMediaDevices();

  // @ts-expect-error _options is protected, but can be totally accessed in JS
  const hasAudio = client?._options?.enableMic;

  useEffect(() => {
    if (!client) return;

    if (["idle", "disconnected"].includes(client.state)) {
      client.initDevices();
    }
  }, [client]);

  const handleMicChange = (deviceId: string) => {
    updateMic(deviceId);
  };

  if (!hasAudio) {
    return (
      <div
        className={cn(
          "flex items-center gap-2 bg-muted rounded-md p-2 text-muted-foreground font-mono text-sm",
          classNames.container,
        )}
      >
        Audio disabled
      </div>
    );
  }

  return (
    <div
      className={cn("flex flex-col gap-2 rounded-full", classNames.container)}
    >
      <ButtonGroup className={cn("w-full", classNames.buttongroup)}>
        <PipecatClientMicToggle>
          {({ isMicEnabled, onClick }) => (
            <Button
              onClick={onClick}
              className={cn(
                "flex-1 justify-start",
                classNames.button,
              )}
              variant="secondary"
              {...buttonProps}
            >
              {isMicEnabled ? <Mic /> : <MicOff />}
              {!noVisualizer && (
                <VoiceVisualizer
                  participantType="local"
                  backgroundColor="transparent"
                  barColor={isMicEnabled ? "#00bc7d" : "#999999"}
                  barCount={10}
                  barGap={2}
                  barMaxHeight={20}
                  barOrigin="center"
                  barWidth={3}
                  {...visualizerProps}
                />
              )}
            </Button>
          )}
        </PipecatClientMicToggle>
        {!noDevicePicker && (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className={cn(
                  "p-2! flex-none",
                  classNames.popoverTrigger,
                )}
                variant="secondary"
                {...dropdownButtonProps}
              >
                <ChevronDown />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className={cn("w-80 border-none bg-transparent shadow-none", classNames.popoverContent)}
            >
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Select Microphone</h4>
                <RadioGroup
                  value={selectedMic?.deviceId || ""}
                  onValueChange={handleMicChange}
                  className={cn("space-y-2", classNames.radioGroup)}
                >
                  {availableMics.map((mic) => (
                    <div key={mic.deviceId} className="flex cursor-pointer items-center space-x-2 bg-black text-white rounded-md p-2">
                      <RadioGroupItem
                        value={mic.deviceId}
                        id={mic.deviceId}
                        className={cn(classNames.radioGroupItem)}
                      />
                      <Label
                        htmlFor={mic.deviceId}
                        className={cn(
                          "text-sm font-normal cursor-pointer flex-1",
                          classNames.label
                        )}
                      >
                        {mic.label || `Mic ${mic.deviceId.slice(0, 8)}...`}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </ButtonGroup>
    </div>
  );
};

export default UserAudio;