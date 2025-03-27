'use client';

import { HomeIcon, UsersIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Users",
    href: "/users",
    icon: UsersIcon,
  }
];

export default function NavigationLinks() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `flex h-12 p-2 md:ml-5 gap-3 items-center self-end md:self-stretch rounded-tl-md rounded-tr-md rounded-bl-none md:rounded-tr-none md:rounded-bl-md text-sm bg-lighter-bg hover:bg-content-bg hover:text-accent`,
              {
                "bg-white text-accent": pathname === link.href,
              }
        )}
          >
            <Icon className="h-10"/>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        )
      })}
    </>
  );
}