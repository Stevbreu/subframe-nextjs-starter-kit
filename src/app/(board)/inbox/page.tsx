"use client";
// @subframe/sync-disable
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "@/subframe/components/Avatar";
import { IconButton } from "@/subframe/components/IconButton";
import { ChatChannelsMenu } from "@/subframe/components/ChatChannelsMenu";
import { Badge } from "@/subframe/components/Badge";
import { Button } from "@/subframe/components/Button";
import { ChatMessageLinkCard } from "@/subframe/components/ChatMessageLinkCard";
import { ChatChannelMessage } from "@/subframe/components/ChatChannelMessage";
import { ChatChannelMessageBar } from "@/subframe/components/ChatChannelMessageBar";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "./components/Sidebar";
import DynamicBreadcrumbs from "../components/DynamicBreadcrumbs";

export default function Inbox() {
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
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start px-4 py-4 overflow-auto">
            <ChatChannelMessage
              avatar="https://res.cloudinary.com/subframe/image/upload/v1711417514/shared/ubsk7cs5hnnaj798efej.jpg"
              author="Alex Chan"
              timestamp="9:03 AM"
              toolbar={
                <>
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    🔥 2
                  </Button>
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    👀
                  </Button>
                  <IconButton
                    variant="neutral-secondary"
                    size="small"
                    icon="FeatherSmilePlus"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </>
              }
            >
              <span className="w-full whitespace-pre-wrap text-body font-body text-default-font">
                {
                  "Morning team! 👋 I've just pushed the latest mockups for the dashboard redesign to our Subframe project. @Sarah could you take a look at the color scheme? I'm not sure if it aligns with our new brand guidelines."
                }
              </span>
              <ChatMessageLinkCard
                image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
                title="Dashboard Redesign"
                subtitle="app.subframe.com"
              />
            </ChatChannelMessage>
            <ChatChannelMessage
              avatar="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
              author="Diana T."
              timestamp="2d ago"
              toolbar={
                <>
                  <Button
                    variant="neutral-secondary"
                    size="small"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    🙌
                  </Button>
                  <IconButton
                    variant="neutral-secondary"
                    size="small"
                    icon="FeatherSmilePlus"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </>
              }
            >
              <span className="w-full whitespace-pre-wrap text-body font-body text-default-font">
                {
                  "Good morning, Alex! Sure thing, I'll review the color palette right away. 👀\n"
                }
              </span>
            </ChatChannelMessage>
            <ChatChannelMessage
              avatar="https://res.cloudinary.com/subframe/image/upload/v1711417513/shared/kwut7rhuyivweg8tmyzl.jpg"
              author="Daniel A."
              timestamp="2d ago"
              toolbar={
                <IconButton
                  variant="neutral-secondary"
                  size="small"
                  icon="FeatherSmilePlus"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              }
            >
              <span className="w-full whitespace-pre-wrap text-body font-body text-default-font">
                {
                  "@Alex, quick question - did you consider the mobile view for those new data visualization components? I'm a bit concerned about how they'll render on smaller screens."
                }
              </span>
              <div className="flex flex-col items-start gap-2 overflow-hidden rounded border border-solid border-neutral-border bg-default-background shadow-default">
                <Image
                  alt="Dashboard Redesign"
                  className="h-40 flex-none object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1713908895/uploads/279/fgotrrosb9jl6bryufsx.avif"
                  width={500}
                  height={500}
                />
              </div>
            </ChatChannelMessage>
            <ChatChannelMessage
              avatar="https://res.cloudinary.com/subframe/image/upload/v1711417514/shared/ubsk7cs5hnnaj798efej.jpg"
              author="Alex Chan"
              timestamp="9:03 AM"
              toolbar={
                <IconButton
                  variant="neutral-secondary"
                  size="small"
                  icon="FeatherSmilePlus"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              }
            >
              <span className="w-full whitespace-pre-wrap text-body font-body text-default-font">
                {
                  "Good point! I focused mainly on the desktop version. Could you take a stab at adapting those for mobile? Your expertise in responsive design would be really helpful here.\n"
                }
              </span>
            </ChatChannelMessage>
          </div>
          <div className="flex w-full flex-col items-start gap-2 px-8 pb-8 mobile:px-4 mobile:pt-0 mobile:pb-4">
            <ChatChannelMessageBar />
          </div>
        </div>
      </div>
    </div>
  );
}
