"use client";

import React, { useState, useEffect } from "react";
import { DrawerLayout } from "@/subframe/layouts/DrawerLayout";
import { TextField } from "@/subframe/components/TextField";
import { Switch } from "@/subframe/components/Switch";
import { Select } from "@/subframe/components/Select";
import { PropertiesRow } from "@/subframe/components/PropertiesRow";
import { Calendar } from "@/subframe/components/Calendar";
import * as SubframeCore from "@subframe/core";
import { Button } from "@/subframe/components/Button";
import { formatDate } from "/src/utils/FormateDate";
import { calculateDuration } from "/src/utils/CalculateDuration";

export function AppointmentDrawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [allDay, setAllDay] = React.useState(false);
  const [startDate, setStartDate] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState("");
  const [endDate, setEndDate] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState("");
  const [error, setError] = useState("");
  const [duration, setDuration] = useState("");
  const [categories, setCategories] = useState([
    "Spannungsspeicher",
    "Item 2",
    "Item 3",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (endDate < startDate) {
      setError("Das Enddatum kann nicht vor dem Startdatum liegen.");
      setEndDate(startDate);
    } else {
      setError("");
      const calculatedDuration = calculateDuration(
        startDate,
        endDate,
        allDay,
        startTime,
        endTime
      );
      setDuration(calculatedDuration);
    }
  }, [startDate, endDate, startTime, endTime, allDay]);

  return (
    <DrawerLayout open={open} onOpenChange={setOpen}>
      <div className="flex h-full w-96 flex-col items-start gap-4 bg-default-background px-6 py-12">
        <span className="w-full text-heading-1 font-heading-1 text-default-font text-center">
          Neuer Termin
        </span>
        <TextField
          className="h-auto w-full flex-none"
          label="Titel"
          helpText=""
        >
          <TextField.Input
            placeholder=""
            value={title}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(event.target.value);
            }}
          />
        </TextField>
        <TextField
          className="h-auto w-full flex-none"
          label="Beschreibung"
          helpText=""
        >
          <TextField.Input
            placeholder=""
            value={description}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(event.target.value);
            }}
          />
        </TextField>
        <TextField className="h-auto w-full flex-none" label="Ort" helpText="">
          <TextField.Input
            placeholder=""
            value={location}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setLocation(event.target.value);
            }}
          />
        </TextField>

        <Select
          variant="filled"
          label="Kategorie"
          placeholder="Kategorie auswählen"
          helpText=""
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <Select.Item value="">Bitte wählen</Select.Item>
          {categories.map((category) => (
            <Select.Item key={category} value={category}>
              {category}
            </Select.Item>
          ))}
        </Select>

        <div className="flex w-full items-center bg-default-background px-4 py-3">
          <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
            ganztätig
          </span>
          <div className="flex items-center justify-end">
            <Switch
              checked={allDay}
              onCheckedChange={(checked: boolean) => {
                setAllDay(checked);
              }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <SubframeCore.Popover.Root>
            <SubframeCore.Popover.Trigger asChild={true}>
              <Button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Start
              </Button>
            </SubframeCore.Popover.Trigger>
            <SubframeCore.Popover.Portal>
              <SubframeCore.Popover.Content
                side="bottom"
                align="start"
                sideOffset={4}
                asChild={true}
              >
                <div className="flex flex-col items-start gap-1 rounded border border-solid border-neutral-border bg-default-background px-3 py-3 shadow-overlay">
                  <Calendar
                    mode={"single"}
                    selected={new Date()}
                    onSelect={(date: Date | undefined) => {
                      setStartDate(date);
                    }}
                  />
                </div>
              </SubframeCore.Popover.Content>
            </SubframeCore.Popover.Portal>
          </SubframeCore.Popover.Root>
          <TextField label="" helpText="">
            <TextField.Input
              placeholder=""
              value={formatDate(startDate, allDay)}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
        </div>
        <div className="flex items-center gap-2">
          <SubframeCore.Popover.Root>
            <SubframeCore.Popover.Trigger asChild={true}>
              <Button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Ende
              </Button>
            </SubframeCore.Popover.Trigger>
            <SubframeCore.Popover.Portal>
              <SubframeCore.Popover.Content
                side="bottom"
                align="start"
                sideOffset={4}
                asChild={true}
              >
                <div className="flex flex-col items-start gap-1 rounded border border-solid border-neutral-border bg-default-background px-3 py-3 shadow-overlay">
                  <Calendar
                    mode={"single"}
                    selected={new Date()}
                    onSelect={(date: Date | undefined) => {
                      setEndDate(date);
                    }}
                  />
                </div>
              </SubframeCore.Popover.Content>
            </SubframeCore.Popover.Portal>
          </SubframeCore.Popover.Root>
          <TextField label="" helpText="">
            <TextField.Input
              placeholder=""
              value={formatDate(endDate, allDay)}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
        </div>

        <span className="w-full text-caption font-caption text-subtext-color text-center">
          Dauer : {duration}
        </span>
      </div>
    </DrawerLayout>
  );
}

export default AppointmentDrawer;
