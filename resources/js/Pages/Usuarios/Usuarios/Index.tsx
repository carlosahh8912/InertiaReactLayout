import { Head, Link, useForm } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";

import { useConfirm } from "@/hooks/use-confirm";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { Button } from "@/Components/ui/button";
import { DataTable } from "@/Components/DataTable";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { DataTableColumnHeader } from "@/Components/DataTableColumHeader";
import Checkbox from "@/Components/Checkbox";

import { MoreHorizontalIcon, TriangleAlert } from "lucide-react";
import { toast } from "sonner";
import CrearUsuarioForm from "./Partials/CrearUsuarioForm";
import { useState } from "react";

interface UsuariosIndexPageProps {
    usuarios: UsuariosProps;
    roles: RolesProps;
}

export default function Index({ usuarios, roles }: UsuariosIndexPageProps) {
    const [openModal, setOpenModal] = useState(false);

    const {
        delete: deleteUser,
        processing: deletingUser,
        errors: deleteErrors,
    } = useForm();

    const [DeleteDialog, confirmDelete] = useConfirm(
        "Eliminar Usuario",
        "¿Seguro que quieres Eliminar este usuario?",
        "destructive",
        TriangleAlert,
        "text-red-400"
    );

    const handleDelete = async (usuario: string) => {
        const confirm = await confirmDelete();
        if (!confirm) return;

        deleteUser(route("usuarios.destroy", usuario), {
            onSuccess: () => toast.success("El Usuario se elimino"),
            onError: (error) => {
                const keys = Object.keys(error);
                const message = error[keys[0]];
                toast.error("Error al eliminar el usuario", {
                    description: message,
                });
            },
        });
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
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Correo" />
            ),
        },
        {
            accessorKey: "role",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Perfil" />
            ),
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


            <div className="h-full flex-1 flex-col space-y-2 p-8 md:flex">
                <Card className="">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>
                                <h1 className="text-3xl font-bold tracking-tight">
                                    Usuarios
                                </h1>
                            </CardTitle>
                            <Button onClick={() => setOpenModal(true)}>
                                Nuevo Usuario
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="py-7">
                        <DataTable
                            columns={ColumnsUsuario}
                            data={usuarios}
                            toolbarData={roles}
                        />

                    </CardContent>
                </Card>
            </div>

            <CrearUsuarioForm open={openModal} onOpenChange={setOpenModal} />
        </AuthenticatedLayout>
    );
}
