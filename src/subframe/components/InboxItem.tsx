"use client";
/*
 * Documentation:
 * Inbox Item — https://app.subframe.com/3f3ba0b30f1c/library?component=Inbox+Item_6f869270-e52a-4d7f-ba16-b5574556d5a8
 * Checkbox — https://app.subframe.com/3f3ba0b30f1c/library?component=Checkbox_3816e3b5-c48c-499b-b45e-0777c6972523
 * Icon Button — https://app.subframe.com/3f3ba0b30f1c/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Checkbox } from "./Checkbox";
import { IconButton } from "./IconButton";

interface InboxItemRootProps extends React.HTMLAttributes<HTMLDivElement> {
  read?: boolean;
  title?: string;
  description?: string;
  date?: string;
  className?: string;
}

const InboxItemRoot = React.forwardRef<HTMLElement, InboxItemRootProps>(
  function InboxItemRoot(
    {
      read = false,
      title,
      description,
      date,
      className,
      ...otherProps
    }: InboxItemRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/6f869270 flex w-full cursor-pointer items-center gap-4 px-3 py-1 flex-row flex-wrap hover:flex hover:bg-neutral-100 hover:shadow-default",
          { "bg-neutral-50 hover:bg-neutral-100": read },
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex items-center">
          <div className="flex h-8 w-8 flex-none items-center justify-center gap-2">
            <Checkbox label="" />
          </div>
          <IconButton size="medium" icon="FeatherStar" />
          <IconButton size="medium" icon="FeatherFlag" />
        </div>
        <div className="flex grow shrink-0 basis-0 items-center gap-2 flex-row flex-wrap">
          {title ? (
            <span
              className={SubframeCore.twClassNames(
                "line-clamp-1 grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font",
                {
                  "h-auto grow shrink-0 basis-0 text-body font-body text-subtext-color":
                    read,
                }
              )}
            >
              {title}
            </span>
          ) : null}
          {description ? (
            <span
              className={SubframeCore.twClassNames(
                "line-clamp-1 grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font",
                { "text-body font-body text-subtext-color": read }
              )}
            >
              {description}
            </span>
          ) : null}
        </div>
        <div className="flex w-24 flex-none items-center justify-end gap-2">
          {date ? (
            <span
              className={SubframeCore.twClassNames(
                "text-caption-bold font-caption-bold text-default-font",
                { "text-caption font-caption text-subtext-color": read }
              )}
            >
              {date}
            </span>
          ) : null}
        </div>
      </div>
    );
  }
);

export const InboxItem = InboxItemRoot;
