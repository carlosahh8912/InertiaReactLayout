import Navbar from "@/Components/Navbar";
import { SidebarInset, SidebarProvider } from "@/Components/ui/sidebar";
import Sidebar from "@/Components/Sidebar";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode } from "react";
import reactUseCookie from "react-use-cookie";
import { ScrollArea } from "@/Components/ui/scroll-area";

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;
    const [defaultOpen, setDefaultOpen, removeDefaultOpen] = reactUseCookie(
        "sidebar:state",
        "true"
    );

    return (
        <SidebarProvider defaultOpen={JSON.parse(defaultOpen)}>
            <Sidebar />
            <SidebarInset>
                <Navbar />
                <ScrollArea>
                    <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
                </ScrollArea>
            </SidebarInset>
        </SidebarProvider>
    );
}
