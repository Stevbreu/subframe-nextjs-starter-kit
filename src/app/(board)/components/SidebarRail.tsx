"use Client";
import { SidebarRailWithIcons } from "@/subframe/components/SidebarRailWithIcons";
import Image from "next/image";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "@/subframe/components/Avatar";
import { ChatChannelsMenu } from "@/subframe/components/ChatChannelsMenu";
import Link from "next/link";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";

export default function SidebarRail() {
  return (
    <>
      <SidebarRailWithIcons
        header={
          <div className="flex flex-col items-center justify-center gap-2 px-1 py-1">
            <Image
              alt="Subframe"
              className="h-6 w-6 flex-none object-cover"
              src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
              width={100}
              height={100}
            />
          </div>
        }
        footer={
          <>
            <SidebarRailWithIcons.NavItem icon="FeatherAlertTriangle">
              Wichtige Informationen
            </SidebarRailWithIcons.NavItem>
            <SidebarRailWithIcons.NavItem icon="FeatherSettings">
              Item
            </SidebarRailWithIcons.NavItem>
            <div className="flex flex-col items-center justify-end gap-1 px-1 py-1">
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <Avatar
                    size="small"
                    image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
                  >
                    A
                  </Avatar>
                </SubframeCore.DropdownMenu.Trigger>
                <SubframeCore.DropdownMenu.Portal>
                  <SubframeCore.DropdownMenu.Content
                    side="bottom"
                    align="start"
                    sideOffset={4}
                    asChild={true}
                  >
                    <DropdownMenu>
                      <DropdownMenu.DropdownItem icon="FeatherSettings">
                        Settings
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon="FeatherLogOut">
                        Log out
                      </DropdownMenu.DropdownItem>
                    </DropdownMenu>
                  </SubframeCore.DropdownMenu.Content>
                </SubframeCore.DropdownMenu.Portal>
              </SubframeCore.DropdownMenu.Root>
            </div>
          </>
        }
      >
        <Link href="/overview">
          <SidebarRailWithIcons.NavItem icon="FeatherBarChart2">
            Übersicht
          </SidebarRailWithIcons.NavItem>
        </Link>
        <Link href="/inbox">
          <SidebarRailWithIcons.NavItem icon="FeatherInbox" selected={true}>
            Posteingang
          </SidebarRailWithIcons.NavItem>
        </Link>
        <SidebarRailWithIcons.NavItem icon="FeatherNewspaper">
          News
        </SidebarRailWithIcons.NavItem>
        <SidebarRailWithIcons.NavItem icon="FeatherDatabase">
          Spannungsspeicher
        </SidebarRailWithIcons.NavItem>
        <SidebarRailWithIcons.NavItem icon="FeatherPhoneIncoming">
          SOP Seite
        </SidebarRailWithIcons.NavItem>
        <SidebarRailWithIcons.NavItem icon="FeatherMessageCircle">
          Chat Seite
        </SidebarRailWithIcons.NavItem>
        <SidebarRailWithIcons.NavItem icon="FeatherUsers">
          Mitglieder
        </SidebarRailWithIcons.NavItem>
        <SidebarRailWithIcons.NavItem icon="FeatherListChecks">
          Maßnahmenmanagement
        </SidebarRailWithIcons.NavItem>
      </SidebarRailWithIcons>
    </>
  );
}
