"use client";
/*
 * Documentation:
 * Chat Channel Message Bar — https://app.subframe.com/3f3ba0b30f1c/library?component=Chat+Channel+Message+Bar_635204d2-a222-4132-80dd-631199aacaef
 * Icon Button — https://app.subframe.com/3f3ba0b30f1c/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Dropdown Menu — https://app.subframe.com/3f3ba0b30f1c/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Text Area — https://app.subframe.com/3f3ba0b30f1c/library?component=Text+Area_4ec05ee8-8f1c-46b2-b863-5419aa7f5cce
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { IconButton } from "./IconButton";
import { DropdownMenu } from "./DropdownMenu";
import { TextArea } from "./TextArea";

interface ChatChannelMessageBarRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ChatChannelMessageBarRoot = React.forwardRef<
  HTMLElement,
  ChatChannelMessageBarRootProps
>(function ChatChannelMessageBarRoot(
  { className, ...otherProps }: ChatChannelMessageBarRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex w-full flex-col items-start gap-4 rounded border border-solid border-neutral-border bg-default-background px-4 py-4 shadow-overlay",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex w-full grow shrink-0 basis-0 items-start gap-1">
        <IconButton size="small" icon="FeatherBold" />
        <IconButton size="small" icon="FeatherItalic" />
        <IconButton size="small" icon="FeatherStrikethrough" />
        <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
        <IconButton size="small" icon="FeatherLink" />
        <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
        <IconButton size="small" icon="FeatherList" />
        <IconButton size="small" icon="FeatherListChecks" />
        <IconButton size="small" icon="FeatherListOrdered" />
        <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
        <IconButton size="small" icon="FeatherCode2" />
        <SubframeCore.DropdownMenu.Root>
          <SubframeCore.DropdownMenu.Trigger asChild={true}>
            <IconButton size="small" icon="FeatherMoreHorizontal" />
          </SubframeCore.DropdownMenu.Trigger>
          <SubframeCore.DropdownMenu.Portal>
            <SubframeCore.DropdownMenu.Content
              side="bottom"
              align="start"
              sideOffset={4}
              asChild={true}
            >
              <DropdownMenu>
                <DropdownMenu.DropdownItem icon="FeatherText">
                  More options
                </DropdownMenu.DropdownItem>
              </DropdownMenu>
            </SubframeCore.DropdownMenu.Content>
          </SubframeCore.DropdownMenu.Portal>
        </SubframeCore.DropdownMenu.Root>
      </div>
      <TextArea className="h-auto w-full flex-none" label="" helpText="">
        <TextArea.Input
          className="h-auto min-h-[96px] w-full flex-none"
          placeholder=""
        />
      </TextArea>
      <div className="flex w-full grow shrink-0 basis-0 items-start gap-1">
        <IconButton size="small" />
        <IconButton size="small" icon="FeatherAtSign" />
        <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
        <IconButton size="small" icon="FeatherVideo" />
        <IconButton size="small" icon="FeatherMic" />
        <div className="flex grow shrink-0 basis-0 flex-col items-end justify-center gap-2">
          <IconButton
            variant="brand-secondary"
            size="small"
            icon="FeatherSend"
          />
        </div>
      </div>
    </div>
  );
});

export const ChatChannelMessageBar = ChatChannelMessageBarRoot;
