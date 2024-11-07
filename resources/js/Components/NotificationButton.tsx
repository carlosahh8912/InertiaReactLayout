import { BellDotIcon, BellIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";

const NotificationButton = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <button className="flex items-center justify-center">
                    <BellIcon />
                    {/* <BellDotIcon className="text-green-600 dark:text-green-800" /> */}
                </button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    );
};

export default NotificationButton;
