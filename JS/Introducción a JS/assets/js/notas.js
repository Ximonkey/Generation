/*Tipos de Datos
> - String (cadena de texto)
> - Number (númericos)
> - Booleans (booleanos)
> - Null (nulos)
> - Undefined (indefinidos)
> - Objects (objetos)
> - Arrays (arreglos)

*/
/*
console.log();  Nos permite visualizar el código en la consola del navegador.
console.warn(); Muestra un mensaje de advertencia.
console.error(); Muestra un mensaje de error.
console.table();
*/

let firstName;
firstName = 'Ximena';
let lastName = 'Muñoz';

console.log(firstName + " " + lastName);

/*ECMAScript 6 (ES6). Interpolación de cadenas
> - backstics `` (AltGR + })
> - Las variables se invocan como: ${variable}
> - Texto para string
*/

let age = 20;
console.log(`Mi nombre es ${firstName},
mia pellido es ${lastName}
y tengo ${age} años`);

//console.warn();
console.warn(`Precaución, no es buena práctica dejar sin punto y coma`);
//console.error();
console.error(`Status 404: Failed`);

/*Array o arreglo es un tipo de dato que almacena una colección de elementos de manera ordenada.
> - Se pueden manipular mediante métodos.
> - Los elementos (índices) empiezan por índice 0.
> - Posee n cantidad de elementos.
> - Se declaran como variables, seguido del signo igual y corchetes.
*/
 let arreglo1 = []; //Array vacío
 console.log(`Array vacío ${arreglo1}`);
 // Los elementos de un array se separan mediante comas
 let colors = ['blue', 'pink', 'red', 'yellow' ]; //Array de string
 console.log(`Array de String ${colors}`);
 //La longitud es el numero de elementos que contiene el array. el inidice es la posición que tiene un elemento
 console.log(typeof(cars)); //Output: object

 //Array de Numbers
let salariosMxn = [15200, 8000, 12000, 6700, 12500, 20000];
console.log(salariosMxn.length); //Output: 
console.log(`Array de numeros ${salariosMxn}`)

/*
Objetos. Son tipos de datos en JS, con una estructura definida que almacena informaciòn mediante llaves (claves) y valores.
Su sintaxis es la siguiente:
const object = {
    clave1: valor1 (dato1),
    clave2: valor2 (dato2),
}
Los objetos pueden almacenar diferentes tipos de valores
*/

const employee = {
    firstName: "Rey David",
    lastName: "Martínez",
    age:29,
    country: "México"
}
console.log(employee);

//Mostrando mi array como tabla
console.table(cars);
//Mostrando mi objeto como tabla
console.table(employee);