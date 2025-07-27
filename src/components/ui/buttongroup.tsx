import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonGroupVariants = cva(
  "scxl:flex scxl:items-center scxl:*:rounded-none",
  {
    variants: {
      orientation: {
        horizontal:
          "scxl:flex-row scxl:*:first:rounded-s-md scxl:*:last:rounded-e-md scxl:*:-ml-[1px] scxl:*:first:ml-0",
        vertical:
          "scxl:flex-col scxl:*:first:rounded-t-md scxl:*:last:rounded-b-md scxl:*:-mt-[1px] scxl:*:first:mt-0",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  },
);

export const ButtonGroup = ({
  className,
  orientation = "horizontal",
  children,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) => {
  return (
    <div
      className={cn(
        "scxl:flex",
        buttonGroupVariants({ orientation }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;