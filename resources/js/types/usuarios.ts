interface UsuarioProps {
    id: string;
    name: string;
    email: string;
    role: string;

    // estatus: string;
}

interface UsuariosProps {
    usuario: [UsuarioProps];
    length: any;
    map: any;
    contat: any;
    push: any;
}

interface RoleProps {
    id: string;
    name: string;
}

interface RolesProps {
    role: [RoleProps];
    length: any;
    map: any;
    contat: any;
    push: any;
}
