import * as React from "react";

export function toggleVariants({ variant, size, className } = {}) {
  return [variant, size, className].filter(Boolean).join(" ");
}

export const Toggle = React.forwardRef(({ className = "", ...props }, ref) => (
  <button ref={ref} className={className} {...props} />
));
Toggle.displayName = "Toggle";
