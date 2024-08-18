"use client";
/*
 * Documentation:
 * Chat Message Link Card — https://app.subframe.com/3f3ba0b30f1c/library?component=Chat+Message+Link+Card_8253ad74-4e14-4b14-8ae5-b24033ed0206
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface ChatMessageLinkCardRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

const ChatMessageLinkCardRoot = React.forwardRef<
  HTMLElement,
  ChatMessageLinkCardRootProps
>(function ChatMessageLinkCardRoot(
  {
    image,
    title,
    subtitle,
    className,
    ...otherProps
  }: ChatMessageLinkCardRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex flex-wrap items-start overflow-hidden rounded border border-solid border-neutral-border bg-neutral-50",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex h-16 w-16 flex-none items-center justify-center gap-2 overflow-hidden">
        <div className="flex w-6 flex-none items-center justify-center gap-2">
          {image ? (
            <img
              className="grow shrink-0 basis-0 self-stretch object-cover"
              src={image}
            />
          ) : null}
        </div>
      </div>
      <div className="flex grow shrink-0 basis-0 flex-col items-start justify-center gap-1 self-stretch">
        {title ? (
          <span className="line-clamp-1 w-full text-body-bold font-body-bold text-default-font">
            {title}
          </span>
        ) : null}
        {subtitle ? (
          <span className="line-clamp-2 w-full text-caption font-caption text-subtext-color">
            {subtitle}
          </span>
        ) : null}
      </div>
    </div>
  );
});

export const ChatMessageLinkCard = ChatMessageLinkCardRoot;
