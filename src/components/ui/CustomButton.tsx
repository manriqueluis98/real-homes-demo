import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import * as React from "react";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center font-semibold justify-center hover:bg-pr-dark-green hover:text-white  transition-colors duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "text-white bg-pr-primary",
        navItem: "bg-white text-dark-green rounded-3xl",
        navItemPrimary: "bg-pr-dark-green text-white rounded-3xl",
      },
      size: {
        default: "py-4 px-8",
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
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
