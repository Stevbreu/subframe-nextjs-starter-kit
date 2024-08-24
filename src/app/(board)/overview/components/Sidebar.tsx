import * as SubframeCore from "@subframe/core";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import { Avatar } from "@/subframe/components/Avatar";
import { IconButton } from "@/subframe/components/IconButton";
import { ChatChannelsMenu } from "@/subframe/components/ChatChannelsMenu";
import { Badge } from "@/subframe/components/Badge";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex w-72 flex-none flex-col items-start gap-2 self-stretch bg-neutral-50 px-4 py-4 mobile:hidden">
      <div className="flex w-full items-center gap-4">
        <div className="flex grow shrink-0 basis-0 items-center gap-2 px-4 py-4">
          <SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Trigger asChild={true}>
              <div className="flex items-center gap-2">
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Subframe
                </span>
                <SubframeCore.Icon
                  className="text-caption font-caption text-default-font"
                  name="FeatherChevronDown"
                />
              </div>
            </SubframeCore.DropdownMenu.Trigger>
            <SubframeCore.DropdownMenu.Portal>
              <SubframeCore.DropdownMenu.Content
                side="bottom"
                align="start"
                sideOffset={4}
                asChild={true}
              >
                <DropdownMenu>
                  <div className="flex w-full items-center gap-2 border-b border-solid border-neutral-border px-3 pt-3 pb-4">
                    <Avatar
                      image="https://res.cloudinary.com/subframe/image/upload/v1713909352/uploads/279/rsam5v66hcvpj96fr5hc.avif"
                      square={true}
                    >
                      A
                    </Avatar>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="line-clamp-1 w-full text-body-bold font-body-bold text-default-font">
                        Subframe
                      </span>
                      <span className="line-clamp-1 w-full text-caption font-caption text-subtext-color">
                        subframe.com
                      </span>
                    </div>
                  </div>
                  <DropdownMenu.DropdownItem icon={null}>
                    Invite team members
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    Settings
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    Sign out
                  </DropdownMenu.DropdownItem>
                </DropdownMenu>
              </SubframeCore.DropdownMenu.Content>
            </SubframeCore.DropdownMenu.Portal>
          </SubframeCore.DropdownMenu.Root>
        </div>
        <IconButton
          icon="FeatherSearch"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
        />
      </div>
      <div className="flex w-full grow shrink-0 basis-0 items-center gap-2">
        <ChatChannelsMenu className="h-auto grow shrink-0 basis-0 self-stretch">
          {/* Zur Übersicht KPI */}
          <Link href="/overview" className="w-full">
            <ChatChannelsMenu.Item selected={true} icon="FeatherSparkles">
              Übersicht KPI
            </ChatChannelsMenu.Item>
          </Link>

          {/* Zur Übersicht Termine */}
          <Link href="/overview/appointment" className="w-full">
            <ChatChannelsMenu.Item
              icon="FeatherCalendar"
              rightSlot={<Badge>34</Badge>}
            >
              Termine
            </ChatChannelsMenu.Item>
          </Link>

          {/* Zur Übersicht Aufgaben */}
          <Link href="/overview/taskoverview" className="w-full">
            <ChatChannelsMenu.Item icon="FeatherListChecks">
              Aufgaben
            </ChatChannelsMenu.Item>
          </Link>

          {/* Zur Übersicht Dokumente */}
          <Link href="/overview/documentsoverview" className="w-full">
            <ChatChannelsMenu.Item icon="FeatherScroll">
              Neu Dokumente
            </ChatChannelsMenu.Item>
          </Link>

          {/* Zur Übersicht CIRS */}
          <Link href="/overview/cirsoverview" className="w-full">
            <ChatChannelsMenu.Item
              icon="FeatherMessageSquare"
              rightSlot={<Badge variant="neutral">2</Badge>}
            >
              Neue CIRS Fälle
            </ChatChannelsMenu.Item>
          </Link>

          {/* Zur Übersicht Favorieten-Meldungen */}
          <ChatChannelsMenu.Folder label="Favorites" defaultOpen={false}>
            <ChatChannelsMenu.Item
              icon="FeatherHash"
              rightSlot={<Badge variant="neutral">2</Badge>}
            >
              design
            </ChatChannelsMenu.Item>
            <ChatChannelsMenu.Item
              icon="FeatherHash"
              rightSlot={<Badge variant="neutral">4</Badge>}
            >
              front-end
            </ChatChannelsMenu.Item>
          </ChatChannelsMenu.Folder>

          {/* Zur Übersicht Channels */}
          <ChatChannelsMenu.Folder label="Channels" defaultOpen={false}>
            <ChatChannelsMenu.Item
              icon="FeatherHash"
              rightSlot={<Badge variant="neutral">1</Badge>}
            >
              general
            </ChatChannelsMenu.Item>
            <ChatChannelsMenu.Item icon="FeatherHash">
              inspo
            </ChatChannelsMenu.Item>
            <ChatChannelsMenu.Item
              icon="FeatherHash"
              rightSlot={<Badge variant="neutral">12</Badge>}
            >
              engineering
            </ChatChannelsMenu.Item>
            <ChatChannelsMenu.Item
              icon="FeatherHash"
              rightSlot={<Badge variant="neutral">2</Badge>}
            >
              gtm
            </ChatChannelsMenu.Item>
          </ChatChannelsMenu.Folder>
        </ChatChannelsMenu>
      </div>
    </div>
  );
}
