/** Ejercicio
 * 
 * Desarrolla una funcion que reciba como parametro un numero 'n'
 * La función tiene como objetivo evaluar si un numero es par o impar
 * 
 * Consideraciones
 * Asignar un nombre significaivo a la función
 * Correcto uso de operadores
 * Debug exitoso en alguna terminal/consola
 * Si el numero es par, imprimir el numero y a un costado la palabra "par" o "even"
 * Si el numero es impar, imprimir el numero y a un costado la palabra "impar" u "odd"
 */


n = 2;

function identificarNumero1(n) {
    if (n%2 === 0) {
        console.log(`${n} par`)
    }else{
        console.log(n +" impar")
    }
}

const identificarNumero = (n) => {
    if (n%2 === 0) {
        console.log(`${n} par`)
    }else{
        console.log(n +" impar")
    }
}

console.log(identificarNumero1(n));