"use client";

import React from "react";
import { SidebarRailWithIcons } from "@/subframe/components/SidebarRailWithIcons";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "@/subframe/components/Avatar";
import { IconButton } from "@/subframe/components/IconButton";
import { ChatChannelsMenu } from "@/subframe/components/ChatChannelsMenu";
import { Badge } from "@/subframe/components/Badge";
import { Breadcrumbs } from "@/subframe/components/Breadcrumbs";
import { Button } from "@/subframe/components/Button";
import { Calendar } from "@/subframe/components/Calendar";
import { Table } from "@/subframe/components/Table";
import DynamicBreadcrumbs from "../../components/DynamicBreadcrumbs";
import Sidebar from "../components/Sidebar";

function AppointmentPage() {
  return (
    <div className="flex h-full w-full items-center gap-2">
      <div className="flex grow shrink-0 basis-0 items-start self-stretch bg-default-background">
      <Sidebar />
      <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch ">
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
        <div className="flex w-full items-center gap-4 px-4 py-4">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
            <span className="text-heading-2 font-heading-2 text-default-font">
              Aktuelle Termine
            </span>
            <span className="text-body font-body text-subtext-color">
              Übersicht
            </span>
          </div>
          <Button
            variant="neutral-primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Neuer Termin
          </Button>
          <SubframeCore.HoverCard.Root>
            <SubframeCore.HoverCard.Trigger asChild={true}>
              <Button
                variant="neutral-primary"
                icon="FeatherChevronDown"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Datum
              </Button>
            </SubframeCore.HoverCard.Trigger>
            <SubframeCore.HoverCard.Portal>
              <SubframeCore.HoverCard.Content
                side="bottom"
                align="center"
                sideOffset={4}
                asChild={true}
              >
                <div className="flex flex-col items-start gap-1 rounded border border-solid border-neutral-border bg-default-background px-3 py-3 shadow-default mr-4">
                  <Calendar
                    mode={"single"}
                    selected={new Date()}
                    onSelect={(date: Date | undefined) => {}}
                  />
                </div>
              </SubframeCore.HoverCard.Content>
            </SubframeCore.HoverCard.Portal>
          </SubframeCore.HoverCard.Root>
        </div>
        <Table
          header={
            <Table.HeaderRow>
              <Table.HeaderCell>Datum</Table.HeaderCell>
              <Table.HeaderCell>Titel</Table.HeaderCell>
              <Table.HeaderCell>Beschreibung</Table.HeaderCell>
              <Table.HeaderCell>Kategorie</Table.HeaderCell>
            </Table.HeaderRow>
          }
        >
          <Table.Row>
            <Table.Cell>
              <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-500">
                01.01.2024
              </span>
            </Table.Cell>
            <Table.Cell>
              <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                John Walton
              </span>
            </Table.Cell>
            <Table.Cell className="h-12 w-auto flex-none">
              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                Lorem ipsum dolor sit amet,
              </span>
            </Table.Cell>
            <Table.Cell>
              <Badge>Engineering</Badge>
            </Table.Cell>
            <Table.Cell>
              <div className="flex grow shrink-0 basis-0 items-center justify-end">
                <SubframeCore.DropdownMenu.Root>
                  <SubframeCore.DropdownMenu.Trigger asChild={true}>
                    <IconButton
                      size="medium"
                      icon="FeatherMoreHorizontal"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </SubframeCore.DropdownMenu.Trigger>
                  <SubframeCore.DropdownMenu.Portal>
                    <SubframeCore.DropdownMenu.Content
                      side="bottom"
                      align="end"
                      sideOffset={8}
                      asChild={true}
                    >
                      <DropdownMenu>
                        <DropdownMenu.DropdownItem icon="FeatherStar">
                          Favorite
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon="FeatherEdit2">
                          Edit
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon="FeatherTrash">
                          Delete
                        </DropdownMenu.DropdownItem>
                      </DropdownMenu>
                    </SubframeCore.DropdownMenu.Content>
                  </SubframeCore.DropdownMenu.Portal>
                </SubframeCore.DropdownMenu.Root>
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-500">
                01.01.2024
              </span>
            </Table.Cell>
            <Table.Cell>
              <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                Sarah Chandler
              </span>
            </Table.Cell>
            <Table.Cell>
              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                Lorem ipsum dolor sit amet,
              </span>
            </Table.Cell>
            <Table.Cell>
              <Badge variant="warning">Design</Badge>
            </Table.Cell>
            <Table.Cell>
              <div className="flex grow shrink-0 basis-0 items-center justify-end">
                <SubframeCore.DropdownMenu.Root>
                  <SubframeCore.DropdownMenu.Trigger asChild={true}>
                    <IconButton
                      size="medium"
                      icon="FeatherMoreHorizontal"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </SubframeCore.DropdownMenu.Trigger>
                  <SubframeCore.DropdownMenu.Portal>
                    <SubframeCore.DropdownMenu.Content
                      side="bottom"
                      align="end"
                      sideOffset={8}
                      asChild={true}
                    >
                      <DropdownMenu>
                        <DropdownMenu.DropdownItem icon="FeatherStar">
                          Favorite
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon="FeatherPlus">
                          Add
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon="FeatherEdit2">
                          Edit
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon="FeatherTrash">
                          Delete
                        </DropdownMenu.DropdownItem>
                      </DropdownMenu>
                    </SubframeCore.DropdownMenu.Content>
                  </SubframeCore.DropdownMenu.Portal>
                </SubframeCore.DropdownMenu.Root>
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-500">
                01.01.2024
              </span>
            </Table.Cell>
            <Table.Cell>
              <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                Susan Best
              </span>
            </Table.Cell>
            <Table.Cell>
              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                Lorem ipsum dolor sit amet,
              </span>
            </Table.Cell>
            <Table.Cell>
              <Badge variant="success">Product</Badge>
            </Table.Cell>
            <Table.Cell>
              <div className="flex grow shrink-0 basis-0 items-center justify-end">
                <SubframeCore.DropdownMenu.Root>
                  <SubframeCore.DropdownMenu.Trigger asChild={true}>
                    <IconButton
                      size="medium"
                      icon="FeatherMoreHorizontal"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </SubframeCore.DropdownMenu.Trigger>
                  <SubframeCore.DropdownMenu.Portal>
                    <SubframeCore.DropdownMenu.Content
                      side="bottom"
                      align="end"
                      sideOffset={8}
                      asChild={true}
                    >
                      <DropdownMenu>
                        <DropdownMenu.DropdownItem icon="FeatherStar">
                          Favorite
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon="FeatherPlus">
                          Add
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon="FeatherEdit2">
                          Edit
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon="FeatherTrash">
                          Delete
                        </DropdownMenu.DropdownItem>
                      </DropdownMenu>
                    </SubframeCore.DropdownMenu.Content>
                  </SubframeCore.DropdownMenu.Portal>
                </SubframeCore.DropdownMenu.Root>
              </div>
            </Table.Cell>
          </Table.Row>
        </Table>
        <div className="flex w-full items-center justify-center gap-2 px-4 py-1">
          <Button
            variant="neutral-secondary"
            size="small"
            icon="FeatherChevronLeft"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            zurück
          </Button>
          <div className="flex grow shrink-0 basis-0 items-center justify-center gap-4">
            <span className="text-caption-bold font-caption-bold text-default-font">
              Page 1 of 3
            </span>
          </div>
          <Button
            variant="neutral-secondary"
            size="small"
            iconRight="FeatherChevronRight"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            vor
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AppointmentPage;
