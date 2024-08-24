"use client";

import React from "react";
import { DrawerLayout } from "@/subframe/layouts/DrawerLayout";
import * as SubframeCore from "@subframe/core";
import { TextField } from "@/subframe/components/TextField";
import { TextArea } from "@/subframe/components/TextArea";
import { Calendar } from "@/subframe/components/Calendar";
import { Button } from "@/subframe/components/Button";
import { Select } from "@/subframe/components/Select";
import "/src/styles/drawer.css";

function CustomActionDrawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [selectedUser, setSelectedUser] = React.useState("");

  return (
    <DrawerLayout open={open} onOpenChange={setOpen}>
      <div className="drawer" data-state={open ? "open" : "closed"}>
        <div className="h-full w-96 bg-default-background">
          <div className="flex h-full flex-col items-start gap-6 px-6 py-12 overflow-y-auto">
            <div className="flex items-center gap-2">
              <span className="text-heading-2 font-heading-2 text-default-font">
                Neue Aufgabe
              </span>
              <SubframeCore.Icon
                className="text-heading-2 font-heading-2 text-default-font"
                name="FeatherListChecks"
              />
            </div>
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
            <TextArea
              className="h-auto w-full flex-none"
              label="Beschreibung"
              helpText=""
            >
              <TextArea.Input
                className="h-auto min-h-[96px] w-full flex-none"
                placeholder=""
                value={description}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setDescription(event.target.value);
                }}
              />
            </TextArea>
            <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
            <div className="flex items-start justify-center gap-4">
              <SubframeCore.Popover.Root>
                <SubframeCore.Popover.Trigger asChild={true}>
                  <Button
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Ziel Termin
                  </Button>
                </SubframeCore.Popover.Trigger>
                <SubframeCore.Popover.Portal>
                  <SubframeCore.Popover.Content
                    side="bottom"
                    align="start"
                    sideOffset={4}
                    asChild={true}
                  >
                    <div className="flex flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-3 py-3 shadow-lg">
                      <Calendar
                        mode={"single"}
                        selected={new Date()}
                        onSelect={(date: Date) => {
                          setSelectedDate(date);
                        }}
                      />
                    </div>
                  </SubframeCore.Popover.Content>
                </SubframeCore.Popover.Portal>
              </SubframeCore.Popover.Root>
              <div className="flex items-center gap-2">
                <TextField label="" helpText="zu erledigen bis...">
                  <TextField.Input
                    placeholder=""
                    value={selectedDate.toDateString()}
                    onChange={(
                      event: React.ChangeEvent<HTMLInputElement>
                    ) => {}}
                  />
                </TextField>
              </div>
            </div>
            <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
            <Select
              className="h-auto w-full flex-none"
              variant="filled"
              label=""
              placeholder="Aufgabentyp"
              helpText="Für was ist diese Aufgabe vorgesehen (CIRS, ...)"
              value={undefined || selectedCategory}
              onValueChange={(value: string) => {
                setSelectedCategory(value);
              }}
            >
              <Select.Item value="Spannungsspeicher">
                Spannungsspeicher
              </Select.Item>
              <Select.Item value="Item 2">Item 2</Select.Item>
              <Select.Item value="Item 3">Item 3</Select.Item>
            </Select>
            <Select
              className="h-auto w-full flex-none"
              variant="filled"
              label=""
              placeholder="User"
              helpText="Wählen Sie eine Nutzer, der diese Aufgabe bearbeiten soll."
              value={undefined || selectedUser}
              onValueChange={(value: string) => {
                setSelectedUser(value);
              }}
            >
              <Select.Item value="Item 1">Item 1</Select.Item>
              <Select.Item value="Item 2">Item 2</Select.Item>
              <Select.Item value="Item 3">Item 3</Select.Item>
            </Select>
            <div className="flex w-full items-center justify-center gap-2">
              <Button
                variant="brand-secondary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  setSelectedDate(new Date());
                  setSelectedCategory("");
                  setSelectedUser("");
                  setTitle("");
                  setDescription("");
                  setOpen(false);
                }}
              >
                Abbrechen
              </Button>
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

export default CustomActionDrawer;
