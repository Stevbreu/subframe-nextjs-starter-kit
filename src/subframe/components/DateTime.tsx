"use client";
/*
 * Documentation:
 * DateTime — https://app.subframe.com/3f3ba0b30f1c/library?component=DateTime_007de6d2-7d33-424c-9a40-1dd831f900f6
 * Calendar — https://app.subframe.com/3f3ba0b30f1c/library?component=Calendar_5a87e517-ace2-49af-adcf-076c97ec3921
 * Button — https://app.subframe.com/3f3ba0b30f1c/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 * Text Field — https://app.subframe.com/3f3ba0b30f1c/library?component=Text+Field_be48ca43-f8e7-4c0e-8870-d219ea11abfe
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Calendar } from "./Calendar";
import { Button } from "./Button";
import { TextField } from "./TextField";

interface DateTimeRootProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default";
  className?: string;
}

const DateTimeRoot = React.forwardRef<HTMLElement, DateTimeRootProps>(
  function DateTimeRoot(
    { variant = "default", className, ...otherProps }: DateTimeRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex items-center gap-2",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <SubframeCore.Popover.Root>
          <SubframeCore.Popover.Trigger asChild={true}>
            <div className="flex flex-col items-start gap-4">
              <SubframeCore.Popover.Root>
                <SubframeCore.Popover.Trigger asChild={true}>
                  <Button>Datum</Button>
                </SubframeCore.Popover.Trigger>
                <SubframeCore.Popover.Portal>
                  <SubframeCore.Popover.Content
                    side="bottom"
                    align="start"
                    sideOffset={4}
                    asChild={true}
                  >
                    <div className="flex flex-col items-start gap-1 rounded border border-solid border-neutral-border bg-default-background px-3 py-3 shadow-overlay">
                      <Calendar />
                    </div>
                  </SubframeCore.Popover.Content>
                </SubframeCore.Popover.Portal>
              </SubframeCore.Popover.Root>
            </div>
          </SubframeCore.Popover.Trigger>
          <SubframeCore.Popover.Portal>
            <SubframeCore.Popover.Content
              side="bottom"
              align="center"
              sideOffset={4}
              asChild={true}
            >
              <div className="flex flex-col items-start gap-1 rounded border border-solid border-neutral-border bg-default-background px-3 py-3 shadow-overlay">
                <Calendar />
              </div>
            </SubframeCore.Popover.Content>
          </SubframeCore.Popover.Portal>
        </SubframeCore.Popover.Root>
        <TextField label="" helpText="">
          <TextField.Input placeholder="  01.01.2024, 7:00" />
        </TextField>
      </div>
    );
  }
);

export const DateTime = DateTimeRoot;
