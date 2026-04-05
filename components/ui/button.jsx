import * as React from "react";

export function buttonVariants({ variant, size, className } = {}) {
  return [variant, size, className].filter(Boolean).join(" ");
}

export const Button = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <button ref={ref} className={className} {...props}>
    {children}
  </button>
));
Button.displayName = "Button";
