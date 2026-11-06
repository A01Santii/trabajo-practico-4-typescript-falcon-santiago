export {};

// Tipos en parámetros y en el retorno
function sumar(a: number, b: number): number {
    return a + b;
}

// Parámetro opcional (?)
function saludar(nombre: string, apellido?: string): string {
    return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}

// Parámetro por defecto
function crear(nombre: string, rol: string = "USER"): void {
    console.log(`Usuario ${nombre} con rol ${rol}`);
}

// Arrow function
const multiplicar = (a: number, b: number): number => a * b;

console.log(sumar(2, 3));
console.log(saludar("Ana"));
console.log(saludar("Ana", "Pérez"));
crear("Luis");
crear("Marta", "ADMIN");
console.log(multiplicar(4, 5));