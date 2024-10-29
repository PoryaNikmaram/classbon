"use client";

import { NavigationMenuItems } from "@/types/navigation-menu-items";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuItems: NavigationMenuItems[] = [
  {
    title: "صفحه اصلی",
    href: "/",
  },
  {
    title: "دوره های ریکت و نکست",
    href: "/courses",
  },
  {
    title: "مطالب و مقالات",
    href: "/blog",
  },
];

const TopNavigation: React.FC = () => {
  const pathname = usePathname();
  return (
    <ul className="flex gap-x-8 mr-12">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={`navigation-${item.href}`}>
            <Link
              className={`dark:hover:text-primary transition-colors p-2 ${
                isActive &&
                "border-b-2 dark:text-primary dark:border-primary/30"
              }`}
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TopNavigation;
