"use client";

import React, { useState, useEffect } from "react";
import * as SubframeCore from "@subframe/core";

type CalendarRootProps = React.ComponentProps<typeof SubframeCore.Calendar> & {
  className?: string;
  onSelect?: (date: Date | undefined) => void;
  onTimeChange?: (time: string) => void;
  selected?: Date;
  initialTime?: string;
};

const CalendarRoot = React.forwardRef<HTMLElement, CalendarRootProps>(
  function CalendarRoot(
    {
      className,
      onSelect,
      onTimeChange,
      selected,
      initialTime,
      ...otherProps
    }: CalendarRootProps,
    ref
  ) {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      selected
    );
    const [hours, setHours] = useState<string>("00");
    const [minutes, setMinutes] = useState<string>("00");

    useEffect(() => {
      if (selected) {
        setSelectedDate(selected);
        setHours(selected.getHours().toString().padStart(2, "0"));
        setMinutes(
          (Math.floor(selected.getMinutes() / 5) * 5)
            .toString()
            .padStart(2, "0")
        );
      } else if (initialTime) {
        const [initHours, initMinutes] = initialTime.split(":");
        setHours(initHours);
        setMinutes(
          (Math.floor(parseInt(initMinutes) / 5) * 5)
            .toString()
            .padStart(2, "0")
        );
      }
    }, [selected, initialTime]);

    const handleDateSelect = (date: Date | undefined) => {
      setSelectedDate(date);
      if (date && onSelect) {
        const newDate = new Date(date);
        newDate.setHours(parseInt(hours), parseInt(minutes));
        onSelect(newDate);
      }
    };

    const handleTimeChange = (type: "hours" | "minutes", value: string) => {
      if (type === "hours") {
        setHours(value);
      } else {
        setMinutes(value);
      }

      if (selectedDate && onTimeChange) {
        const newDate = new Date(selectedDate);
        newDate.setHours(
          type === "hours" ? parseInt(value) : parseInt(hours),
          type === "minutes" ? parseInt(value) : parseInt(minutes)
        );
        onTimeChange(newDate.toTimeString().slice(0, 5));
      }
    };

    const generateOptions = (start: number, end: number, step: number) => {
      const options = [];
      for (let i = start; i < end; i += step) {
        const value = i.toString().padStart(2, "0");
        options.push(
          <option key={value} value={value}>
            {value}
          </option>
        );
      }
      return options;
    };

    return (
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <label>
            h:
            <select
              value={hours}
              onChange={(e) => handleTimeChange("hours", e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 ml-2"
            >
              {generateOptions(0, 24, 1)}
            </select>
          </label>
          <label>
            m:
            <select
              value={minutes}
              onChange={(e) => handleTimeChange("minutes", e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 ml-2"
            >
              {generateOptions(0, 60, 5)}
            </select>
          </label>
        </div>
        <SubframeCore.Calendar
          className={className}
          ref={ref as any}
          selected={selectedDate}
          onSelect={handleDateSelect}
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
      </div>
    );
  }
);

export const Calendar = CalendarRoot;
