import * as React from "react";

export const Dialog = ({ children }) => <>{children}</>;

export const DialogContent = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div ref={ref} className={className} {...props}>
    {children}
  </div>
));
DialogContent.displayName = "DialogContent";
