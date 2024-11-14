import { Head } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/Components/ui/button";
import { DataTable } from "@/Components/DataTable";
import { useConfirm } from "@/hooks/use-confirm";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

import { MoreHorizontalIcon, TriangleAlert } from "lucide-react";
import { DataTableColumnHeader } from "@/Components/DataTableColumHeader";

interface UsuarioProps {
    id: string;
    name: string;
    email: string;
    role: string;
    // estatus: string;
}

interface UsuariosIndexPageProps {
    usuarios: UsuarioProps;
}

export default function Index({ usuarios }: UsuariosIndexPageProps) {
    const [DeleteDialog, confirmDelete] = useConfirm(
        "Eliminar Usuario",
        "¿Seguro que quieres Eliminar este usuario?",
        "destructive",
        TriangleAlert,
        "text-red-400"
    );

    const handleDelete = (usuario: string) => {
        const confirm = confirmDelete();
        if (!confirm) return;
    };

    const ColumnsUsuario: ColumnDef<UsuarioProps>[] = [
        {
            accessorKey: "name",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Nombre" />
            ),
        },
        {
            accessorKey: "email",
            header: "Correo",
        },
        {
            accessorKey: "role",
            header: "Perfil",
        },
        {
            id: "actions",
            header: () => <div className="text-center">Aciones</div>,
            cell: ({ row }) => {
                const user = row.original;

                return (
                    <div className="flex items-center justify-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Menu</span>
                                    <MoreHorizontalIcon className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Aciones</DropdownMenuLabel>
                                <DropdownMenuItem>Perfil</DropdownMenuItem>

                                <DropdownMenuItem
                                    onClick={() => console.log(user.id)}
                                >
                                    Editar Usuario
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => handleDelete(user.id)}
                                    className="text-red-600 dark:text-red-800 cursor-pointer"
                                >
                                    Eliminar Usuario
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                );
            },
        },
    ];

    return (
        <AuthenticatedLayout header={<h2>Usuarios</h2>}>
            <Head title="Usuarios" />

            <DeleteDialog />

            <div className="">
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>
                                <h1 className="text-3xl font-bold tracking-tight">
                                    Usuarios
                                </h1>
                            </CardTitle>
                            <Button>Nuevo usuario</Button>
                        </div>
                    </CardHeader>
                    <CardContent className="py-7">
                        <DataTable columns={ColumnsUsuario} data={usuarios} />

                        {/* Your table content */}
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
