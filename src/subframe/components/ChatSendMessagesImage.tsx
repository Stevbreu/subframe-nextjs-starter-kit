"use client";
/*
 * Documentation:
 * Chat Send Messages Image — https://app.subframe.com/3f3ba0b30f1c/library?component=Chat+Send+Messages+Image_9c4b9567-25af-4359-9bbd-5bdbae88d8c0
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface ChatSendMessagesImageRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ChatSendMessagesImageRoot = React.forwardRef<
  HTMLElement,
  ChatSendMessagesImageRootProps
>(function ChatSendMessagesImageRoot(
  { className, ...otherProps }: ChatSendMessagesImageRootProps,
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
      <div className="flex items-center justify-end gap-2">
        <span className="text-body-bold font-body-bold text-default-font">
          You
        </span>
        <span className="text-caption-bold font-caption-bold text-subtext-color">
          9 min ago
        </span>
      </div>
      <div className="flex flex-col items-start gap-4 rounded-lg">
        <img
          className="h-40 w-40 flex-none rounded-lg object-cover"
          src="https://res.cloudinary.com/subframe/image/upload/v1711417578/shared/r9kc2ev1taqr8djqje9f.jpg"
        />
      </div>
    </div>
  );
});

export const ChatSendMessagesImage = ChatSendMessagesImageRoot;
