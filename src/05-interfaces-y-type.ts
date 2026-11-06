export {};

// Interface con propiedad opcional (?)
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    edad?: number; // Opcional
}

const user: Usuario = {
    id: 1,
    nombre: "María",
    email: "maria@example.com",
};
console.log(user);
console.log("Edad (opcional):", user.edad);

// Extender una interface
interface Empleado extends Usuario {
    legajo: string;   
}

const empleado: Empleado = {
    id: 2,
    nombre: "Juan",
    email: "juan@example.com",
    edad: 28,
    legajo: "A-100",
};
console.log(empleado);

// Type para objetos, con propiedad opcional
type Coordenada = {
    x: number;
    y: number;
    z?: number;
};

const punto: Coordenada = { x: 10, y: 20 };
console.log(punto);

// Type para uniones (algo que interface no hace)
type ID = string | number;
const idUsuario: ID = "ABC123";
const idProducto: ID = 456;
console.log(idUsuario, idProducto);