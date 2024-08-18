"use client";

import SidebarRail from "./components/SidebarRail";
import "../globals.css";

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row w-full h-full overflow-hidden">
      <SidebarRail />
      <div className="w-full">{children}</div>
    </div>
    
  );
}
