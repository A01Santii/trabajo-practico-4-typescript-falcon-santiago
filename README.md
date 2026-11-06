# TP Integrador 4: Investigación de TypeScript

Alumno: Falcón Santiago

## Tema 1: ¿Qué es TypeScript?

**¿Qué es TypeScript y quién lo desarrolla?**
Es un superconjunto de JavaScript desarrollado por Microsoft que agrega tipado estático opcional. Todo código JavaScript válido también es TypeScript válido.

**¿Qué diferencias tiene con JavaScript?**
- TypeScript tiene tipos y JavaScript no los verifica.
- El código TypeScript se convierte en JavaScript puro antes de ejecutarse.
- Los tipos existen solo mientras se escribe el código; en ejecución ya no existen.
- TypeScript avisa de los errores, pero no impide ejecutar el programa.

**¿Qué ventajas ofrece?**
- Detecta errores mientras se escribe el código, antes de ejecutarlo.
- Mejora el autocompletado y la refactorización en el editor.
- Hace el código más mantenible y escalable.
- Los tipos funcionan como documentación del propio código.

**¿Cuál es su versión actual?**
La versión actual es TypeScript 7.0, que salió en julio de 2026. Es una reescritura completa del compilador en Go y es unas 10 veces más rápida. Ya hay una beta de la 7.1 (octubre de 2026). La versión instalada en un proyecto se ve con `npx tsc -v`.

## Tema 2: Crear y ejecutar un proyecto

**¿Cómo se instala TypeScript en un proyecto?**
Se recomienda la instalación local: `npm i -D typescript`. Queda guardado en `devDependencies` del `package.json`, y quien clone el proyecto y ejecute `npm install` obtiene la misma versión. `-D` es la abreviatura de `--save-dev` e indica que es una herramienta de desarrollo. También existe la instalación global (`npm install -g typescript`), pero no queda registrada en el `package.json`.

**¿Para qué sirve el archivo tsconfig.json?**
Es el archivo de configuración del proyecto. Le indica a TypeScript:
1. Qué archivos forman el proyecto (`include`).
2. Qué tan estricto debe ser al verificar tipos (`strict`).
3. Cómo generar el JavaScript: versión (`target`), sistema de módulos (`module`) y carpeta de salida (`outDir`).

**¿Qué hace el comando tsc?**
`tsc` es el compilador de TypeScript (TypeScript Compiler). Sin argumentos busca el `tsconfig.json`, toma los archivos de `include`, verifica los tipos, muestra los errores y genera los archivos `.js` en `outDir`. Con `npx tsc --noEmit` solo verifica los tipos, sin generar archivos.

**¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?**

- `tsc`: Compila el archivo TypeScript a un archivo JavaScript (no lo ejecuta directamente por sí solo, solo genera el `.js`).

- `node`: Ejecuta código JavaScript plano (si intentas pasarle un archivo `.ts` directamente, Node fallará a menos que uses configuraciones experimentales o banderas especiales).

- `tsx`: Es una herramienta moderna de desarrollo que permite ejecutar archivos TypeScript de forma directa al vuelo, compilando en memoria sin necesidad de generar archivos `.js` intermedios manualmente.

## Tema 3: Tipos básicos

**¿Qué son los tipos string, number y boolean?**
Son los tipos primitivos. `string` es texto, `number` es cualquier número y `boolean` es verdadero o falso (`true` y `false`).

**¿Cómo se declara un array con tipo?**
Un array se declara con el tipo seguido de corchetes: `let numeros: number[] = [1, 2, 3];`

**¿Qué es un tipo unión?**
Es una variable que puede ser de uno u otro tipo, separados con `|`: `let id: string | number = "ABC123";`

**¿Por qué se recomienda evitar any?**
Porque `any` desactiva la verificación de tipos: no da error al escribir, pero el programa falla al ejecutar. Cuando no se conoce el tipo de un valor se usa `unknown`, que obliga a verificar antes de usarlo.

## Tema 4: Funciones

**¿Cómo se indican los tipos de los parámetros?**
Se indican después del nombre del parámetro, con dos puntos: `function sumar(a: number, b: number)`. Con `strict`, los parámetros sin tipo dan error.

**¿Cómo se indica el tipo de retorno?**
El tipo de retorno se indica después de los paréntesis: `function sumar(a: number, b: number): number`. Si la función no devuelve nada se usa `void`.

**¿Qué es un parámetro opcional?**
Es un parámetro que se puede omitir al llamar la función. Se marca con `?`: `apellido?: string`. Dentro de la función su tipo es `string | undefined`, por eso hay que verificarlo antes de usarlo.

**¿Qué es un parámetro por defecto?**
Es un parámetro que toma un valor si no se le pasa ninguno: `rol: string = "USER"`.

## Tema 5: Interfaces y type

**¿Qué es una interfaz y para qué sirve?**
Una interfaz describe la forma de un objeto (sus propiedades y métodos). Sirve para estructuras de objetos y clases, sobre todo cuando se necesita `extends`. No existe en el JavaScript generado.

**¿Qué es un type?**
Un type es un alias que le pone nombre a un tipo. Sirve para uniones (`|`), intersecciones (`&`), tipos literales y alias de primitivos: `type ID = string | number;`

**¿Cómo se declara una propiedad opcional?**
Con `?` después del nombre de la propiedad: `edad?: number;`

**¿Cuándo conviene usar cada uno?**
- `interface`: estructuras de objetos y clases, sobre todo cuando se necesita `extends`.
- `type`: uniones, intersecciones, tipos literales y alias de primitivos.

