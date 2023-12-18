/*
Ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro
*/
/*
let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese otro numero"));

if (numero1 === numero2) {
    alert(`${numero1} es igual a ${numero2}`);
} else if (numero1 > numero2) {
    alert(`${numero1} es mayor que ${numero2} `);
} else if (numero1 < numero2) {
    alert(`${numero1} es menor que ${numero2}`);
}else{
    alert("Ingrese valores válidos");
}
*/
/*
Ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no
*/
/*
let palabra1 = prompt("Ingrese una palabra");
let palabra2 = prompt("Ingrese otra palabra");

if (palabra1 === palabra2) {
    alert(`${palabra1} es igual a ${palabra2}`);
} else {
    alert(`${palabra1} no es igual a ${palabra2}`);
}
*/
//* Receta hotcakes */

// Variables de ingredientes
let harina;
let leche;
let mantequilla;
let vainilla;
let huevo;

// Variables de toppings
let lechera;
let nutella;

// Función para preguntar al usuario y obtener un valor booleano
function preguntarAlUsuario(ingrediente) {
    let respuesta = prompt(`¿Tienes ${ingrediente.toLowerCase()}? (Sí/No)`);

    return respuesta && respuesta.toLowerCase() === 'si';
}

// Función para verificar si todos los ingredientes están disponibles
function verificarIngredientes() {
    harina = preguntarAlUsuario("Harina");
    leche = preguntarAlUsuario("Leche");
    mantequilla = preguntarAlUsuario("Mantequilla");
    vainilla = preguntarAlUsuario("Vainilla");
    huevo = preguntarAlUsuario("Huevo");

    return harina && leche && mantequilla && vainilla && huevo;
}

// Función para preguntar al usuario sobre toppings
function preguntarToppings() {
    lechera = preguntarAlUsuario("Lechera");
    nutella = preguntarAlUsuario("Nutella");
}

// Función para preparar hotcakes y retornar un mensaje
function prepararHotcakes() {
    if (verificarIngredientes()) {
        preguntarToppings();

        // Operadores ternarios para decidir qué toppings agregar
        let toppings = lechera || nutella
            ? `con ${lechera ? 'lechera' : ''}${lechera && nutella ? ' y ' : ''}${nutella ? 'nutella' : ''}`
            : 'sin toppings';

        return `¡Hotcakes listos para servir ${toppings}!`;

    } else {
        return "No se pueden preparar hotcakes. ¡Faltan ingredientes!";
    }
}

// Llamada a la función principal y mostrar el resultado al usuario
alert(prepararHotcakes());
