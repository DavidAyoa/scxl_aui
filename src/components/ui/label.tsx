import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "scxl:flex scxl:items-center scxl:gap-2 scxl:text-sm scxl:leading-none scxl:font-medium scxl:select-none scxl:group-data-[disabled=true]:pointer-events-none scxl:group-data-[disabled=true]:opacity-50 scxl:peer-disabled:cursor-not-allowed scxl:peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
