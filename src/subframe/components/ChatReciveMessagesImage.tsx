"use client";
/*
 * Documentation:
 * Chat Recive Messages Image — https://app.subframe.com/3f3ba0b30f1c/library?component=Chat+Recive+Messages+Image_a5605a4d-95e9-4d05-9b6d-0dadfcfbc15e
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface ChatReciveMessagesImageRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ChatReciveMessagesImageRoot = React.forwardRef<
  HTMLElement,
  ChatReciveMessagesImageRootProps
>(function ChatReciveMessagesImageRoot(
  { className, ...otherProps }: ChatReciveMessagesImageRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex flex-col items-start gap-2",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex items-center gap-2">
        <span className="text-caption-bold font-caption-bold text-subtext-color">
          9 min ago 
        </span>
        <span className="text-body-bold font-body-bold text-default-font">
          Elisabeth Froms
        </span>
      </div>
      <div className="flex flex-col items-start gap-4">
        <img
          className="h-36 w-36 flex-none rounded-lg object-cover shadow-lg"
          src="https://res.cloudinary.com/subframe/image/upload/v1711417578/shared/r9kc2ev1taqr8djqje9f.jpg"
        />
      </div>
    </div>
  );
});

export const ChatReciveMessagesImage = ChatReciveMessagesImageRoot;
