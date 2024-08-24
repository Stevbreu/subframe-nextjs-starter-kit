"use client";
/*
 * Documentation:
 * Custom Home Card Green — https://app.subframe.com/3f3ba0b30f1c/library?component=Custom+Home+Card+Green_70834367-a8ce-40fb-af7b-36d7ef450a19
 * Icon with background — https://app.subframe.com/3f3ba0b30f1c/library?component=Icon+with+background_c5d68c0e-4c0c-4cff-8d8c-6ff334859b3a
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { IconWithBackground } from "./IconWithBackground";

interface CustomHomeCardGreenRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  icon?: SubframeCore.IconName;
  className?: string;
}

const CustomHomeCardGreenRoot = React.forwardRef<
  HTMLElement,
  CustomHomeCardGreenRootProps
>(function CustomHomeCardGreenRoot(
  {
    title,
    subtitle,
    icon = "FeatherAppWindow",
    className,
    ...otherProps
  }: CustomHomeCardGreenRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/70834367 flex h-full w-full cursor-pointer flex-col items-center gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm hover:bg-neutral-50",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <IconWithBackground variant="success" size="medium" icon={icon} />
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

export const CustomHomeCardGreen = CustomHomeCardGreenRoot;
