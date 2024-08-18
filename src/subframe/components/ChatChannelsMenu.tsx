"use client";
/*
 * Documentation:
 * Chat Channels Menu — https://app.subframe.com/3f3ba0b30f1c/library?component=Chat+Channels+Menu_9f9e357a-0cd0-4dca-b155-8b6e30cce3cf
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { IconButton } from "./IconButton";
import { Accordion } from "./Accordion";

interface FolderProps extends React.ComponentProps<typeof Accordion> {
  children?: React.ReactNode;
  label?: string;
  icon?: SubframeCore.IconName;
  className?: string;
}

const Folder = React.forwardRef<HTMLElement, FolderProps>(function Folder(
  { children, label, icon = null, className, ...otherProps }: FolderProps,
  ref
) {
  return (
    <Accordion
      className={SubframeCore.twClassNames(
        "group/05c886b1 cursor-pointer",
        className
      )}
      trigger={
        <div className="flex w-full items-center gap-2 rounded px-3 pt-6 pb-2 group-hover/05c886b1:bg-neutral-50">
          <SubframeCore.Icon
            className="text-body font-body text-default-font"
            name={icon}
          />
          {label ? (
            <span className="line-clamp-1 grow shrink-0 basis-0 text-body-bold font-body-bold text-subtext-color">
              {label}
            </span>
          ) : null}
          <IconButton size="small" />
          <Accordion.Chevron />
        </div>
      }
      defaultOpen={true}
      ref={ref as any}
      {...otherProps}
    >
      {children ? (
        <div className="flex w-full flex-col items-start gap-1 pt-1">
          {children}
        </div>
      ) : null}
    </Accordion>
  );
});

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  children?: string;
  icon?: SubframeCore.IconName;
  rightSlot?: React.ReactNode;
  className?: string;
}

const Item = React.forwardRef<HTMLElement, ItemProps>(function Item(
  {
    selected = false,
    children,
    icon = "FeatherFile",
    rightSlot,
    className,
    ...otherProps
  }: ItemProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/eb5db798 flex w-full cursor-pointer items-center gap-2 rounded px-3 py-2 hover:bg-white",
        { "bg-neutral-100 hover:bg-neutral-100": selected },
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex items-center gap-2 rounded border border-solid border-neutral-border bg-default-background px-1 py-1">
        <SubframeCore.Icon
          className={SubframeCore.twClassNames(
            "text-body font-body text-subtext-color",
            { "text-default-font": selected }
          )}
          name={icon}
        />
      </div>
      {children ? (
        <span
          className={SubframeCore.twClassNames(
            "line-clamp-1 grow shrink-0 basis-0 text-body font-body text-subtext-color",
            { "text-body-bold font-body-bold text-default-font": selected }
          )}
        >
          {children}
        </span>
      ) : null}
      {rightSlot ? (
        <div className="flex flex-col items-start gap-2">{rightSlot}</div>
      ) : null}
    </div>
  );
});

interface ChatChannelsMenuRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const ChatChannelsMenuRoot = React.forwardRef<
  HTMLElement,
  ChatChannelsMenuRootProps
>(function ChatChannelsMenuRoot(
  { children, className, ...otherProps }: ChatChannelsMenuRootProps,
  ref
) {
  return children ? (
    <div
      className={SubframeCore.twClassNames(
        "flex w-full flex-col items-start",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      {children}
    </div>
  ) : null;
});

export const ChatChannelsMenu = Object.assign(ChatChannelsMenuRoot, {
  Folder,
  Item,
});
