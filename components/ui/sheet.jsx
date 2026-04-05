import * as React from "react";

export const Sheet = ({ children }) => <>{children}</>;

export const SheetContent = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div ref={ref} className={className} {...props}>
    {children}
  </div>
));
SheetContent.displayName = "SheetContent";
