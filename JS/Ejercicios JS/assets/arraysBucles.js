/*
*Ejercicios
=====Ejercicio de Arrays=====
Descripción:
Supongamos que tienes una lista de temperaturas diarias en grados Celsius para una semana. Tienes que convertir estas temperaturas a grados Fahrenheit y mostrar los resultados.
* Temperaturas diarias en grados Celsius para una semana
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
*Instrucciones:

Crea una función llamada celsiusToFahrenheit que tome una temperatura en grados Celsius y la convierta a grados Fahrenheit usando la fórmula: F = C * (9/5) + 32.
Utiliza un bucle para recorrer el array temperaturasCelsius, llama a la función celsiusToFahrenheit para cada temperatura y almacena los resultados en un nuevo array llamado temperaturasFahrenheit.
Muestra ambos arrays (temperaturasCelsius y temperaturasFahrenheit) en la consola.
*/
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
const temperaturasFahrenheit = temperaturasCelsius.map(celsiusToFahrenheit);

function celsiusToFahrenheit(C) {
    return C * (9 / 5) + 32;
}

console.log(temperaturasCelsius);
console.log(temperaturasFahrenheit);

/*
=====Ejercicios de Bucles=====
*Descripción:
Escribe un programa que sume los primeros 10 números naturales (1 al 10) e imprima el resultado.

*Instrucciones:

Utiliza un bucle (for o while) para sumar los números del 1 al 10.
Imprime el resultado de la suma en la consola.
Sugerencia:
Puedes usar una variable llamada suma para acumular la suma mientras recorres los números.
*/
let suma = 0;
for (let number = 1; number <= 10; number++) {
    suma += number;
}
console.log(suma);

/*
*Ejercicio : Números Primos
Escribe un programa que determine si un número ingresado por el usuario es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Puedes utilizar un bucle for para verificar si el número tiene algún divisor además de 1 y él mismo.*/

let number = parseInt(prompt("Ingresa un número"));

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    } else if (numero === 2) {
        return true;
    } else if (numero % 2 === 0) {
        return false;
    } else {
        for (let i = 3; i <= Math.sqrt(numero); i += 2) {
            if (numero % i === 0) {
                return false;
            }
        }
        return true;
    }
}

if (esPrimo(number)) {
    console.log(`${number} es un número primo.`);
} else {
    console.log(`${number} no es un número primo.`);
}


/*
*Ejercicio : Secuencia de Fibonacci
Escribe un programa que genere los primeros 10 términos de la secuencia de Fibonacci. La secuencia de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, ...).

Estos ejercicios implican un poco más de lógica y son ideales para practicar conceptos más avanzados. ¡Espero que disfrutes resolviéndolos!*/

function secuenciaFibonnacci(n) {
    let fibonacciArray = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }

    return fibonacciArray;
}

// Generar los primeros 10 términos de la secuencia de Fibonacci
let fibonacci10 = secuenciaFibonnacci(10);

// Mostrar los resultados en la consola
console.log(`Los primeros 10 términos de la secuencia de Fibonacci son: ${fibonacci10.join(", ")}`);
