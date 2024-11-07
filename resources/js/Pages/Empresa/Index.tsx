import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Index = () => {
    return (
        <AuthenticatedLayout>
            <Card className="h-screen">
                <CardHeader>
                    <CardTitle>
                        <h1 className="text-xl font-bold">Empresa</h1>
                    </CardTitle>
                </CardHeader>
                <CardContent>Aqui van las cosas</CardContent>
            </Card>
        </AuthenticatedLayout>
    );
};

export default Index;
