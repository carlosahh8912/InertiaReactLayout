import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {

    return (
        <>
            <Head title="Bienvenido" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                Bienvenidos a ERP MAnager
            </div>
        </>
    );
}
