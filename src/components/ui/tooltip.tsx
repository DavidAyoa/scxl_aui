import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "scxl:bg-indigo-500 scxl:text-white scxl:animate-in scxl:fade-in-0 scxl:zoom-in-95 data-[state=closed]:scxl:animate-out data-[state=closed]:scxl:fade-out-0 data-[state=closed]:scxl:zoom-out-95 data-[side=bottom]:scxl:slide-in-from-top-2 data-[side=left]:scxl:slide-in-from-right-2 data-[side=right]:scxl:slide-in-from-left-2 data-[side=top]:scxl:slide-in-from-bottom-2 scxl:z-50 scxl:w-fit scxl:origin-(--radix-tooltip-content-transform-origin) scxl:rounded-md scxl:px-3 scxl:py-1.5 scxl:text-xs scxl:text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="scxl:bg-indigo-500 scxl:fill-indigo-500 scxl:z-50 scxl:size-2.5 scxl:translate-y-[calc(-50%_-_2px)] scxl:rotate-45 scxl:rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
