/***Arrays***

***What is an array?***
An array is a special variable, which can hold more than one value:
const cars = ["Saab", "Volvo", "BMW"];

***Why Use Arrays?***
If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!
An array can hold many values under a single name, and you can access the values by referring to an index number.


***Syntax:***
Using an array literal is the easiest way to create a JavaScript Array.

const array_name = [item1, item2, ...];      
It is a common practice to declare arrays with the const keyword.

***Using the JavaScript Keyword new***
The following example also creates an Array, and assigns values to it:

Example
const cars = new Array("Saab", "Volvo", "BMW");

You can also create an array, and then provide the elements:
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

***Accessing Array Elements***
You access an array element by referring to the index number:

const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];

Note: Array indexes start with 0.
[0] is the first element. [1] is the second element.

***Changing an Array Element***
This statement changes the value of the first element in cars:
cars[0] = "Opel";

Example
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";

***Converting an Array to a String***
The JavaScript method toString() converts an array to a string of (comma separated) array values.

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

Result:
Banana,Orange,Apple,Mango

***Array elements cab be Object:***
Arrays are special kinds of objects.
Because of this, you can have variables of different types in the same Array.
You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array.

Objects use names to access its "members". In this example, person.firstName returns John:
const person = {firstName:"John", lastName:"Doe", age:46};

***Array Properties and Methods***

cars.length   // Returns the number of elements
cars.sort()   // Sorts the array

***Accessing the First Array Element***
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];

***Accessing the Last Array Element***
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];

***Adding Array Elements***
The easiest way to add a new element to an array is using the push() method:
Example
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits

New element can also be added to an array using the position
const fruits = ["Banana", "Orange", "Apple"];
fruits[1] = "Lemon"; 

***How to reconize an Array***
ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
Array.isArray(fruits);

*/

//Exercises

/*Creat an Array*/
//First Option (best one)
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
//Second Option
const fruits = new Array("Banana", "Orange", "Apple", "Mango");
console.log(fruits);
/*Access an element by position*/
let element = cars[1];
console.log(`${element} is an element accessed by position`);
/*Change the value of an element*/
cars[0] = "Ford";
console.log(cars);
/*The length property returns the length (size) of an array*/
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.length);
/*Array method to sort the array alphabetically.*/
const colors = ["Black","Grey","Red","Blue","Orange","White","Brown","Pink","Yellow","Green"];
console.log(colors);
colors.sort();
console.log(colors);
/*The pop() method removes the last element from an array*/
const verbs = ["Walk","Play","Break","Eat","Kick","Hug"];
console.log(verbs);
verbs.pop();
console.log(verbs);
/*The push() method adds a new element to an array (at the end)*/
const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Australia","Austria"];
console.log(countries);
countries.push("Azerbaijan")
console.log(countries);
/*splice() method to remove elements by position from the array.*/
const names = ["Carla", "María", "Daniela", "Azul"];
names.splice(1, 2);

//**Shifting Elements**

/*Shifting is equivalent to popping, but working on the first element instead of the last. */

/*The shift() method removes the first array element and "shifts" all other elements to a lower index. */
const movies = ["12 Years a Slave",	"20 Feet From Stardom",	"¡Alambrista!",	"Apollo 13",	"Bamboozled",	"Bohulano Family Film Collection",	"Cruisin' J Town"];
console.log(movies);
movies.shift();
console.log(movies);