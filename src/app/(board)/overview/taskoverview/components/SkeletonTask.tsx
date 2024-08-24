import { Table } from "@/subframe/components/Table";
import { SkeletonText } from "@/subframe/components/SkeletonText";
import * as SubframeCore from "@subframe/core";
import { IconButton } from "@/subframe/components/IconButton";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";

export default function SkeletonTask() {
  return (
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
          <SkeletonText />
        </Table.Cell>
        <Table.Cell>
          <SkeletonText />
        </Table.Cell>
        <Table.Cell className="h-12 w-auto flex-none">
          <SkeletonText />
        </Table.Cell>
        <Table.Cell>
          <SkeletonText />
        </Table.Cell>
        <Table.Cell>
          <div className="flex grow shrink-0 basis-0 items-center justify-end">
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <IconButton
                  size="medium"
                  icon="FeatherMoreHorizontal"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
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
          <SkeletonText />
        </Table.Cell>
        <Table.Cell>
          <SkeletonText />
        </Table.Cell>
        <Table.Cell>
          <SkeletonText />
        </Table.Cell>
        <Table.Cell>
          <SkeletonText />
        </Table.Cell>
        <Table.Cell>
          <div className="flex grow shrink-0 basis-0 items-center justify-end">
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <IconButton
                  size="medium"
                  icon="FeatherMoreHorizontal"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
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
          <SkeletonText />
        </Table.Cell>
        <Table.Cell>
          <SkeletonText />
        </Table.Cell>
        <Table.Cell>
          <SkeletonText />
        </Table.Cell>
        <Table.Cell>
          <SkeletonText />
        </Table.Cell>
        <Table.Cell>
          <div className="flex grow shrink-0 basis-0 items-center justify-end">
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <IconButton
                  size="medium"
                  icon="FeatherMoreHorizontal"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
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
          <SkeletonText />
        </Table.Cell>
        <Table.Cell>
          <SkeletonText />
        </Table.Cell>
        <Table.Cell>
          <SkeletonText />
        </Table.Cell>
        <Table.Cell>
          <SkeletonText />
        </Table.Cell>
        <Table.Cell>
          <div className="flex grow shrink-0 basis-0 items-center justify-end">
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <IconButton
                  size="medium"
                  icon="FeatherMoreHorizontal"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
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
  );
}
