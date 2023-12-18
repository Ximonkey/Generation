/* 
*===== BUCLES =====
* Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

* -- Operadores de incremento (++) y operadores de decremento (--)
*${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.
* Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
*- El operador ++ se utiliza para aumentar el valor de una variable en uno.
*- El operador -- se utiliza para disminuir el valor de una variable en uno.
* (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/

/*
=====JavaScript Loops=====
Loops are handy, if you want to run the same code over and over again, each time with a different value.

>>>>Different Kinds of Loops<<<<

JavaScript supports different kinds of loops:

    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true

=====The For Loop=====
The for statement creates a loop with 3 optional expressions:

for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
Expression 1 is executed (one time) before the execution of the code block.

Expression 2 defines the condition for executing the code block.

Expression 3 is executed (every time) after the code block has been executed.
*/

//Foor loop ++
for (let i = 0; i < 5; i++) {
    console.log(`The number is ${i}`);
}

//Foor loop --
for (let cuenta = 10; cuenta >= 1; cuenta--) {
    console.log(`Entramos al aire en ${cuenta}`);
}


/*=====Variations of the for loop=====*/

/*for...of nos permite recorrer el objeto (array) y devuelve el valor*/
const fruits = ["Apple", "Banana", "Orange"];

for (fruit of fruits) {
    console.log(fruit);
}

/*for...in nos permite recorrer el objeto (array) y devuelve su posición (indices)*/

const cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
    console.log(x);
}

/*
=====The While Loop=====
The while loop loops through a block of code as long as a specified condition is true.

Syntax
while (condition) {
  // code block to be executed
}
*/
let a = 0;
while (a < 10) {
    console.log(`The number is ${a}`);
    a++;
}

/*
=====The Do While Loop=====
The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax
do {
  // code block to be executed
}
while (condition);
*/
let z = 0;
do {
    console.log(`The number is ${z}`);
    z++;
}
while (z < 10);

/*
=====JavaScript Break and Continue=====
    The break statement "jumps out" of a loop.

    The continue statement "jumps over" one iteration in the loop.
*/

//Exercices
/* 1. Create a loop that runs as long as i is less than 10, but increase i with 2 each time.*/

let i = 0;
while (i < 10) {
    console.log(i);
    i = i + 2;
}
/*Make the loop stop when i is 5.*/

for (i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {
        break;
    }
}

/*Make the loop jump to the next iteration when i is 5.*/

for (i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}