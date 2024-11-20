import {
    Cog,
    LayoutDashboard,
    Users,
    LucideIcon,
    Calendar,
    HelpCircle,
    MessagesSquare,
    UsersRound,
    CircleDollarSign,
    PackageOpen,
    CreditCard,
    HandCoins,
    ShoppingBag,
    Files,
    Printer,
} from "lucide-react";

export interface MenuProps {
    title: string;
    items: ItemsProps[];
}

export interface ItemsProps {
    title: string;
    icon: LucideIcon;
    href?: any;
    component?: any;
    items?: SubItemProps[];
}

export interface SubItemProps {
    title: string;
    href: string;
    component?: any;
}

export const Menu = [
    {
        title: "Inicio",
        items: [
            {
                title: "Dashboard",
                icon: LayoutDashboard,
                href: "dashboard",
            },
            {
                title: "Clientes",
                icon: UsersRound,
                items: [
                    {
                        title: "Clientes",
                        href: "test",
                    },
                    {
                        title: "Prospectos",
                        href: "test",
                    },
                    {
                        title: "Campañas",
                        href: "test",
                    },
                    {
                        title: "Pagos",
                        href: "test",
                    },
                    {
                        title: "Cuentas x Cobrar",
                        href: "test",
                    },
                    {
                        title: "Conceptos de CxC",
                        href: "test",
                    },
                ],
            },
            {
                title: "Ventas",
                icon: CircleDollarSign,
                items: [
                    {
                        title: "Cotizaciones",
                        href: "test",
                    },
                    {
                        title: "Pedidos",
                        href: "test",
                    },
                    {
                        title: "Ventas",
                        href: "test",
                    },
                    {
                        title: "Facturas",
                        href: "test",
                    },
                    {
                        title: "Devoluciones",
                        href: "test",
                    },
                    {
                        title: "Notas de crédito",
                        href: "test",
                    },
                    {
                        title: "Recibos de pago",
                        href: "test",
                    },
                    {
                        title: "Vendedores",
                        href: "test",
                    },
                    {
                        title: "Comisiones",
                        href: "test",
                    },
                ],
            },
            {
                title: "Almacen",
                icon: PackageOpen,
                items: [
                    {
                        title: "Catálogo",
                        href: "test",
                    },
                    {
                        title: "Almacenes",
                        href: "test",
                    },
                    {
                        title: "Inventarios",
                        href: "test",
                    },
                    {
                        title: "Conceptos de movimientos al inventario",
                        href: "test",
                    },
                    {
                        title: "Movimientos al inventario",
                        href: "test",
                    },
                    {
                        title: "Kardex",
                        href: "test",
                    },
                    {
                        title: "Marcas",
                        href: "test",
                    },
                    {
                        title: "Categorías",
                        href: "test",
                    },
                    {
                        title: "Código de barras",
                        href: "test",
                    },
                    {
                        title: "Listas de precios",
                        href: "test",
                    },
                    {
                        title: "Unidades de medida",
                        href: "test",
                    },
                ],
            },
            {
                title: "Compras",
                icon: HandCoins,
                items: [
                    {
                        title: "Proveedor",
                        href: "test",
                    },
                    {
                        title: "Requisiciónes",
                        href: "test",
                    },
                    {
                        title: "Orden de Compra",
                        href: "test",
                    },
                    {
                        title: "Recepciones",
                        href: "test",
                    },
                    {
                        title: "Cuentas x Pagar",
                        href: "test",
                    },
                    {
                        title: "Conceptos de CxP",
                        href: "test",
                    },
                ],
            },
            {
                title: "Punto de Venta",
                icon: CreditCard,
                href: "test",
            },
            {
                title: "B2B",
                icon: ShoppingBag,
                items: [
                    {
                        title: "Pedidos",
                        href: "test",
                    },
                    {
                        title: "Productos",
                        href: "test",
                    },
                    {
                        title: "Pagos",
                        href: "test",
                    },
                    {
                        title: "Envios",
                        href: "test",
                    },
                    {
                        title: "Reseñas",
                        href: "test",
                    },
                    {
                        title: "Cupones",
                        href: "test",
                    },
                    {
                        title: "Etiquetas",
                        href: "test",
                    },
                ],
            },
            {
                title: "Reportes",
                icon: Printer,
                items: [
                    {
                        title: "Clientes",
                        href: "test",
                    },
                    {
                        title: "Productos",
                        href: "test",
                    },
                    {
                        title: "Compras",
                        href: "test",
                    },
                    {
                        title: "Ventas",
                        href: "test",
                    },
                ],
            },
            {
                title: "Documentos",
                icon: Files,
                items: [
                    {
                        title: "Conciliación",
                        href: "test",
                    },
                    {
                        title: "Desbloqueos",
                        href: "test",
                    },
                    {
                        title: "Folios",
                        href: "test",
                    },
                    {
                        title: "Corte Anual",
                        href: "test",
                    },
                ],
            },
        ],
    },
    {
        title: "Configuración",
        items: [
            {
                title: "Configuración",
                icon: Cog,
                items: [
                    {
                        title: "Herramientas",
                        href: "test",
                    },
                    {
                        title: "Empresa",
                        href: "test",
                    },
                    {
                        title: "Cajas",
                        href: "test",
                    },
                    {
                        title: "Facturas",
                        href: "test",
                    },
                    {
                        title: "B2B",
                        href: "test",
                    },
                    {
                        title: "Ecommerce",
                        href: "test",
                    },
                    {
                        title: "Moneda",
                        href: "test",
                    },
                    {
                        title: "Logs",
                        href: "test",
                    },
                ],
            },
            {
                title: "Usuarios",
                icon: Users,
                items: [
                    {
                        title: "Usuarios",
                        href: "usuarios.index",
                    },
                    {
                        title: "Permisos",
                        href: "perfiles.index",
                    },
                ],
            },
            {
                title: "Difusión",
                icon: MessagesSquare,
                items: [
                    {
                        title: "Alertas",
                        href: "test",
                    },
                    {
                        title: "Noticias",
                        href: "test",
                    },
                ],
            },
            {
                title: "Agenda",
                icon: Calendar,
                href: "profile.edit",
            },
            {
                title: "Ayuda",
                icon: HelpCircle,
                href: "profile.edit",
            },
        ],
    },
];
