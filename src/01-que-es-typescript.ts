//  Cada archivo se empieza con export {}, asi no dan error de variables repetidas
export {};

// TypeScript es JavaScript con tipos opcionales
const lenguaje: string = "TypeScript";
const creador: string = "Microsoft";
const version: number = 7;

console.log(`${lenguaje} es desarrollo por ${creador}`);
console.log(`Versión actual: ${version}`);

// Todo código JavaScript válido también es TypeScript válido
const suma = 2 + 3;
console.log("Suma (JavaScript válido en TypeScript):", suma);

// Los tipos existen solo al escribir el código
// let edad: number = "treinta"; // Error en el editor y en tsc
const edad: number = 30;
console.log(edad.toFixed(2));