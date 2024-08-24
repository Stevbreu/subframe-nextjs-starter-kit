"use client";

import React, { useState } from "react";
import { HomeCard } from "@/subframe/components/HomeCard";
import Link from "next/link";
import { DarkModeSelect } from "./(board)/components/DarkModeSelect";
import TimePicker from "/src/components/TimePicker";

function NewPage() {
  const [time, setTime] = useState("10:00");

  const handleTimeChange = (newTime) => {
    console.log("Selected time:", newTime);
    setTime(newTime);
  };
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-center justify-center gap-4 bg-default-background py-12">
      <Link href="/overview">
        <HomeCard
          className="h-auto w-auto flex-none"
          title="Start the Project"
          subtitle="Klcik mich und lege los"
        />
      </Link>
      <DarkModeSelect />
    </div>
  );
}

export default NewPage;
