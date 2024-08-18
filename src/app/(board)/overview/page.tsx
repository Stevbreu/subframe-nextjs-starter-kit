"use client";
import { SidebarRailWithIcons } from "@/subframe/components/SidebarRailWithIcons";
import * as SubframeCore from "@subframe/core";
import { IconButton } from "@/subframe/components/IconButton";
import { Breadcrumbs } from "@/subframe/components/Breadcrumbs";
import Sidebar from "./components/Sidebar";
import DynamicBreadcrumbs from "../components/DynamicBreadcrumbs";

export default function OverviewPage() {
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
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
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
          <div className="flex w-full flex-wrap items-start gap-6 rounded bg-default-background px-12 py-12">
            <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-4 overflow-hidden rounded bg-neutral-50 px-6 py-6 shadow-overlay">
              <SubframeCore.Icon
                className="text-heading-3 font-heading-3 text-default-font"
                name="FeatherUsers"
              />
              <div className="flex w-full flex-col items-start gap-1">
                <span className="w-full text-heading-2 font-heading-2 text-default-font">
                  10
                </span>
                <span className="line-clamp-1 w-full text-body font-body text-subtext-color">
                  Mitglieder
                </span>
              </div>
            </div>
            <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded bg-neutral-50 px-6 py-6 shadow-overlay">
              <SubframeCore.Icon
                className="text-heading-3 font-heading-3 text-default-font"
                name="FeatherCalendar"
              />
              <div className="flex w-full flex-col items-start gap-1">
                <span className="w-full text-heading-2 font-heading-2 text-default-font">
                  15 Termine
                </span>
                <span className="line-clamp-1 w-full text-body font-body text-subtext-color">
                  Termine diese Woche
                </span>
              </div>
            </div>
            <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-4 overflow-hidden rounded bg-neutral-50 px-6 py-6 shadow-overlay">
              <SubframeCore.Icon
                className="text-heading-3 font-heading-3 text-default-font"
                name="FeatherDollarSign"
              />
              <div className="flex w-full flex-col items-start gap-1">
                <span className="w-full text-heading-2 font-heading-2 text-default-font">
                  $10+ million
                </span>
                <span className="line-clamp-1 w-full text-body font-body text-subtext-color">
                  revenue generated
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-start gap-6 rounded bg-default-background px-12 py-12">
            <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-4 overflow-hidden rounded bg-neutral-50 px-6 py-6 shadow-overlay">
              <SubframeCore.Icon
                className="text-heading-3 font-heading-3 text-default-font"
                name="FeatherMegaphone"
              />
              <div className="flex w-full flex-col items-start gap-1">
                <span className="w-full text-heading-2 font-heading-2 text-default-font">
                  10
                </span>
                <span className="line-clamp-1 w-full text-body font-body text-subtext-color">
                  neue CIRS Meldungen
                </span>
              </div>
            </div>
            <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded bg-neutral-50 px-6 py-6 shadow-overlay">
              <SubframeCore.Icon
                className="text-heading-3 font-heading-3 text-default-font"
                name="FeatherFrame"
              />
              <div className="flex w-full flex-col items-start gap-1">
                <span className="w-full text-heading-2 font-heading-2 text-default-font">
                  2
                </span>
                <span className="line-clamp-1 w-full text-body font-body text-subtext-color">
                  neue Risiken
                </span>
              </div>
            </div>
            <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-4 overflow-hidden rounded bg-neutral-50 px-6 py-6 shadow-overlay">
              <SubframeCore.Icon
                className="text-heading-3 font-heading-3 text-default-font"
                name="FeatherAlertTriangle"
              />
              <div className="flex w-full flex-col items-start gap-1">
                <span className="w-full text-heading-2 font-heading-2 text-default-font">
                  3
                </span>
                <span className="line-clamp-1 w-full text-body font-body text-subtext-color">
                  neue Beschwerden
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
