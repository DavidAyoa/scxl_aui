"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("scxl:grid gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "scxl:border-input scxl:text-primary scxl:focus-visible:border-ring scxl:focus-visible:ring-ring/50 scxl:aria-invalid:ring-destructive/20 scxl:dark:aria-invalid:ring-destructive/40 scxl:aria-invalid:border-destructive scxl:dark:bg-input/30 scxl:aspect-square scxl:size-4 scxl:shrink-0 scxl:rounded-full scxl:border scxl:shadow-xs scxl:transition-[color,box-shadow] scxl:outline-none scxl:focus-visible:ring-[3px] scxl:disabled:cursor-not-allowed scxl:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="scxl:relative scxl:flex scxl:items-center scxl:justify-center"
      >
        <CircleIcon className="scxl:fill-white scxl:absolute scxl:top-1/2 scxl:left-1/2 scxl:size-2 scxl:-translate-x-1/2 scxl:-translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
