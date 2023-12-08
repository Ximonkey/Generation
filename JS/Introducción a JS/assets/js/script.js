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