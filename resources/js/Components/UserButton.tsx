import {
    Bell,
    ChevronsUpDown,
    CreditCard,
    LogOut,
    Sparkles,
    User,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link, usePage } from "@inertiajs/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SidebarMenuButton } from "./ui/sidebar";

const UserButton = ({ sidebar = false }: { sidebar: boolean }) => {
    const user = usePage().props.auth.user;
    const avatarFallback = user.name
        ? user.name.charAt(0).toUpperCase()
        : user.email.charAt(0).toUpperCase() ?? "U";

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {sidebar ? (
                    <SidebarMenuButton
                        size="lg"
                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                        <Avatar className="h-10 w-10 border border-neutral-300 dark:border-neutral-700">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback className="bg-neutral-200 text-xl font-medium text-neutral-500 dark:bg-neutral-700 flex items-center justify-center">
                                {avatarFallback}
                            </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">
                                {user.name}
                            </span>
                            <span className="truncate text-xs">
                                {user.email}
                            </span>
                        </div>
                        <ChevronsUpDown className="ml-auto size-4" />
                    </SidebarMenuButton>
                ) : (
                    <div className="cursor-pointer">
                        <Avatar className="h-10 w-10 border border-neutral-300 dark:border-neutral-700">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback className="bg-neutral-200 text-xl font-medium text-neutral-500 dark:bg-neutral-700 flex items-center justify-center">
                                {avatarFallback}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                )}
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
            >
                <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="h-10 w-10 border border-neutral-300 dark:border-neutral-700">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback className="bg-neutral-200 text-xl font-medium text-neutral-500 dark:bg-neutral-700 flex items-center justify-center">
                                {avatarFallback}
                            </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">
                                {user.name}
                            </span>
                            <span className="truncate text-xs">
                                {user.email}
                            </span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Sparkles />
                        Upgrade to Pro
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href={route("profile.edit")} className="flex items-center w-full">
                        <User />
                        Perfil
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CreditCard />
                        Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Bell />
                        Notifications
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="cursor-pointer">
                    <Link
                        className="w-full  h-full flex items-center"
                        href={route("logout")}
                        method="post"
                        as="button"
                    >
                        <LogOut />
                        Log out
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserButton;
