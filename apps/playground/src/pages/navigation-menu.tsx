import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@kumix/ui";
import { Page, Sample } from "../showcase";

export function NavigationMenuPage() {
  return (
    <Page title="Navigation Menu" description="Site navigation with dropdown panels.">
      <Sample title="Basic">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent className="p-3 text-sm">
                <NavigationMenuLink href="#">Overview</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Sample>
    </Page>
  );
}
