import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

const Create = () => {
    return (
        <AuthenticatedLayout header={<h2>Usuarios</h2>}>
            <Head title="Usuarios" />

            <div className="">
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>
                                <h1 className="text-3xl font-bold tracking-tight">
                                    Nuevo usuario
                                </h1>
                            </CardTitle>
                            {/* <Button>Nuevo usuario</Button> */}
                        </div>
                    </CardHeader>
                    <CardContent className="py-7">

                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
