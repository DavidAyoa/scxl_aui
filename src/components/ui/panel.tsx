import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

function Panel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel"
      className={cn(
        "scxl:@container/panel scxl:bg-card scxl:text-card-foreground scxl:flex scxl:flex-col scxl:rounded-panel scxl:border",
        className,
      )}
      {...props}
    />
  );
}

const PanelHeaderVariants = cva("scxl:@container/panel-header", {
  variants: {
    variant: {
      default:
        "scxl:border-b scxl:flex scxl:items-center scxl:justify-center scxl:text-card-foreground scxl:p-2 scxl:@xs/panel:p-3 scxl:@md/panel:p-4",
      inline:
        "scxl:items-start scxl:text-foreground scxl:p-2 scxl:@xs/panel:p-3 scxl:@md/panel:p-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function PanelHeader({
  variant,
  className,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof PanelHeaderVariants>) {
  return (
    <div
      data-slot="panel-header"
      className={cn(PanelHeaderVariants({ variant, className }), className)}
      {...props}
    />
  );
}

function PanelTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-title"
      className={cn("scxl:text-mono-upper", className)}
      {...props}
    />
  );
}

function PanelContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-content"
      className={cn(
        "scxl:text-foreground scxl:flex scxl:flex-col scxl:p-2 scxl:gap-2 scxl:@xs/panel:p-3 scxl:@xs/panel:gap-3 scxl:@md/panel:p-4 scxl:@md/panel:gap-4",
        className,
      )}
      {...props}
    />
  );
}

function PanelFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-footer"
      className={cn(
        "scxl:flex scxl:items-center scxl:p-2 scxl:@xs/panel:p-3 scxl:@md/panel:p-4",
        className,
      )}
      {...props}
    />
  );
}

function PanelActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-actions"
      className={cn(
        "scxl:flex scxl:items-center scxl:gap-1 scxl:@xs/panel:gap-2",
        className,
      )}
      {...props}
    />
  );
}

export {
  Panel,
  PanelActions,
  PanelContent,
  PanelFooter,
  PanelHeader,
  PanelTitle,
};