"use client";
/*
 * Documentation:
 * Tooltip — https://app.subframe.com/3f3ba0b30f1c/library?component=Tooltip_ccebd1e9-f6ac-4737-8376-0dfacd90c9f3
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface TooltipRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: string;
  className?: string;
}

const TooltipRoot = React.forwardRef<HTMLElement, TooltipRootProps>(
  function TooltipRoot(
    { children, className, ...otherProps }: TooltipRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex flex-col items-start gap-2 rounded border border-solid border-neutral-900 bg-neutral-800 px-2 py-1 shadow-overlay",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {children ? (
          <span className="text-caption font-caption text-white">
            {children}
          </span>
        ) : null}
      </div>
    );
  }
);

export const Tooltip = TooltipRoot;
