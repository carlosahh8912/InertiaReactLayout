import { Head, Link } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import PasswordInput from "@/Components/ui/input-password";

const title = "Perfiles";

const Index = () => {
    return (
        <AuthenticatedLayout header={title}>
            <Head title={title} />

            <div className="">
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>
                                <h1 className="text-3xl font-bold tracking-tight">
                                    {title}
                                </h1>
                            </CardTitle>
                            <Button asChild>
                                <Link href={route("usuarios.create")}>
                                    Nuevo Perfil
                                </Link>
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="py-7">
                        {/* <DataTable columns={ColumnsUsuario} data={roles} /> */}

        <PasswordInput  />
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
