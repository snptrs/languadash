import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./theme-switcher";

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-inherit">
      <div className="container flex justify-between items-center px-4 mx-auto h-16">
        <div className="flex gap-2 items-center">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-inherit"
          >
            LingoDash
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-2 items-center">
            <NavigationMenuItem>
              <Button asChild variant="outline">
                <Link href="/signin">Sign In</Link>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
