"use client";

import React, { useState, useEffect } from "react";
import { DrawerLayout } from "@/subframe/layouts/DrawerLayout";
import { TextField } from "@/subframe/components/TextField";
import { Switch } from "@/subframe/components/Switch";
import { Select } from "@/subframe/components/Select";
import { PropertiesRow } from "@/subframe/components/PropertiesRow";
import { Calendar } from "/src/components/CalendarWithTime";
import * as SubframeCore from "@subframe/core";
import { Button } from "@/subframe/components/Button";
import { formatDateTime } from "/src/utils/FormateDate";
import { calculateDuration } from "/src/utils/CalculateDuration";
import "/src/styles/drawer.css";

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
  const [startDateTime, setStartDateTime] = React.useState(new Date());
  const [endDateTime, setEndDateTime] = React.useState(new Date());
  const [error, setError] = useState("");
  const [duration, setDuration] = useState("");
  const [categories, setCategories] = useState([
    "Spannungsspeicher",
    "Item 2",
    "Item 3",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (endDateTime < startDateTime) {
      setError("Das Enddatum kann nicht vor dem Startdatum liegen.");
      setEndDateTime(startDateTime);
    } else {
      setError("");
      const calculatedDuration = calculateDuration(
        startDateTime,
        endDateTime,
        allDay
      );
      setDuration(calculatedDuration);
    }
  }, [startDateTime, endDateTime, allDay]);

  return (
    
    <DrawerLayout open={open} onOpenChange={setOpen}>
      <div
        className="drawer h-full w-96 bg-default-background"
        data-state={open ? "open" : "closed"}
      >
        <div className="flex h-full flex-col items-start gap-6 px-6 py-12 overflow-y-auto">
          <div className="flex w-full items-center justify-center gap-2">
            <span className="text-heading-2 font-heading-2 text-subtext-color text-center">
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
            <TextField
              className="h-auto w-full flex-none"
              label="Ort"
              helpText=""
            >
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
                        mode="single"
                        selected={startDateTime}
                        onSelect={(date) => {
                          if (date) {
                            const newDateTime = new Date(date);
                            newDateTime.setHours(endDateTime.getHours());
                            newDateTime.setMinutes(endDateTime.getMinutes());
                            setStartDateTime(newDateTime);
                          }
                        }}
                        onTimeChange={(time) => {
                          const [hours, minutes] = time.split(":").map(Number);
                          const newDateTime = new Date(startDateTime);
                          newDateTime.setHours(hours);
                          newDateTime.setMinutes(minutes);
                          setStartDateTime(newDateTime);
                        }}
                        initialTime={endDateTime.toTimeString().slice(0, 5)}
                      />
                    </div>
                  </SubframeCore.Popover.Content>
                </SubframeCore.Popover.Portal>
              </SubframeCore.Popover.Root>
              <TextField label="" helpText="">
                <TextField.Input
                  placeholder=""
                  value={formatDateTime(startDateTime, allDay)}
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
                        mode="single"
                        selected={endDateTime}
                        onSelect={(date) => {
                          if (date) {
                            const newDateTime = new Date(date);
                            newDateTime.setHours(endDateTime.getHours());
                            newDateTime.setMinutes(endDateTime.getMinutes());
                            setEndDateTime(newDateTime);
                          }
                        }}
                        onTimeChange={(time) => {
                          const [hours, minutes] = time.split(":").map(Number);
                          const newDateTime = new Date(endDateTime);
                          newDateTime.setHours(hours);
                          newDateTime.setMinutes(minutes);
                          setEndDateTime(newDateTime);
                        }}
                        initialTime={endDateTime.toTimeString().slice(0, 5)}
                      />
                    </div>
                  </SubframeCore.Popover.Content>
                </SubframeCore.Popover.Portal>
              </SubframeCore.Popover.Root>
              <TextField label="" helpText="">
                <TextField.Input
                  placeholder=""
                  value={formatDateTime(endDateTime, allDay)}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
            </div>

            <span className="w-full text-caption font-caption text-subtext-color text-center">
              Dauer : {duration}
            </span>
            <div className="flex w-full flex-col items-center justify-end gap-2 pt-5">
              <Button
                icon="FeatherSave"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Speichern
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DrawerLayout>
  );
}

export default AppointmentDrawer;
