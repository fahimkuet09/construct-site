"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;

export const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    hideClose?: boolean;
  }
>(({ className, children, hideClose, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-100 bg-primary-950/70 backdrop-blur-sm",
        "data-[state=open]:animate-[fade-in_.25s_ease-out]",
      )}
    />
    <DialogPrimitive.Content
      ref={ref}
      data-lenis-prevent
      className={cn(
        "fixed top-1/2 left-1/2 z-101 w-[calc(100vw-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2",
        "max-h-[88vh] overflow-y-auto rounded-[var(--radius-card)] border border-line bg-surface",
        "p-7 shadow-[var(--shadow-deep)] md:p-10",
        "data-[state=open]:animate-[dialog-in_.32s_cubic-bezier(0.16,1,0.3,1)]",
        className,
      )}
      {...props}
    >
      {children}
      {!hideClose ? (
        <DialogPrimitive.Close
          className={cn(
            "absolute top-5 right-5 flex size-10 cursor-pointer items-center justify-center rounded-full",
            "border border-line text-muted transition-colors hover:border-primary hover:bg-primary hover:text-white",
          )}
        >
          <X className="size-4.5" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      ) : null}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
DialogContent.displayName = "DialogContent";
