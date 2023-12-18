

/*Inicialización de variables*/

//Ingredientes
let harina = "Harina";
let leche = "Leche";
let mantequilla = "Mantequilla";
let vainilla = 3;
let huevo = 2;
//Topings
let lechera = true;
let nutella = false;

let ingredientes = ("Los ingredientes para la receta son: " + harina + ", " + leche + ", " + mantequilla + ", " + vainilla + " y " + huevo + ".");
document.write(ingredientes + "<br>");

/*Cambios de tipo de dato*/

//String a Number
document.write("String a Number" + "<br>");
document.write(typeof Number(harina) + "<br>");
document.write(typeof parseInt(leche) + "<br>");
document.write(typeof parseFloat(mantequilla) + "<br>");
//Asignar un valor a la variable
harina = 2;
leche = 1;
mantequilla = 500;
//Imprimir el valor
document.write("Asignar un valor" + "<br>");
document.write(harina + "<br>");
document.write(leche + "<br>");
document.write(mantequilla + "<br>");

//Number a String
document.write(typeof (huevo.toString()));
//Asignar un valor a la variable
vainilla = "3 cucharadas";
huevo = "2 huevos";


//Boolean a number
nutella = Number(nutella);
document.write(typeof nutella);

//Numero a booleano
vainilla = Boolean(vainilla);
document.write(typeof vainilla);
vainilla = true;
document.write(vainilla);


