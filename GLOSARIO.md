# Glosario de TypeScript

## TypeScript
Superconjunto de JavaScript que agrega tipado estático opcional.
```ts
const saludo: string = "Hola";
```

## Tipo
Indica qué clase de valor puede guardar una variable.
```ts
let edad: number = 30;
```

## string
Tipo para texto.
```ts
let nombre: string = "Marcos";
```

## number
Tipo para cualquier número.
```ts
let precio: number = 99.5;
```

## boolean
Tipo que solo puede ser `true` o `false`.
```ts
let activo: boolean = true;
```

## Array
Lista de valores del mismo tipo.
```ts
let nombres: string[] = ["Ana", "Luis"];
```

## Tipo unión
Permite que un valor sea de uno u otro tipo.
```ts
let id: string | number = "ABC123";
```

## any
Desactiva la verificación de tipos. Se recomienda evitarlo.
```ts
let cualquierCosa: any = "texto";
```

## unknown
Acepta cualquier valor, pero obliga a verificar el tipo antes de usarlo.
```ts
let dato: unknown = "texto";
if (typeof dato === "string") {
  console.log(dato.toUpperCase());
}
```

## Parámetro opcional
Parámetro que se puede omitir al llamar la función. Se marca con `?`.
```ts
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}
```

## Parámetro por defecto
Parámetro que toma un valor si no se le pasa ninguno.
```ts
function crear(nombre: string, rol: string = "USER"): void {
  console.log(`${nombre} es ${rol}`);
}
```

## Interface
Describe la forma de un objeto.
```ts
interface Usuario {
  id: number;
  nombre: string;
  edad?: number;
}
```

## Type (alias)
Le pone nombre a un tipo. Sirve para uniones, intersecciones y tipos literales.
```ts
type ID = string | number;
```

## Enum
Conjunto de constantes con nombre. Se convierte en un objeto de JavaScript.
```ts
enum Estado {
  PENDIENTE = "PENDIENTE",
  COMPLETADO = "COMPLETADO",
}
```

## Tipo literal
Tipo que solo acepta valores exactos.
```ts
type Rol = "ADMIN" | "USER" | "GUEST";
let miRol: Rol = "USER";
```