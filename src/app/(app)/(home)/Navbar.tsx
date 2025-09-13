"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import NavbarSidebar from "./NavbarSidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

interface NavbarItemProps {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}

const NavbarItems = ({ children, href, isActive }: NavbarItemProps) => {
  return (
    <Button
      variant="outline"
      asChild
      className={cn(
        "bg-transparent text-black hover:bg-transparent text-lg px-3.5 rounded-full border-transparent hover:border-primary",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  {
    href: "/",
    children: "Home",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/feature",
    children: "Feature",
  },
  {
    href: "/pricing",
    children: "Pricing",
  },
  {
    href: "/contact",
    children: "Contact",
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="flex items-center pl-6">
        <span className={cn("text-5xl font-semibold", poppins.className)}>MT </span>
      </Link>

      <NavbarSidebar items={navbarItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => {
          return (
            <NavbarItems key={item.href} href={item.href} isActive={pathname === item.href}>
              {item.children}
            </NavbarItems>
          );
        })}
      </div>
      <div className="hidden lg:flex">
        <Link href="/sign-in">
          <Button
            variant="secondary"
            className="bg-transparent border-l border-r-0 border-t-0 border-b-0 rounded-none h-full text-blacj hover:bg-pink-400 transition-all px-12"
          >
            Sign In
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button className="bg-black border-l border-r-0 border-t-0 border-b-0 rounded-none h-full text-white hover:bg-pink-400 hover:text-black transition-all px-12">
            Start Selling
          </Button>
        </Link>
      </div>
      <div className="flex lg:hidden h-full items-center">
        <Button
          variant="ghost"
          className="border-transparent size-12 bg-white"
          onClick={() => {
            setIsSidebarOpen(true);
          }}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
