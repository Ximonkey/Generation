/*
- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista

*/


let n = 15;

if (n > 10) {
    console.log(true);
} else {
    console.log(false);
}

/*
if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
*/

let edad = 28;

if (edad < 18) {
    console.log("Sos pequeñín");
} else if (edad >= 18 && edad < 65) {
    console.log("Edad aceptable");
} else {
    console.log("Ancianillo");
}

/*
*Sentencia switch

*La sentencia switch es otro tipo de estructura de control de flujo, que, nuevamente se encuentra en diversos Lenguajes de programacion.

*Es bastante parecida al a la sentencia if-else, pero diferente en cuanto a comportamiento, ya que no se basa en una bifurcacion (particion de caminos), sino que se secciona en multiples casos (case) que, dependiendo de la expresion que cumplo con un caso especifico, sera la secuencia que se va a ejecutar, dentro de La declaración.

Declaracion:

se empieza por colocalr La palabra reservada switch, seguido de esto, colocamos parentesis () donde se debe colocar el valor que va indicar que sentencia/caso a ejecutar.

*Falta indicar el bloque de codigo que se limita a esta sentencia, como Lo haciamos en La sentencia if o con Las funciones.

"Dentro de este bloque de codigo, falta colocar Los casos para cada valor que se desee, establecer segun sea el valor indicado dentro de el parentesis ().

"Cada uno de estos casos se separa de La siguiente manera:
* case valor: instrucción a ejecutar si el valor empata con este caso.

*Despues, para indicar que la ejecución de las sentencias debe cortarse cuando se cumpla, se coloca la instruccion "break.

*Cuando terminemos de establecer los casos que necesitemos declara, dentro de nuestra sentencia, debemos colocar un valor por defecto, default.

* Esta ultima sentencia nos permite establecer un valor por defecto, si es que este valor colocaldo no empata con ningun otro dentro de la sentencia o en ninguno de los casos.
* default: mensaje no disponible.

*/

let dia = 'martes';
switch (dia) {
    case "lunes":
        console.log("Odio los luneas att: Garfield");
    break;
    case "martes":
        console.log("Apenas es martes");
    break;
    case "miércoles":
        console.log("Ombligo de semana");
    break;
    case "jueves":
        console.log("Shrek da clase los jueves");
    break;
    case "viernes":
        console.log("Viernes 2x1 en el pollo loco");
    break;
    case "sábado":
        console.log("Sabadrink");
    break;
    case "domingo":
        console.log("Domingo de misa de 10");
    break;
    default:
        console.log("Error");
    break;
}

/*
Operdador ternario

Expresion condicional if-else mas simple y legible

"Principalmente se usa para simplificar condiciones de una sola expresión.

tambien puede anidar sentencias if-else-if, sin embargo, no es recomendado porque el codigo se puede volver confuso y poco Legible.

"Su declaración es la siguiente:

"Palabra reservada var, let o const:

*se le asigna un nombre como si se tratara de una variable, operador de asignación "-", seguido de este operador, hay que colocar una expresión Logica, esta va dentro de un parentesis (), despues hay que colocar un carater ? que indica el camino a seguir, dependiendo de si, se cumple (o no) La expreson. "Para separa el resultado true de false debemos agregar un caracter de, del lado izquierdo se coloca la sentencia a ejecutar.

Si se cumple La condición, del Lado derecho se coloca La sentencia a ejecutar
*/

//Ejemplo de operador terniario
let verificacion = n > 5 ? "Si es mayor" : "No es mayor" 
console.log(verificacion);

/*
Cuando usar if-else u cuando switch
if-else: cuando necesitamos tomar decesiones bajo condiciones mas flexibles
switch: cuando tengamos un conjunto fijo de valores para comparar una expresión.
*/