import * as React from "react";

export const TooltipProvider = ({ children }) => <>{children}</>;
export const Tooltip = ({ children }) => <>{children}</>;
export const TooltipTrigger = React.forwardRef(({ children, ...props }, ref) => (
  <span ref={ref} {...props}>
    {children}
  </span>
));
TooltipTrigger.displayName = "TooltipTrigger";
export const TooltipContent = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div ref={ref} className={className} {...props}>
    {children}
  </div>
));
TooltipContent.displayName = "TooltipContent";
