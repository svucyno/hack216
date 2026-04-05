import * as React from "react";

export const ToastProvider = ({ children }) => <>{children}</>;

export const ToastViewport = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
ToastViewport.displayName = "ToastViewport";

export const Toast = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div ref={ref} className={className} {...props}>
    {children}
  </div>
));
Toast.displayName = "Toast";

export const ToastTitle = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div ref={ref} className={className} {...props}>
    {children}
  </div>
));
ToastTitle.displayName = "ToastTitle";

export const ToastDescription = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div ref={ref} className={className} {...props}>
    {children}
  </div>
));
ToastDescription.displayName = "ToastDescription";

export const ToastClose = React.forwardRef(({ className = "", ...props }, ref) => (
  <button ref={ref} className={className} {...props} />
));
ToastClose.displayName = "ToastClose";

export const ToastAction = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <button ref={ref} className={className} {...props}>
    {children}
  </button>
));
ToastAction.displayName = "ToastAction";
