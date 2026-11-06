export {};

// string, number y boolean
const nombre: string = "Marcos";
const edad: number = 30;
const activo: boolean = true;
console.log(nombre, edad, activo);

// Arrays con tipo
const numeros: number[] = [1, 2, 3];
const nombres: string[] = ["Ana", "Luis"];
console.log(numeros, nombres);

// Tipo unión
let id: string | number = "ABC123";
console.log("id:", id);
id = 456;
console.log("id:", id);

// Unión con null: hay que verificar antes de usar
function largoTexto(texto: string | null): number {
    if (texto !== null) {
    return texto.length;
    }
    return 0;
}
console.log(largoTexto("Formosa"));
console.log(largoTexto(null));

// any: desactiva la verificación (evitar)
let cualquierCosa: any = "texto";
cualquierCosa = 42;
console.log("any:", cualquierCosa);

// unknown: obliga a verificar antes de usarlo
const dato: unknown = "texto";
if (typeof dato === "string") {
    console.log("unknown:", dato.toUpperCase());
}