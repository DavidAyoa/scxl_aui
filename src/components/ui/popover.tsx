import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "scxl:bg-popover scxl:text-popover-foreground scxl:data-[state=open]:animate-in scxl:data-[state=closed]:animate-out scxl:data-[state=closed]:fade-out-0 scxl:data-[state=open]:fade-in-0 scxl:data-[state=closed]:zoom-out-95 scxl:data-[state=open]:zoom-in-95 scxl:data-[side=bottom]:slide-in-from-top-2 scxl:data-[side=left]:slide-in-from-right-2 scxl:data-[side=right]:slide-in-from-left-2 scxl:data-[side=top]:slide-in-from-bottom-2 scxl:z-50 scxl:w-72 scxl:origin-(--radix-popover-content-transform-origin) scxl:rounded-md scxl:border scxl:p-4 scxl:shadow-md scxl:outline-hidden",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
