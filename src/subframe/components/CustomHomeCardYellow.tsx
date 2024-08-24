"use client";
/*
 * Documentation:
 * Custom Home Card Yellow — https://app.subframe.com/3f3ba0b30f1c/library?component=Custom+Home+Card+Yellow_acf61b75-e5dc-4511-a90f-9aa6951aba54
 * Icon with background — https://app.subframe.com/3f3ba0b30f1c/library?component=Icon+with+background_c5d68c0e-4c0c-4cff-8d8c-6ff334859b3a
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { IconWithBackground } from "./IconWithBackground";

interface CustomHomeCardYellowRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  icon?: SubframeCore.IconName;
  className?: string;
}

const CustomHomeCardYellowRoot = React.forwardRef<
  HTMLElement,
  CustomHomeCardYellowRootProps
>(function CustomHomeCardYellowRoot(
  {
    title,
    subtitle,
    icon = "FeatherAppWindow",
    className,
    ...otherProps
  }: CustomHomeCardYellowRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/acf61b75 flex h-full w-full cursor-pointer flex-col items-center gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm hover:bg-neutral-50",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <IconWithBackground variant="warning" size="medium" icon={icon} />
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

export const CustomHomeCardYellow = CustomHomeCardYellowRoot;
