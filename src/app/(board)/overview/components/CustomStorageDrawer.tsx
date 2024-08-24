"use client";

import React from "react";
import { DrawerLayout } from "@/subframe/layouts/DrawerLayout";
import * as SubframeCore from "@subframe/core";
import { VerticalStepper } from "@/subframe/components/VerticalStepper";
import { TextField } from "@/subframe/components/TextField";
import { TextArea } from "@/subframe/components/TextArea";
import { Select } from "@/subframe/components/Select";
import { CheckboxCard } from "@/subframe/components/CheckboxCard";
import { Button } from "@/subframe/components/Button";

function CustomStorageDrawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [anonymous, setAnonymous] = React.useState(false);

  return (
    <DrawerLayout open={open} onOpenChange={setOpen}>
      <div className="drawer flex h-full w-96 flex-col items-start gap-6 bg-default-background px-6 py-12">
        <div className="flex w-full items-center justify-center gap-2">
          <span className="text-heading-2 font-heading-2 text-subtext-color text-center">
            Neu Spannung
          </span>
          <div className="flex items-center gap-2">
            <SubframeCore.Icon
              className="text-body font-body text-default-font"
              name="FeatherDatabase"
            />
          </div>
        </div>
        <VerticalStepper className="h-auto w-full flex-none">
          <div className="flex w-full grow shrink-0 basis-0 items-start gap-3">
            <div className="flex flex-col items-center gap-1 self-stretch">
              <div className="hidden h-2 w-0.5 flex-none flex-col items-center gap-2 bg-neutral-border" />
              <div className="flex h-7 w-7 flex-none items-center justify-center overflow-hidden rounded-full bg-neutral-100">
                <span className="text-body-bold font-body-bold text-default-font text-center">
                  1
                </span>
                <SubframeCore.Icon
                  className="hidden text-heading-3 font-heading-3 text-default-font"
                  name="FeatherCheck"
                />
              </div>
              <div className="flex min-h-[8px] w-0.5 grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-center gap-1 pt-1 pb-4">
              <span className="line-clamp-2 w-full text-body-bold font-body-bold text-default-font">
                Erstellen Sie ein Spannung
              </span>
              <div className="flex w-full flex-col items-start gap-2" />
            </div>
          </div>
          <div className="flex w-full grow shrink-0 basis-0 items-start gap-3">
            <div className="flex flex-col items-center gap-1 self-stretch">
              <div className="flex h-2 w-0.5 flex-none flex-col items-center gap-2 bg-neutral-border" />
              <div className="flex h-7 w-7 flex-none items-center justify-center overflow-hidden rounded-full bg-brand-100">
                <span className="text-body font-body text-brand-700 text-center">
                  2
                </span>
                <SubframeCore.Icon
                  className="hidden text-heading-3 font-heading-3 text-default-font"
                  name="FeatherCheck"
                />
              </div>
              <div className="flex min-h-[8px] w-0.5 grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-center gap-1 py-4">
              <span className="line-clamp-2 w-full text-body font-body text-subtext-color">
                Spannung wird im Team besprochen
              </span>
              <div className="flex w-full flex-col items-start gap-2" />
            </div>
          </div>
          <VerticalStepper.Step
            stepNumber="3"
            label="Spannung ist gelöst"
            lastStep={true}
          />
        </VerticalStepper>
        <TextField
          className="h-auto w-full flex-none"
          label="Titel"
          helpText="Geben Sie einen kurzen Titel ein."
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
          helpText="Beschrieben Sie die das Problem, oder stellen Sie Ihre Frage bzw. geben geben Sie wichtige Informationen weiter"
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
        <Select
          className="w-full grow shrink-0 basis-0"
          variant="filled"
          label=""
          placeholder="Kategorie"
          helpText=""
          value={undefined || category}
          onValueChange={(value: string) => {
            setCategory(value);
          }}
        >
          <Select.Item value="Spannungsspeicher">Spannungsspeicher</Select.Item>
          <Select.Item value="Item 2">Item 2</Select.Item>
          <Select.Item value="Item 3">Item 3</Select.Item>
        </Select>
        <CheckboxCard
          className="h-auto w-full flex-none"
          checked={anonymous || false}
          defaultChecked={false}
          onCheckedChange={(checked: boolean) => {
            setAnonymous(checked);
          }}
        >
          <div className="flex flex-col items-start">
            <span className="text-body-bold font-body-bold text-default-font">
              Anonym erstellen
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Geben Sie die Spannung anonym ab
            </span>
          </div>
        </CheckboxCard>
        <div className="flex w-full items-center justify-center gap-2 py-5">
          <Button
            variant="neutral-primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              setOpen(false);
              setTitle("");
              setDescription("");
              setCategory("");
              setAnonymous(true);
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
    </DrawerLayout>
  );
}

export default CustomStorageDrawer;
