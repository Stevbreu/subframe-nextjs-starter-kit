"use client";
/*
 * Documentation:
 * Custom Home Card Red — https://app.subframe.com/3f3ba0b30f1c/library?component=Custom+Home+Card+Red_2fcb6f1b-9bdb-4564-91c2-004c4c365166
 * Icon with background — https://app.subframe.com/3f3ba0b30f1c/library?component=Icon+with+background_c5d68c0e-4c0c-4cff-8d8c-6ff334859b3a
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { IconWithBackground } from "./IconWithBackground";

interface CustomHomeCardRedRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  icon?: SubframeCore.IconName;
  className?: string;
}

const CustomHomeCardRedRoot = React.forwardRef<
  HTMLElement,
  CustomHomeCardRedRootProps
>(function CustomHomeCardRedRoot(
  {
    title,
    subtitle,
    icon = "FeatherAppWindow",
    className,
    ...otherProps
  }: CustomHomeCardRedRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/2fcb6f1b flex h-full w-full cursor-pointer flex-col items-center gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm hover:bg-neutral-50",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <IconWithBackground variant="error" size="medium" icon={icon} />
      <div className="flex w-full flex-col items-center gap-1">
        {title ? (
          <span className="line-clamp-1 w-full text-body-bold font-body-bold text-default-font text-center">
            {title}
          </span>
        ) : null}
        {subtitle ? (
          <span className="w-full text-caption font-caption text-subtext-color text-center">
            {subtitle}
          </span>
        ) : null}
      </div>
    </div>
  );
});

export const CustomHomeCardRed = CustomHomeCardRedRoot;
