"use client";
import * as SubframeCore from "@subframe/core";
import { Breadcrumbs } from "@/subframe/components/Breadcrumbs";
import { IconButton } from "@/subframe/components/IconButton";
import { Select } from "@/subframe/components/Select";
import { LineChart } from "@/subframe/components/LineChart";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function CIRSOverview() {
  const [categories, setCategories] = useState([
    "Bitte wählen",
    "Labor",
    "Prozess",
    "Therapie",
  ]);
  const [selectCategory, setSelectCategory] = useState("Bitte wählen");
  const [year, setYear] = useState(["2022", "2023", "2024"]);
  const [selectYear, setSelectYear] = useState("2024");

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
            <Breadcrumbs>
              <Breadcrumbs.Item>Favorites</Breadcrumbs.Item>
              <Breadcrumbs.Divider />
              <Breadcrumbs.Item active={true}>overview</Breadcrumbs.Item>
            </Breadcrumbs>
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
              Critical Incident Reporting System
            </span>
            <span className="text-body font-body text-subtext-color">
              Übersicht
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-end gap-2 px-4 py-4">
          <div className="flex w-full items-start justify-end gap-4 px-1 py-1">
            <Select
              label=""
              placeholder="Jahr"
              helpText=""
              value={selectYear}
              onValueChange={(value: string) => {
                setSelectYear(value);
              }}
            >
              {year.map((year, index) => (
                <Select.Item key={index} value={year}>
                  {year}
                </Select.Item>
              ))}
            </Select>
            <Select
              label=""
              placeholder="Kategorie"
              helpText=""
              value={selectCategory}
              onValueChange={(value) => {
                setSelectCategory(value);
              }}
            >
              {categories.map((category, index) => (
                <Select.Item key={index} value={category}>
                  {category}
                </Select.Item>
              ))}
            </Select>
          </div>
        </div>
        <LineChart
          categories={["Biology", "Business", "Psychology"]}
          data={[
            { Year: "2015", Psychology: 120, Business: 110, Biology: 100 },
            { Year: "2016", Psychology: 130, Business: 95, Biology: 105 },
            { Year: "2017", Psychology: 115, Business: 105, Biology: 110 },
            { Year: "2018", Psychology: 125, Business: 120, Biology: 90 },
            { Year: "2019", Psychology: 110, Business: 130, Biology: 85 },
            { Year: "2020", Psychology: 135, Business: 100, Biology: 95 },
            { Year: "2021", Psychology: 105, Business: 115, Biology: 120 },
            { Year: "2022", Psychology: 140, Business: 125, Biology: 130 },
          ]}
          index={"Year"}
        />
      </div>
    </div>
  );
}
