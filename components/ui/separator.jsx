import * as React from "react";

export const Separator = React.forwardRef(({ className = "", ...props }, ref) => (
  <hr ref={ref} className={className} {...props} />
));
Separator.displayName = "Separator";
