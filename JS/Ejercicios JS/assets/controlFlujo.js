
/* Ejercicio 1

Elabora un programa que determine si una persona tiene edad
suficiente para votar.

    let valor = prompt("Ingrese su edad");
    let edad = parseInt(valor);

    if (edad < 18){
        alert("Lo siento, no cumples con la mayoría de edad.");
    }else{
        alert("Por favor, ejerce tu derecho al voto.");
    }
*/

/* Ejercicio 2

 Desarrolla un programa que evalue si un numero es divisible
 entre 7 y 8
 
    let numero = prompt("Ingresa un numero");
    numero = parseInt(numero);

    if (((numero%7)==0) && ((numero%8)==0)){
    alert("Verdadero");
    }else{
        alert("Falso");
    }

*/

/* Ejercicio 3

Desarrolla un programa que evalue si un numero es divisible
entre 4 o 9

    let numero = prompt("Ingresa un numero");
    numero = parseInt(numero);

    if (((numero%4)==0) || ((numero%9)==0)){
    alert("Verdadero");
    }else{
        alert("Falso");
    }

*/

/* Ejercicio 4

 Realizar un programa que reciba como parametro una categoria de peliculas

    let categoria = prompt(`Elige una categoría indicando el número:
    1. acción
    2. drama
    3. comedia
    4. romance
    5. suspenso
    6. terror`);
    categoria = parseInt(categoria);

    switch (categoria) {
        case 1:
            alert("Te recomendamos: Misión imposible");
            break;
        case 2:
            alert("Te recomendamos: 3 metros sobre el cielo");
            break;
        case 3:
            alert("Te recomendamos: Un papá en apuros");
            break;
        case 4:
            alert("Te recomendamos: Eleanor & Park");
            break;
        case 5:
            alert("Te recomendamos: IT");
            break;
        case 6:
            alert("Te recomendamos: La mansión embrujada");
            break;
        default:
            alert("Por favor ingrese un número válido");
            break;
    }

*/


/* Ejercicio 5

 Crear una interfaz de un cajero ATM

let operacion = prompt(`Bienvenido al cajero, eliga una operación a realizar indicando el número:
    1. Retirar dinero
    2. Transferencia
    3. Depósito
    4. Pago de servicios`);
operacion = parseInt(operacion);

if (operacion == 1) {
    alert(`Usted seleccionó la opción ${operacion} "Retirar dinero"`);
} else if(operacion == 2){
    alert(`Usted seleccionó la opción ${operacion} "Transferencia"`);
}else if(operacion == 3){
    alert(`Usted seleccionó la opción ${operacion} "Depósito"`);
}else if(operacion == 4){
    alert(`Usted seleccionó la opción ${operacion} "Pago de servicios"`);
}else {
    alert(`Usted seleccionó la opción ${operacion} "Esa opción no es válida."`);
}

*/

/* Ejercicio 6
 
Escribir en codigo un programa conversor de divisas

    let moneda = prompt("Ingrese la cantidad en pesos mexicanos");
    moneda = parseInt(moneda);
    let cambio = prompt(`Elige el tipo de cambio indicando el número:
    1. Dolar estadounidense
    2. Euro
    3. Yen japonés
    4. Libra esterlina
    5. Franco suizo`);
    cambio = parseInt(cambio);
    let conversion;

    switch (cambio) {
        case 1:
            conversion = moneda*0.058;
            alert(`${moneda} pesos mexicanos equivalen a ${conversion} dólares estadounidenses`);
            break;
        case 2:
            conversion = moneda*0.054;
            alert(`${moneda} pesos mexicanos equivalen a ${conversion} euros`);
            break;
        case 3:
            conversion = moneda*8.41;
            alert(`${moneda} pesos mexicanos equivalen a ${conversion} yenes japoneses`);
            break;
        case 4:
            conversion = moneda*0.046;
            alert(`${moneda} pesos mexicanos equivalen a ${conversion} libras estarlinas`);
            break;
        case 5:
            conversion = moneda*0.051;
            alert(`${moneda} pesos mexicanos equivalen a ${conversion} francos suizos`);
            break;
        default:
            alert("Ingrese un número válido");
            break;
    }

*/