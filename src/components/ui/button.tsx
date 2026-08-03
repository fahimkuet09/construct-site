import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group/btn relative inline-flex items-center justify-center gap-2.5 cursor-pointer",
    "font-heading font-bold tracking-[-0.01em] whitespace-nowrap select-none",
    "rounded-[var(--radius-btn)] transition-all duration-300 ease-[var(--ease-out-quint)]",
    "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white shadow-[var(--shadow-raise)] hover:bg-primary-600 hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5 active:translate-y-0",
        accent:
          "bg-accent text-primary-950 shadow-[var(--shadow-raise)] hover:bg-accent-600 hover:text-white hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border border-line bg-surface text-heading hover:border-primary hover:text-primary hover:-translate-y-0.5 active:translate-y-0",
        ghost:
          "text-heading hover:bg-primary-50 hover:text-primary",
        light:
          "border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-primary hover:-translate-y-0.5 active:translate-y-0",
        solidLight:
          "bg-white text-primary shadow-[var(--shadow-lift)] hover:bg-accent hover:text-primary-950 hover:-translate-y-0.5 active:translate-y-0",
        link: "text-primary underline-offset-4 hover:underline px-0",
      },
      size: {
        sm: "h-11 px-5 text-[0.875rem]",
        md: "h-13 px-7 text-[0.9375rem]",
        lg: "h-15 px-9 text-base",
        icon: "size-12 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
