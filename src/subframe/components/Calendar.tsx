"use client";

import React, { useState } from "react";
import * as SubframeCore from "@subframe/core";

type CalendarRootProps = React.ComponentProps<typeof SubframeCore.Calendar> & {
  className?: string;
  onTimeChange?: (time: string) => void;
};

const CalendarRoot = React.forwardRef<HTMLElement, CalendarRootProps>(
  function CalendarRoot(
    { className, onTimeChange, ...otherProps }: CalendarRootProps,
    ref
  ) {
    const [time, setTime] = useState("00:00");

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTime(event.target.value);
      if (onTimeChange) {
        onTimeChange(event.target.value);
      }
    };

    return (
      <div className="flex flex-col items-center">
        <SubframeCore.Calendar
          className={className}
          ref={ref as any}
          classNames={{
            root: "relative border-box",
            month: "flex flex-col gap-4",
            months: "relative flex flex-wrap max-w-fit",
            nav: "absolute flex items-center justify-between h-8 w-full p-0.5",
            month_caption: "flex items-center justify-center h-8",
            caption_label: "text-body-bold font-body-bold text-default-font",
            button_previous:
              "inline-flex items-center justify-center h-8 w-8 bg-transparent rounded border-none bg-transparent hover:bg-neutral-50 active:bg-neutral-100 border-none",
            button_next:
              "inline-flex items-center justify-center h-8 w-8 bg-transparent rounded border-none bg-transparent hover:bg-neutral-50 active:bg-neutral-100 border-none",
            chevron: "text-[18px] font-[500] leading-[18px] text-neutral-600",
            weeks: "flex flex-col gap-2",
            weekdays: "flex gap-2 pb-4",
            weekday:
              "w-8 text-caption-bold font-caption-bold text-subtext-color",
            week: "flex gap-2",
            day: "flex h-8 w-8 p-0 cursor-pointer items-center justify-center gap-2 rounded-lg text-body font-body text-default-font hover:bg-neutral-100",
            day_button:
              "flex h-8 w-8 cursor-pointer items-center justify-center gap-2 rounded-lg border-none",
            selected:
              "bg-brand-600 hover:!bg-brand-600 text-body-bold font-body-bold text-white",
            outside: "text-neutral-400",
          }}
          {...otherProps}
        />
        <div className="mt-4">
          <label htmlFor="time-input" className="mr-2">
            Zeit:
          </label>
          <input
            id="time-input"
            type="time"
            value={time}
            onChange={handleTimeChange}
            className="p-2 border rounded"
          />
        </div>
      </div>
    );
  }
);

export const Calendar = CalendarRoot;
