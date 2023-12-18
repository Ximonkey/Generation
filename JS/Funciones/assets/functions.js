/*
Funciones. Son bloques de còdigo con instrucciones que se pueden reutilizar las veces necesarias.
Algunas funciones reciben parámetros y otras no.
*/

//Función que permita saludar.
function saludar() {
    console.log("Hola, desde una función");
}
//Ejecutar la función 
saludar();

//Hoisting. Caracteristíca de una función que nos permite invocarla desde antes de su inicialización, es decir, se pueden invocar antes del código o despúes.
//Se invoca en la línea 11 y 18
function saludar(){
    console.log("Hola invocando la función con hoisitng");
}
saludar();

//Funciones que retornan algo. Para que una función retorne algo(un String, una operación, una variable, etc.), necesitamos indicarle al código de la función qué vamos a retornar mediante la palabra return.
function greeting(){
    return "Hola desde una función que retorna";
}
console.log(greeting());

//Función que retorna y recibe parámetros
function sumar (x,y){
    return x+y;
}
let resultado = sumar(255, 245);
console.log(`El resultado de sumar x + y es: ${resultado}`);
//Función para calcular el cuadrado de un número
function calcularCuadrado(numero){
    return numero * numero;
}
let resultadoCuadrado = calcularCuadrado(5);
console.log(resultadoCuadrado);

//Funciones flecha (Arrow function). Es una manera de ejecutar una función por declaración, sintetizando código y haciendolo más legible.
//Función para calcular el número de un cubo
const calcularCubo = (number) => {
    return number * number * number;
}
let resultadoCubo = calcularCubo(9);
console.log(resultadoCubo);

//Funcione anónimas. Son un tipo de funciones que se declaran sin nombre de función y se alogan en el interior de una variable. Se hafe referencia a ellas cada vez que la utilicemos.
//Las funciones anónimas no permiten el hoisting (no se puede invocar antes de inicializarlas)
const mensaje = function() {
    return "Este es un mensaje desde una función anónima";
}
console.log(mensaje());

//Callbacks. Es pasar una función B por parámetro a una función A, de modo que la función A pueeda ejecutar esa función de forma genérica desde su código.
//Función B
const functionB = function(){
    console.log("Ejecutando función B");
}
//Función A que mandará a llamar a la función B
const functionA = function(callback){
    callback();
}
functionA(functionB);