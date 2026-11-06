export {};

// Enum (se convierte en un objeto de JavaScript)
// Funciona con tsx y tsc, pero NO con "node archivo.ts"
enum Estado {
    PENDIENTE = "PENDIENTE",
    COMPLETADO = "COMPLETADO",
    CANCELADO = "CANCELADO",
}

let estadoTarea: Estado = Estado.PENDIENTE;
console.log("Estado inicial:", estadoTarea);
estadoTarea = Estado.COMPLETADO;
console.log("Estado nuevo:", estadoTarea);

// Tipo literal (desaparece al compilar)
type Rol = "ADMIN" | "USER" | "GUEST";

function describirRol(rol: Rol): string {
    return `El rol es ${rol}`;
}

const miRol: Rol = "USER";
console.log(describirRol(miRol));
// const malRol: Rol = "SUPERADMIN"; // Error: no es un valor permitido