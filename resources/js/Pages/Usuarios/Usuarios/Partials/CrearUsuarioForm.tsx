import { FormEventHandler } from "react";

import { useForm, usePage } from "@inertiajs/react";

import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Separator } from "@/Components/ui/separator";
import PasswordInput from "@/Components/ui/input-password";
import { ResponsiveModal } from "@/Components/ResponsiveModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { toast } from "sonner";
import InputError from "@/Components/InputError";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

const CrearUsuarioForm = ({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) => {
    const { roles } = usePage().props;

    const { post, data, setData, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "",
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("usuarios.store"), {
            onSuccess: (data) => {
                toast.success("Usuario creado correctamente");
                handleCancel();
            },
            onError: (error) => {
                const keys = Object.keys(error);
                const message = error[keys[0]];
                toast.error("Error al crear el usuario", {
                    description: message,
                });
            },
        });
    };

    const handleCancel = () => {
        reset();
        onOpenChange(false);
    };

    return (
        <div className="w-full">
            <ResponsiveModal open={open} onOpenChange={onOpenChange}>
                <Card className="w-full h-full border-none shadow-none">
                    <CardHeader className="p-7">
                        <CardTitle className="text-xl font-bold">
                            Crear Usuario
                        </CardTitle>
                    </CardHeader>
                    <div className="px-7">
                        <Separator />
                    </div>
                    <CardContent className="p-7">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 w-full"
                        >
                            <div className="">
                                <Input
                                    disabled={processing}
                                    id="name"
                                    name="name"
                                    placeholder="Nombre del usuario"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Correo del usuario"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    disabled={processing}
                                    required
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <PasswordInput
                                    disabled={processing}
                                    id="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <PasswordInput
                                    disabled={processing}
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    placeholder="Confirmar contraseña"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <Select
                                    name="role"
                                    defaultValue={data.role}
                                    onValueChange={(e) => setData("role", e)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecciona un perfil" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {roles.map((role: RoleProps) => (
                                            <SelectItem
                                                key={role.id}
                                                value={role.id}
                                            >
                                                {role.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError
                                    message={errors.role}
                                    className="mt-2"
                                />
                            </div>
                            <div className="pt-4 w-full flex flex-col gap-y-2 md:flex-row gap-x-2 items-center justify-end">
                                <Button
                                    type="button"
                                    variant="secondary"
                                    className="w-full md:w-auto"
                                    onClick={() => handleCancel()}
                                    disabled={processing}
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    type="submit"
                                    variant="default"
                                    className="w-full md:w-auto"
                                    disabled={processing}
                                >
                                    Crear Usuario
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </ResponsiveModal>
        </div>
    );
};

export default CrearUsuarioForm;
