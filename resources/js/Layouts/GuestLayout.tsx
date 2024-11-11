import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="w-full h-full min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-black dark:bg-zinc-900">
            <div className="col-span-1 h-full lg:block hidden">
                <div className="h-full w-full px-20 py-10 flex flex-col justify-between">
                    <div className="flex gap-4 items-center">
                        <ApplicationLogo width={200} hanging={102} />
                    </div>
                    <div className="font-semibold text-lg text-justify text-white dark">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sed nesciunt labore sapiente recusandae temporibus
                        perferendis voluptates aut aliquam veniam optio suscipit
                        itaque, ab laborum iste. Sequi consectetur dicta optio
                        numquam.
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-black col-span-1 flex items-center justify-center h-full">
                <div className="lg:w-[60%]">{children}</div>
            </div>
        </div>
    );
}
