import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-button hover:shadow-lg transform hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-navy text-navy bg-background hover:bg-navy hover:text-white",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md",
        ghost: "text-navy hover:bg-gray-light hover:text-navy",
        link: "text-navy underline-offset-4 hover:underline hover:text-primary",
        // ESG-specific variants
        cta: "bg-gradient-primary text-white hover:shadow-button transform hover:-translate-y-1 hover:scale-105 font-bold tracking-wide",
        hero: "bg-navy text-white border-2 border-navy hover:bg-white hover:text-navy shadow-hero text-lg font-bold px-8 py-4",
        success: "bg-green-success text-white hover:bg-green-success/90 shadow-button",
        urgent: "bg-yellow-accent text-navy hover:bg-yellow-accent/90 font-bold animate-pulse",
        whatsapp: "bg-green-success text-white hover:bg-green-success/90 shadow-button",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-14 rounded-lg px-10 text-base",
        xl: "h-16 rounded-xl px-12 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
