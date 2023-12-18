document.write("<h1>Receta para preparar Hotcakes</h1>");

let harina1 = "2";
let mlDeLeche = 250;
let huevos = 2;
let cucharadasMantequilla = 2;
let nutella1 = true;

// De número a cadena
let cantidadHarina = 200;
let cantidadHarinaStr = String(cantidadHarina);
document.write("Cantidad de harina: " + cantidadHarinaStr + " gramos" + "<br>");

// De cadena a número
let cantidadAzucarStr = "50";
let cantidadAzucar = Number(cantidadAzucarStr);
document.write("Cantidad de azúcar: " + cantidadAzucar + " gramos" + "<br>");

// De boolean a string
let tieneHuevos = true;
let tieneHuevosStr = String(tieneHuevos);
document.write("¿Tiene huevos? " + tieneHuevosStr + "<br>");

// De string a boolean
let tieneLecheStr = "true";
let tieneLeche = Boolean(tieneLecheStr);
document.write("¿Tiene leche? " + tieneLeche + "<br>");

// De número a boolean
let temperaturaSarten = 180;
let temperaturaSartenBool = Boolean(temperaturaSarten);
document.write("¿La sartén está caliente? " + temperaturaSartenBool + "<br>");

// De boolean a number
let requiereAceite = false;
let requiereAceiteNum = Number(requiereAceite);
document.write("¿Requiere aceite? " + requiereAceiteNum + "<br>");

let lecheDeslactosada = false;
let lecheDeAlmendra = true;
if (lecheDeslactosada || lecheDeAlmendra) {console.log("se puede hacer hotcakes");}
else{console.log("no se puede así");}

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
      (`? con ${lechera ? 'lechera' : ''}${lechera && nutella ? ' y ' : ''}${nutella ? 'nutella' : ''}
      : 'sin toppings'`);

    return (`¡Hotcakes listos para servir ${toppings}!`);

  } else {
    return "No se pueden preparar hotcakes. ¡Faltan ingredientes!";
  }
}

// Llamada a la función principal y mostrar el resultado al usuario
alert(prepararHotcakes());

var instrucciones = [
    "1. En un tazón grande, mezcla la harina, el azúcar, el polvo de hornear",
    "2. Agrega el huevo, la leche y la mantequilla.",
    "3. Mezcla bien hasta obtener una masa suave.",
    "4. Calienta un sartén a fuego medio.",
    "5. Vierte un poco de masa en la sartén caliente para formar cada hotcake",
    "6. Cocina hasta que aparezcan burbujas en la superficie, luego voltea",
    "7. Repite este proceso hasta que cocines todos los hotcakes.",
    "8. Sirve caliente con tu jarabe o frutas favoritas.",
];

document.write("<h2>Instrucciones:</h2>");
for (var j = 0; j < instrucciones.length; j++) {
    document.write(instrucciones[j] + "<br>");
}