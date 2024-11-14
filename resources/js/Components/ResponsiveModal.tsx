// import { useMedia } from "react-use";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Drawer, DrawerContent, DrawerTitle } from "./ui/drawer";

interface ResponsiveModalProps {
    children: React.ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const ResponsiveModal = ({
    children,
    open,
    onOpenChange,
}: ResponsiveModalProps) => {
    const [isDesktop, setIsDesktop] = useState(
        document.body.clientWidth > 768 ? true : false
    );

    window.addEventListener("resize", function (event) {
        setIsDesktop(document.body.clientWidth > 768 ? true : false);
    });

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent className="w-full sm:max-w-lg p-0 border-none overflow-y-auto hide-scrollbar max-h-[85vh]">
                    <DialogTitle className="hidden"></DialogTitle>
                    {children}
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerTitle className="hidden"></DrawerTitle>
            <DrawerContent>
                <div className="w-full sm:max-w-2xl p-0 border-none overflow-y-auto hide-scrollbar max-h-[85vh]">
                    {children}
                </div>
            </DrawerContent>
        </Drawer>
    );
};
