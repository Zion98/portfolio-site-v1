import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/classNames";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-center text-xs font-medium ring-offset-white transition duration-300 hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:scale-90 disabled:pointer-events-none disabled:scale-100 disabled:opacity-40 disabled:hover:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-[#fff] text-[#17191C]",
        green: "bg-[#0F9858] text-white",
        outlined: "border border-[#556575] bg-transparent text-[#17191C]",
        unstyled: "",
      },
      size: {
        default: "px-6 py-2",
        lg: "rounded-lg px-6 py-3",
        fullWidth: "block w-full py-2",
        unstyled: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;

// export { Button, buttonVariants };
