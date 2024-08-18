"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/subframe/components/Breadcrumbs";

export default function DynamicBreadcrumbs() {
  const pathname = usePathname();
  console.log(pathname);
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <>
      <Breadcrumbs>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <span key={href}>
              <Breadcrumbs.Item active={isLast}>
                <Link href={href}>
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </Link>
              </Breadcrumbs.Item>
              {!isLast && <Breadcrumbs.Divider />}
            </span>
          );
        })}
      </Breadcrumbs>
    </>
  );
}
