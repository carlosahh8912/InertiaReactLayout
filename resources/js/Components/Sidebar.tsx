import { Link } from "@inertiajs/react";
import {
    Sidebar,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "./ui/sidebar";
import SidebarNavigation from "./SidebarNavigation";
import UserButton from "./UserButton";

const SidebarLayout = () => {
    return (
        <Sidebar variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={route("dashboard")}>
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    M
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">
                                        Manager
                                    </span>
                                    <span className="truncate text-xs">
                                        ERP
                                    </span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarNavigation />
            <SidebarFooter>
                <UserButton sidebar />
            </SidebarFooter>
        </Sidebar>
    );
};

export default SidebarLayout;
