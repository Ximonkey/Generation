// Comentario de una sola línea
/* Comentario de 
múltiples líneas */

// alert ("Hola mundo");
// console.log ("Este es un mensaje desde consola");

// var nombre = prompt("Ingresa tu nombre");
// alert("Hola, " + nombre + ". Bienvenido a la ch35");

// numero1 = parseInt (prompt('Ingresa el primer numero:'));
// numero2 = parseInt (prompt('Ingresa el segundo numero:'));

// console.log ("suma: "+(numero1 + numero2));
// console.log ("resta: "+(numero1 - numero2));
// console.log ("multiplicación: "+(numero1 * numero2));
// console.log ("división: "+(numero1 / numero2));

/*
var edad = prompt("Bienvenido al bar. Ingresa tu edad");

if (edad <18)  {
    alert("Bebecito, No puedes pasar");
}
if (edad >= 18 && edad <=65)  {
    alert("Eres mayor de 18 años y lo suficientemente cool para pasar, Adelante");
}
if (edad >65)  {
    alert("Demasiado viejo hermano, No puedes pasar");
}
*/

//Tipos de Datos Y Variables
//scope es el alcance de nuestras variables
/*
var, let y const 
var tiene un alcance global
let tiene un alcance local
const se mantiene sin nigun cambio
*/ 
/*
string: cadena de texto (lleva comillas)
number: numero
boolean; true/false
null:nulo
undefined:no está asignado o definido
*/
/*
Todas nuestras variables deben ser declaradas con mobres especificos y claros, sin espacios, no debe inicar con numero
*/

let nombre = 'Daniel';
let invitadosExtra = 2;
let mayorEdad = true;
let edad = 24;
let invitadoEspecial = null;
let horaSalida = undefined;

//console.log(nombre);
//document.write(nombre);

//Encasillamiento o tipado
/*Nos es util para el mantenimiento del código 
Legible
Fácil de entender
Prevenir errores
Mejor rendimiento
*/

let numero = 15;
let texto = "hola";

let numeroEncasillado= Number = 5;
let textoEncasillado = String = "Hola";

//typeof palabra resevada para identifacar el tipo de dato.

console.log(typeof(nombre));

let funcionNumber = console.log (typeof (nombre = Number));
metodoParseInt = console.log(typeof parseInt(nombre));
metodoParseFloat = console.log(typeof parseFloat(nombre));

//Conversión de number a String
console.log(typeof (edad = String));
console.log(typeof (edad.toString()));

//Boolean a number
console.log(typeof(mayorEdad = Number));
//Boolean a string
console.log(typeof(mayorEdad = String));
console.log(typeof (mayorEdad.toString()));

let negacion = !mayorEdad;

console.log(negacion);

//Concatenar

let saludo = "Hola, bienvenido ";
let frase = "Hoy es 11/12/2023";

console.log(saludo + frase);

