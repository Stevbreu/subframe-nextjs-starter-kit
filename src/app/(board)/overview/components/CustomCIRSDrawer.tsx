"use client";

import React from "react";
import { DrawerLayout } from "@/subframe/layouts/DrawerLayout";
import * as SubframeCore from "@subframe/core";
import { TextArea } from "@/subframe/components/TextArea";
import { CheckboxCard } from "@/subframe/components/CheckboxCard";
import { Button } from "@/subframe/components/Button";
import "/src/styles/drawer.css";

function CustomCirsDrawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [whatHappened, setWhatHappened] = React.useState("");
  const [result, setResult] = React.useState("");
  const [why, setWhy] = React.useState("");
  const [howToPrevent, setHowToPrevent] = React.useState("");
  const [anonymous, setAnonymous] = React.useState(true);

  return (
    <DrawerLayout open={open} onOpenChange={setOpen}>
      <div
        className="drawer h-full w-96 bg-default-background"
        data-state={open ? "open" : "closed"}
      >
        <div className="flex h-full flex-col items-start gap-6 px-6 py-12 overflow-y-auto">
          <div className="flex w-full items-center justify-center gap-2">
            <span className="text-heading-2 font-heading-2 text-subtext-color text-center">
              Neue CIRS Meldung
            </span>
            <SubframeCore.Icon
              className="text-heading-2 font-heading-2 text-error-700"
              name="FeatherAlertCircle"
            />
          </div>
          <TextArea
            className="h-auto w-full flex-none"
            label="Was ist passiert?"
            helpText="kurze, detaillierte Beschreibung des\nAblauf des Ereignisses verfassen. "
          >
            <TextArea.Input
              className="h-auto min-h-[96px] w-full flex-none"
              placeholder=""
              value={whatHappened}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setWhatHappened(event.target.value);
              }}
            />
          </TextArea>
          <TextArea
            className="h-auto w-full flex-none"
            label="Was war das Ergebnis? "
            helpText="Hier sollte der Berichtende den\nweiteren Verlauf bzw. die Folgen\ndes Ereignisses beschreiben. "
          >
            <TextArea.Input
              className="h-auto min-h-[96px] w-full flex-none"
              placeholder=""
              value={result}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setResult(event.target.value);
              }}
            />
          </TextArea>
          <TextArea
            className="h-auto w-full flex-none"
            label="Warum ist es geschehen? "
            helpText="Hier sollte der Berichtende die aus\neigener Sicht vermuteten Gründe\ndarstellen. "
          >
            <TextArea.Input
              className="h-auto min-h-[96px] w-full flex-none"
              placeholder=""
              value={why}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setWhy(event.target.value);
              }}
            />
          </TextArea>
          <TextArea
            className="h-auto w-full flex-none"
            label="Wie könnte es zukünftig verhindert werden? "
            helpText="Hier soll dem Berichtenden die\nMöglichkeit gegeben werden,\nselbst Verbesserungsvorschläge zur\nVermeidung eines solchen Ereignisses anzugeben. "
          >
            <TextArea.Input
              className="h-auto min-h-[96px] w-full flex-none"
              placeholder=""
              value={howToPrevent}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setHowToPrevent(event.target.value);
              }}
            />
          </TextArea>
          <CheckboxCard
            className="h-auto w-full flex-none"
            checked={false || anonymous}
            defaultChecked={false || anonymous}
            onCheckedChange={(checked: boolean) => {
              setAnonymous(checked);
            }}
          >
            <div className="flex flex-col items-start">
              <span className="text-body-bold font-body-bold text-default-font">
                Anonym melden
              </span>
              <span className="text-caption font-caption text-subtext-color">
                Diese Meldung wird anonym eingereicht!
              </span>
            </div>
          </CheckboxCard>
          <div className="flex w-full items-center justify-center gap-2 py-5">
            <Button
              variant="neutral-primary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                setOpen(false);
                setWhatHappened("");
                setResult("");
                setWhy("");
                setHowToPrevent("");
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
      </div>
    </DrawerLayout>
  );
}

export default CustomCirsDrawer;
