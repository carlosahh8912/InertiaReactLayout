import { ChevronRight } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from "./ui/sidebar";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "./ui/collapsible";

import { Link } from "@inertiajs/react";
import { Menu, MenuProps } from "@/Utils/NavigationLinks";

const SidebarNavigation = () => {
    return (
        <SidebarContent>
            <ScrollArea>
                {Menu.map((sub: MenuProps) => (
                    <SidebarGroup key={sub.title}>
                        <SidebarGroupLabel>{sub.title}</SidebarGroupLabel>
                        <SidebarMenu>
                            {sub.items.map((item) => {
                                let isActive: boolean | undefined = false;

                                if (item.items) {
                                    const currentRoute = item.items.find(
                                        (subItem: any) =>
                                            subItem.href == route().current()
                                    );
                                    isActive = currentRoute && true;
                                }

                                return item.items ? (
                                    <Collapsible
                                        key={item.title}
                                        asChild
                                        defaultOpen={isActive}
                                        className="group/collapsible"
                                    >
                                        <SidebarMenuItem>
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton
                                                    isActive={isActive}
                                                    tooltip={item.title}
                                                    className="font-semibold"
                                                >
                                                    {item.icon && (
                                                        <item.icon
                                                            className={
                                                                isActive
                                                                    ? "dark:text-green-400 text-green-600"
                                                                    : ""
                                                            }
                                                        />
                                                    )}
                                                    <span>{item.title}</span>
                                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <SidebarMenuSub>
                                                    {item.items?.map(
                                                        (subItem: any) => (
                                                            <SidebarMenuSubItem
                                                                key={
                                                                    subItem.title
                                                                }
                                                            >
                                                                <SidebarMenuSubButton
                                                                    asChild
                                                                    isActive={route().current(
                                                                        subItem.href
                                                                    )}
                                                                >
                                                                    <Link
                                                                        href={route(
                                                                            subItem.href
                                                                        )}
                                                                    >
                                                                        <span>
                                                                            {
                                                                                subItem.title
                                                                            }
                                                                        </span>
                                                                    </Link>
                                                                </SidebarMenuSubButton>
                                                            </SidebarMenuSubItem>
                                                        )
                                                    )}
                                                </SidebarMenuSub>
                                            </CollapsibleContent>
                                        </SidebarMenuItem>
                                    </Collapsible>
                                ) : (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={route().current(
                                                item.href
                                            )}
                                        >
                                            <Link
                                                href={route(item.href)}
                                                className="font-semibold"
                                            >
                                                {item.icon && (
                                                    <item.icon
                                                        className={
                                                            route().current(
                                                                item.href
                                                            ) ?
                                                            "dark:text-green-400 text-green-600" : ""
                                                        }
                                                    />
                                                )}
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroup>
                ))}
            </ScrollArea>
            <SidebarRail />
        </SidebarContent>
    );
};

export default SidebarNavigation;
