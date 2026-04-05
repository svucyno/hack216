import * as React from "react";

export const Label = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <label ref={ref} className={className} {...props}>
    {children}
  </label>
));
Label.displayName = "Label";
