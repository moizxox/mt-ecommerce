import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="w-full bg-transparent text-left p-4 text-black hover:bg-black hover:text-white flex items-center text-base font-medium "
                onClick={() => {
                  onOpenChange(false);
                }}
              >
                {item.children}
              </Link>
            );
          })}
        </ScrollArea>
        <div className="border-t">
          <Link
            href="/sign-in"
            className="w-full bg-transparent text-left p-4 text-black hover:bg-black hover:text-white flex items-center text-base font-medium "
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="w-full bg-transparent text-left p-4 text-black hover:bg-black hover:text-white flex items-center text-base font-medium "
          >
            Sign Up
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarSidebar;
