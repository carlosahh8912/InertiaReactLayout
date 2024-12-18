import Navbar from "@/Components/Navbar";
import { SidebarInset, SidebarProvider } from "@/Components/ui/sidebar";
import Sidebar from "@/Components/Sidebar";
import { usePage } from "@inertiajs/react";
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
        <div className="min-h-screen">
            <SidebarProvider className="" defaultOpen={JSON.parse(defaultOpen)}>
                <Sidebar />
                <SidebarInset>
                    <Navbar />
                    {/* <ScrollArea> */}
                        <main className="mx-auto max-w-screen-2xl sm:p-8 pt-6 w-full h-full">
                            {children}
                        </main>
                    {/* </ScrollArea> */}
                </SidebarInset>
            </SidebarProvider>
        </div>
    );
}
