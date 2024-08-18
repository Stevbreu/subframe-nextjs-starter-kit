"use client";
/*
 * Documentation:
 * Default Page Layout — https://app.subframe.com/3f3ba0b30f1c/library?component=Default+Page+Layout_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Sidebar with minimal text sections — https://app.subframe.com/3f3ba0b30f1c/library?component=Sidebar+with+minimal+text+sections_5ceb0e51-a859-4b82-b5ee-367eaf41d29d
 * Icon Button — https://app.subframe.com/3f3ba0b30f1c/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { SidebarWithMinimalTextSections } from "../components/SidebarWithMinimalTextSections";
import { IconButton } from "../components/IconButton";

interface DefaultPageLayoutRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const DefaultPageLayoutRoot = React.forwardRef<
  HTMLElement,
  DefaultPageLayoutRootProps
>(function DefaultPageLayoutRoot(
  { children, className, ...otherProps }: DefaultPageLayoutRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex h-screen w-full items-center",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <SidebarWithMinimalTextSections
        className="mobile:hidden"
        header={
          <div className="flex w-full items-center gap-4">
            <img
              className="h-6 flex-none object-cover"
              src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
            />
            <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
              Subframe
            </span>
          </div>
        }
        footer={<IconButton icon="FeatherSettings" />}
      >
        <SidebarWithMinimalTextSections.NavSection label="Overview">
          <SidebarWithMinimalTextSections.NavItem
            icon="FeatherRocket"
            selected={true}
          >
            Get Started
          </SidebarWithMinimalTextSections.NavItem>
          <SidebarWithMinimalTextSections.NavItem icon="FeatherCog">
            Installation
          </SidebarWithMinimalTextSections.NavItem>
          <SidebarWithMinimalTextSections.NavItem icon="FeatherMegaphone">
            What&#39;s New
          </SidebarWithMinimalTextSections.NavItem>
        </SidebarWithMinimalTextSections.NavSection>
        <SidebarWithMinimalTextSections.NavSection label="Documentation">
          <SidebarWithMinimalTextSections.NavItem>
            Alert
          </SidebarWithMinimalTextSections.NavItem>
          <SidebarWithMinimalTextSections.NavItem>
            Avatar
          </SidebarWithMinimalTextSections.NavItem>
          <SidebarWithMinimalTextSections.NavItem>
            Badge
          </SidebarWithMinimalTextSections.NavItem>
          <SidebarWithMinimalTextSections.NavItem>
            Button
          </SidebarWithMinimalTextSections.NavItem>
          <SidebarWithMinimalTextSections.NavItem>
            Checkbox
          </SidebarWithMinimalTextSections.NavItem>
          <SidebarWithMinimalTextSections.NavItem>
            Icon
          </SidebarWithMinimalTextSections.NavItem>
          <SidebarWithMinimalTextSections.NavItem>
            Navigation
          </SidebarWithMinimalTextSections.NavItem>
          <SidebarWithMinimalTextSections.NavItem>
            Radio Group
          </SidebarWithMinimalTextSections.NavItem>
          <SidebarWithMinimalTextSections.NavItem>
            Switch
          </SidebarWithMinimalTextSections.NavItem>
          <SidebarWithMinimalTextSections.NavItem>
            Toggle
          </SidebarWithMinimalTextSections.NavItem>
        </SidebarWithMinimalTextSections.NavSection>
      </SidebarWithMinimalTextSections>
      {children ? (
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch overflow-y-auto bg-default-background">
          {children}
        </div>
      ) : null}
    </div>
  );
});

export const DefaultPageLayout = DefaultPageLayoutRoot;
