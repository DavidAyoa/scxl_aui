import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "scxl:inline-flex scxl:items-center scxl:justify-center scxl:gap-2 scxl:whitespace-nowrap scxl:rounded-md scxl:text-sm scxl:font-medium scxl:transition-all disabled:scxl:pointer-events-none disabled:scxl:opacity-50 [&_svg]:scxl:pointer-events-none [&_svg:not([class*='size-'])]:scxl:size-4 scxl:shrink-0 [&_svg]:scxl:shrink-0 scxl:outline-none focus-visible:scxl:border-ring focus-visible:scxl:ring-ring/50 focus-visible:scxl:ring-[3px] aria-invalid:scxl:ring-destructive/20 dark:aria-invalid:scxl:ring-destructive/40 aria-invalid:scxl:border-destructive",
  {
    variants: {
      variant: {
        default:
          "scxl:bg-primary scxl:text-primary-foreground scxl:shadow-xs hover:scxl:bg-primary/90",
        destructive:
          "scxl:bg-destructive scxl:text-white scxl:shadow-xs hover:scxl:bg-destructive/90 focus-visible:scxl:ring-destructive/20 dark:focus-visible:scxl:ring-destructive/40 dark:scxl:bg-destructive/60",
        outline:
          "scxl:border scxl:bg-background scxl:shadow-xs hover:scxl:bg-accent hover:scxl:text-accent-foreground dark:scxl:bg-input/30 dark:scxl:border-input dark:hover:scxl:bg-input/50",
        secondary:
          "scxl:bg-secondary scxl:text-secondary-foreground scxl:shadow-xs hover:scxl:bg-secondary/80",
        ghost:
          "hover:scxl:bg-accent hover:scxl:text-accent-foreground dark:hover:scxl:bg-accent/50",
        link: "scxl:text-primary scxl:underline-offset-4 hover:scxl:underline",
      },
      size: {
        default: "scxl:h-9 scxl:px-4 scxl:py-2 has-[>svg]:scxl:px-3",
        sm: "scxl:h-8 scxl:rounded-md scxl:gap-1.5 scxl:px-3 has-[>svg]:scxl:px-2.5",
        lg: "scxl:h-10 scxl:rounded-md scxl:px-6 has-[>svg]:scxl:px-4",
        icon: "scxl:size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
