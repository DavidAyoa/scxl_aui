import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default";
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "scxl:border-input scxl:data-[placeholder]:text-muted-foreground scxl:[&_svg:not([class*='text-'])]:text-muted-foreground scxl:focus-visible:border-ring scxl:focus-visible:ring-ring/50 scxl:aria-invalid:ring-destructive/20 scxl:dark:aria-invalid:ring-destructive/40 scxl:aria-invalid:border-destructive scxl:dark:bg-input/30 scxl:dark:hover:bg-input/50 scxl:flex scxl:w-fit scxl:items-center scxl:justify-between scxl:gap-2 scxl:rounded-md scxl:border scxl:bg-transparent scxl:px-3 scxl:py-2 scxl:text-sm scxl:whitespace-nowrap scxl:shadow-xs scxl:transition-[color,box-shadow] scxl:outline-none scxl:focus-visible:ring-[3px] scxl:disabled:cursor-not-allowed scxl:disabled:opacity-50 scxl:data-[size=default]:h-9 scxl:data-[size=sm]:h-8 scxl:*:data-[slot=select-value]:line-clamp-1 scxl:*:data-[slot=select-value]:flex scxl:*:data-[slot=select-value]:items-center scxl:*:data-[slot=select-value]:gap-2 scxl:[&_svg]:pointer-events-none scxl:[&_svg]:shrink-0 scxl:[&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="scxl:size-4 scxl:opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "scxl:bg-popover scxl:text-popover-foreground scxl:data-[state=open]:animate-in scxl:data-[state=closed]:animate-out scxl:data-[state=closed]:fade-out-0 scxl:data-[state=open]:fade-in-0 scxl:data-[state=closed]:zoom-out-95 scxl:data-[state=open]:zoom-in-95 scxl:data-[side=bottom]:slide-in-from-top-2 scxl:data-[side=left]:slide-in-from-right-2 scxl:data-[side=right]:slide-in-from-left-2 scxl:data-[side=top]:slide-in-from-bottom-2 scxl:relative scxl:z-50 scxl:max-h-(--radix-select-content-available-height) scxl:min-w-[8rem] scxl:origin-(--radix-select-content-transform-origin) scxl:overflow-x-hidden scxl:overflow-y-auto scxl:rounded-md scxl:border scxl:shadow-md",
          position === "popper" &&
            "scxl:data-[side=bottom]:translate-y-1 scxl:data-[side=left]:-translate-x-1 scxl:data-[side=right]:translate-x-1 scxl:data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "scxl:p-1",
            position === "popper" &&
              "scxl:h-[var(--radix-select-trigger-height)] scxl:w-full scxl:min-w-[var(--radix-select-trigger-width)] scxl:scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        "scxl:text-muted-foreground scxl:px-2 scxl:py-1.5 scxl:text-xs",
        className
      )}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "scxl:focus:bg-accent scxl:focus:text-accent-foreground scxl:[&_svg:not([class*='text-'])]:text-muted-foreground scxl:relative scxl:flex scxl:w-full scxl:cursor-default scxl:items-center scxl:gap-2 scxl:rounded-sm scxl:py-1.5 scxl:pr-8 scxl:pl-2 scxl:text-sm scxl:outline-hidden scxl:select-none scxl:data-[disabled]:pointer-events-none scxl:data-[disabled]:opacity-50 scxl:[&_svg]:pointer-events-none scxl:[&_svg]:shrink-0 scxl:[&_svg:not([class*='size-'])]:size-4 scxl:*:[span]:last:flex scxl:*:[span]:last:items-center scxl:*:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="scxl:absolute scxl:right-2 scxl:flex scxl:size-3.5 scxl:items-center scxl:justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="scxl:size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        "scxl:bg-border scxl:pointer-events-none scxl:-mx-1 scxl:my-1 scxl:h-px",
        className
      )}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "scxl:flex scxl:cursor-default scxl:items-center scxl:justify-center scxl:py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="scxl:size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "scxl:flex scxl:cursor-default scxl:items-center scxl:justify-center scxl:py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="scxl:size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
