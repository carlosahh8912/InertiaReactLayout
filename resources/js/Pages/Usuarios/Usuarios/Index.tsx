import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";

export default function Index() {
    return (
        <AuthenticatedLayout header={<h2>Usuarios</h2>}>
            <Head title="Usuarios" />

            <div className="">
                {/* Your dashboard content */}

                <Card>
                    <CardHeader>

                        <div className="flex items-center justify-between">
                        <CardTitle><h1 className="text-3xl font-bold tracking-tight">Usuarios</h1></CardTitle>
                            <Button>Nuevo usuario</Button>
                        </div>
                    </CardHeader>
                    <CardContent className="py-7">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Rol</th>
                                    <th>Estatus</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                        </table>

                        {/* Your table content */}
                    </CardContent>
                </Card>
            </div>

        </AuthenticatedLayout>
    );
}
