import { useState } from "react";

import { Button, type ButtonProps } from "@/Components/ui/button";
import { ResponsiveModal } from "@/Components/ResponsiveModal";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { InfoIcon, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const useConfirm = (
    title: string,
    message: string,
    variant: ButtonProps["variant"] = "default",
    DialogIcon: LucideIcon = InfoIcon,
    iconClass?: string
): [() => JSX.Element, () => Promise<unknown>] => {
    const [promise, setPromise] = useState<{
        resolve: (value: boolean) => void;
    } | null>(null);

    const confirm = () =>
        new Promise((resolve) => {
            setPromise({ resolve });
        });

    const handleClose = () => setPromise(null);

    const handleConfirm = () => {
        promise?.resolve(true);
        handleClose();
    };

    const handleCancel = () => {
        promise?.resolve(false);
        handleClose();
    };

    const ConfirmationDialog = () => (
        <ResponsiveModal open={promise !== null} onOpenChange={handleClose}>
            <Card className="w-full h-full border-none shadow-none">
                <CardContent className="pt-8">
                    <CardHeader className="p-0 flex flex-row items-center">
                        <div className="mr-5">
                            <DialogIcon className={cn("size-12", iconClass)} />
                        </div>
                        <div className="p-0">
                            <CardTitle>{title}</CardTitle>
                            <CardDescription>{message}</CardDescription>
                        </div>
                    </CardHeader>
                    <div className="pt-4 w-full flex flex-col gap-y-2 md:flex-row gap-x-2 items-center justify-end">
                        <Button
                            onClick={handleCancel}
                            variant="outline"
                            className="w-full md:w-auto"
                        >
                            Cancelar
                        </Button>
                        <Button
                            onClick={handleConfirm}
                            variant={variant}
                            className="w-full md:w-auto"
                        >
                            Confirmar
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </ResponsiveModal>
    );

    return [ConfirmationDialog, confirm];
};
