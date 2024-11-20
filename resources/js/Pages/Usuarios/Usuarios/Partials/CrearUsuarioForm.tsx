import { ResponsiveModal } from "@/Components/ResponsiveModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Separator } from "@/Components/ui/separator";

const CrearUsuarioForm = ({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) => {
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
                        <form className="space-y-4 w-full">
                            <div className="">
                                <Input
                                    placeholder="Nombre del usuario"
                                    required
                                />
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    placeholder="Correo del usuario"
                                    required
                                />
                            </div>
                            <div>
                                <Input
                                    type="password"
                                    placeholder="Contraseña"
                                    required
                                />
                            </div>
                            <div>
                                <Input
                                    type="password"
                                    placeholder="Confirmar contraseña"
                                    required
                                />
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </ResponsiveModal>
        </div>
    );
};

export default CrearUsuarioForm;
