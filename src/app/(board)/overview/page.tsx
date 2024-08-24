"use client";

import React from "react";
import { SidebarRailWithIcons } from "@/subframe/components/SidebarRailWithIcons";
import * as SubframeCore from "@subframe/core";
import { IconButton } from "@/subframe/components/IconButton";
import { Breadcrumbs } from "@/subframe/components/Breadcrumbs";
import Sidebar from "./components/Sidebar";
import DynamicBreadcrumbs from "../components/DynamicBreadcrumbs";
import { CustomHomeCardRed } from "@/subframe/components/CustomHomeCardRed";
import { CustomHomeCardGreen } from "@/subframe/components/CustomHomeCardGreen";
import { CustomHomeCardYellow } from "@/subframe/components/CustomHomeCardYellow";
import CustomCirsDrawer from "./components/CustomCIRSDrawer";
import CustomActionDrawer from "./components/CustomActionDrawer";
import CustomStorageDrawer from "./components/CustomStorageDrawer";

export default function OverviewPage() {
  const [openCustomActionDrawer, setOpenCustomActionDrawer] =
    React.useState(false);
  const [openCustomCirsDrawer, setOpenCustomCirsDrawer] = React.useState(false);
  const [openCustomStorageDrawer, setOpenCustomStorageDrawer] =
    React.useState(false);

  return (
    <div className="flex h-full w-full items-center gap-2">
      <div className="flex grow shrink-0 basis-0 items-start self-stretch bg-default-background">
        <Sidebar />
        <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch">
          <div className="flex w-full items-start gap-2 border-b border-solid border-neutral-border px-6 py-6">
            <div className="flex grow shrink-0 basis-0 items-center gap-2">
              <div className="flex items-center gap-1 rounded border border-solid border-neutral-border bg-default-background px-1 py-1">
                <SubframeCore.Icon
                  className="text-body font-body text-subtext-color"
                  name="FeatherHash"
                />
              </div>
              <DynamicBreadcrumbs />
            </div>

            <IconButton
              variant="brand-tertiary"
              size="small"
              icon="FeatherInbox"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                setOpenCustomCirsDrawer(true);
              }}
            />

            <IconButton
              size="small"
              icon="FeatherStar"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
            <IconButton
              size="small"
              icon="FeatherBell"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
            <IconButton
              size="small"
              icon="FeatherSlidersHorizontal"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
          </div>

          <div className="flex w-full items-start justify-center gap-2 px-12 py-12">
            <CustomCirsDrawer
              open={openCustomCirsDrawer}
              setOpen={setOpenCustomCirsDrawer}
            />
            <CustomHomeCardRed
              title="CIRS MELDUNG"
              subtitle="Geben Sie eine CIRS Meldung ab."
              icon="FeatherAlertCircle"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                setOpenCustomCirsDrawer(true);
              }}
            />
            <CustomStorageDrawer
              open={openCustomStorageDrawer}
              setOpen={setOpenCustomStorageDrawer}
            />
            <CustomHomeCardGreen
              title="Spannung erstellen"
              subtitle="Füllen Sie die Spannungsbox"
              icon="FeatherDatabase"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                setOpenCustomStorageDrawer(true);
              }}
            />
            <CustomActionDrawer
              open={openCustomActionDrawer}
              setOpen={setOpenCustomActionDrawer}
            />
            <CustomHomeCardYellow
              title="Aufgabe erstellen"
              subtitle="Erstelle eine neue Aufgabe"
              icon="FeatherListChecks"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                setOpenCustomActionDrawer(true);
              }}
            />
          </div>
          <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
        </div>
      </div>
    </div>
  );
}
