"use client";

import React, { useEffect } from "react";
import * as SubframeCore from "@subframe/core";
import { Breadcrumbs } from "@/subframe/components/Breadcrumbs";
import { IconButton } from "@/subframe/components/IconButton";
import { Button } from "@/subframe/components/Button";
import { Table } from "@/subframe/components/Table";
import { Badge } from "@/subframe/components/Badge";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import { SkeletonText } from "@/subframe/components/SkeletonText";
import DynamicBreadcrumbs from "../../components/DynamicBreadcrumbs";
import SkeletonTask from "./components/SkeletonTask";
import Sidebar from "../components/Sidebar";

export default function TaskOverview() {
  const [isLoading, setIsLoading] = React.useState(true);

  {
    /* Simulation eine Future/Promise */
  }
  function CustomTimer() {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  useEffect(() => {
    CustomTimer();
  }, []);

  return (
    <div className="flex h-full w-full items-center gap-2">
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
              Aktuelle Aufgaben
            </span>
            <span className="text-body font-body text-subtext-color">
              Übersicht
            </span>
          </div>
          <Button
            variant="neutral-primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Neuer Aufgabe
          </Button>
        </div>
        {/* Loading Skeleton while Loading the data in the Background */}
        {isLoading ? (
          <SkeletonTask />
        ) : (
          <Table
            header={
              <Table.HeaderRow>
                <Table.HeaderCell>Fällig</Table.HeaderCell>
                <Table.HeaderCell>Titel</Table.HeaderCell>
                <Table.HeaderCell>Beschreibung</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
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
                <span className="line-clamp-2 text-body font-body text-neutral-500">
                  Lorem ipsum dolor sit amet,
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="error">überfällig</Badge>
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
                <span className="line-clamp-2 text-body font-body text-neutral-500">
                  Lorem ipsum dolor sit amet,
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="warning">offen</Badge>
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
                <span className="line-clamp-2 text-body font-body text-neutral-500">
                  Lorem ipsum dolor sit amet,
                </span>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">erledigt</Badge>
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
        )}

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
            iconRight="FeatherChevronRight"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            vor
          </Button>
        </div>
      </div>
    </div>
  );
}
