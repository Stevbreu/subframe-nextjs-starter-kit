"use client";

import React, { useState, useRef } from "react";
import { SidebarRailWithIcons } from "@/subframe/components/SidebarRailWithIcons";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "@/subframe/components/Avatar";
import { TextField } from "@/subframe/components/TextField";
import { ChatList } from "@/subframe/components/ChatList";
import { ChatChannelsMenu } from "@/subframe/components/ChatChannelsMenu";
import { ChatHeader } from "@/subframe/components/ChatHeader";
import { ChatSent } from "@/subframe/components/ChatSent";
import { ChatReceived } from "@/subframe/components/ChatReceived";
import { IconButton } from "@/subframe/components/IconButton";
import { ChatReciveMessagesImage } from "@/subframe/components/ChatReciveMessagesImage";
import { ChatSendMessagesImage } from "@/subframe/components/ChatSendMessagesImage";
import EmojiPicker from "emoji-picker-react";

function ChatPage() {
  const [inputValue, setInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEmojiClick = (emojiObject) => {
    setInputValue((prevInput) => prevInput + emojiObject.emoji);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Hier könnten Sie den Dateinamen zum inputValue hinzufügen oder eine Vorschau anzeigen
      setInputValue((prevInput) => prevInput + `[File: ${file.name}]`);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      // Hier könnten Sie eine Bildvorschau anzeigen oder den Dateinamen zum inputValue hinzufügen
      setInputValue((prevInput) => prevInput + `[Image: ${file.name}]`);
    } else {
      alert("Please select an image file.");
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex h-screen w-full items-center gap-2">
      <div className="flex grow shrink-0 basis-0 items-center justify-center self-stretch bg-default-background">
        <div className="flex w-72 flex-none flex-col items-start gap-2 self-stretch bg-neutral-50 px-4 py-4 mobile:hidden">
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex w-full items-center justify-between px-4 py-4">
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <div className="flex items-center gap-2">
                    <span className="text-heading-3 font-heading-3 text-subtext-color">
                      Chat Messages
                    </span>
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
              <SubframeCore.Icon
                className="text-body font-body text-default-font"
                name="FeatherEdit"
              />
            </div>
          </div>
          <TextField
            className="h-auto w-full flex-none"
            label=""
            helpText=""
            icon="FeatherSearch"
          >
            <TextField.Input
              placeholder="Search"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
          <div className="flex w-full grow shrink-0 basis-0 items-center gap-2 overflow-auto">
            <ChatChannelsMenu className="h-auto grow shrink-0 basis-0 self-stretch">
              <ChatList>
                <ChatList.ChatListItem
                  avatar="https://res.cloudinary.com/subframe/image/upload/v1711417513/shared/kwut7rhuyivweg8tmyzl.jpg"
                  name="Jack Daniels"
                  message="I'm on my way!"
                  timestamp="5 minutes ago"
                  selected={true}
                />
                <ChatList.ChatListItem
                  avatar="https://res.cloudinary.com/subframe/image/upload/v1711417514/shared/ubsk7cs5hnnaj798efej.jpg"
                  name="John Smith"
                  message="Thanks for the recommendations"
                  timestamp="1 hour ago"
                  unread={true}
                />
                <ChatList.ChatListItem
                  avatar="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
                  name="Jane Doe"
                  message="What time will you be there?"
                  timestamp="Yesterday"
                  replied={true}
                />
              </ChatList>
            </ChatChannelsMenu>
          </div>
        </div>
        <div className="flex grow shrink-0 basis-0 flex-col items-center justify-between self-stretch px-6 py-6">
          <ChatHeader
            name="John Smith"
            subtitle="john.smith@subframe.com"
            buttons={
              <>
                <SubframeCore.Icon
                  className="text-body font-body text-brand-400"
                  name="FeatherMessageCircle"
                />
                <span className="text-caption font-caption text-brand-400">
                  32
                </span>
              </>
            }
          />

          <div className="flex w-full flex-grow flex-col items-start justify-start gap-2 px-6 py-6 overflow-y-auto">
            <ChatSent
              name="You"
              message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 😘"
              timestamp="9 min ago"
            />
            <ChatReceived
              avatar="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
              initials="JD"
              name="Jane Doe"
              message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
              time="11:10pm"
            />
            <ChatReceived
              avatar="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
              initials="JD"
              name="Jane Doe"
              message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
              time="11:10pm"
            />
            <div className="flex w-full flex-col items-start gap-2 px-1 py-1">
              <ChatReciveMessagesImage />
            </div>
            <ChatSent
              name="You"
              message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 😘"
              timestamp="9 min ago"
            />
            <ChatReceived
              avatar="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
              initials="JD"
              name="Jane Doe"
              message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
              time="11:10pm"
            />
            <div className="flex w-full flex-col items-end gap-2 px-1 py-1">
              <ChatSendMessagesImage />
            </div>
            <ChatSent
              name="You"
              message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 😘"
              timestamp="9 min ago"
            />
            <ChatSent
              name="You"
              message="Your sent chat message. This is so beautiful!!! ♥️"
              timestamp="9 min ago"
            />
            <ChatReceived
              avatar="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
              initials="JD"
              name="Jane Doe"
              message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
              time="11:10pm"
            />
            <ChatSent
              name="You"
              message="Your sent chat message"
              timestamp="9 min ago"
            />
          </div>
          <div className="flex w-full items-center justify-center gap-4 px-12 py-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
            <IconButton icon="FeatherUpload" onClick={triggerFileUpload} />
            <IconButton
              icon="FeatherImagePlus"
              onClick={() => {
                const input = document.createElement("input");
                input.type = "file";
                input.accept = "image/*";
                input.onchange = handleImageUpload;
                input.click();
              }}
            />
            <SubframeCore.Popover.Root>
              <SubframeCore.Popover.Trigger asChild={true}>
                <IconButton icon="FeatherSmilePlus" />
              </SubframeCore.Popover.Trigger>
              <SubframeCore.Popover.Portal>
                <SubframeCore.Popover.Content
                  side="bottom"
                  align="center"
                  sideOffset={4}
                  asChild={true}
                >
                  <div className="flex flex-col items-start gap-1 rounded border border-solid border-neutral-border bg-default-background px-3 py-3 shadow-overlay">
                    <div className="flex w-full flex-col items-start gap-2 px-1 py-1" />
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                  </div>
                </SubframeCore.Popover.Content>
              </SubframeCore.Popover.Portal>
            </SubframeCore.Popover.Root>
            <TextField
              className="h-auto grow shrink-0 basis-0"
              variant="filled"
              label=""
              helpText=""
            >
              <TextField.Input
                placeholder="Deine Chatnachricht"
                value={inputValue}
                onChange={handleInputChange}
              />
            </TextField>
            <IconButton
              variant="brand-primary"
              icon="FeatherSend"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
