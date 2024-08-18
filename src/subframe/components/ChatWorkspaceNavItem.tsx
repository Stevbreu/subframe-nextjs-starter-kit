"use client";
/*
 * Documentation:
 * Chat Workspace Nav Item — https://app.subframe.com/3f3ba0b30f1c/library?component=Chat+Workspace+Nav+Item_a378d514-f970-4269-8e42-069a77aad10a
 * Avatar — https://app.subframe.com/3f3ba0b30f1c/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "./Avatar";

interface ChatWorkspaceNavItemRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  image?: string;
  className?: string;
}

const ChatWorkspaceNavItemRoot = React.forwardRef<
  HTMLElement,
  ChatWorkspaceNavItemRootProps
>(function ChatWorkspaceNavItemRoot(
  {
    selected = false,
    image,
    className,
    ...otherProps
  }: ChatWorkspaceNavItemRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/a378d514 flex w-full cursor-pointer items-center justify-center gap-2 px-2 py-2",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div
        className={SubframeCore.twClassNames(
          "flex h-2.5 w-2.5 flex-none flex-col items-start gap-2 rounded-full",
          { "bg-brand-600": selected }
        )}
      />
      <div
        className={SubframeCore.twClassNames(
          "flex items-center justify-center gap-2 group-hover/a378d514:shadow-overlay",
          { "shadow-overlay": selected }
        )}
      >
        <Avatar variant="neutral" size="large" image={image} square={true}>
          A
        </Avatar>
      </div>
      <div className="flex h-2.5 w-2.5 flex-none flex-col items-start gap-2 rounded-full" />
    </div>
  );
});

export const ChatWorkspaceNavItem = ChatWorkspaceNavItemRoot;
