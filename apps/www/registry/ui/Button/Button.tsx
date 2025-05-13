import * as React from "react";
import clsx from "clsx";
import "./Button.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "button",
          `button--${variant}`,
          size === "default" ? "button--default-size" : `button--${size}`,
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
