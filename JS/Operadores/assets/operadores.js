/*
====Types of JavaScript Operators====
There are different types of JavaScript operators:

====Arithmetic Operators====
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement

====Assignment Operators====

Operator	Example	    Same As
=	        x = y	    x = y
+=	        x += y	    x = x + y
-=	        x -= y	    x = x - y
*=	        x *= y	    x = x * y
/=	        x /= y	    x = x / y
%=	        x %= y	    x = x % y
**=	        x **= y	    x = x ** y

====Comparison Operators====
Operator	Description
==	        equal to
===	        equal value and equal type
!=	        not equal
!==	        not equal value or not equal type
>	        greater than
<	        less than
>=	        greater than or equal to
<=	        less than or equal to
?	        ternary operator

====Logical Operators====
Operator	Description
&&	        logical and
||	        logical or
!	        logical not

====Bitwise Operators====
Bit operators work on 32 bits numbers.
Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

Operator	Description	            Example	    Same as	        Result	    Decimal
&	        AND	                    5 & 1	    0101 & 0001	    0001	    1
|	        OR	                    5 | 1	    0101 | 0001	    0101	    5
~	        NOT	                    ~ 5	        ~0101	        1010	    10
^	        XOR	                    5 ^ 1	    0101 ^ 0001	    0100	    4
<<	        left shift	            5 << 1	    0101 << 1	    1010	    10
>>	        right shift	            5 >> 1	    0101 >> 1	    0010	    2
>>>	        unsigned right shift	5 >>> 1	    0101 >>> 1	    0010	    2

====Type Operators====
Operator	Description
typeof	    Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type
*/

/*====Excercices====*/

//Arithmetic Operators
let number1 = 523;
let number2 = 53;

let addition = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;
let exponentiation = number1 ** number2;
let division = number1 / number2;
let modulus = number1 % number2;
let increment = number1++;
let decrement = number1--;

console.log(`${number1} + ${number2} is equal to ${addition}`);
console.log(`${number1} - ${number2} is equal to ${subtraction}`);
console.log(`${number1} * ${number2} is equal to ${multiplication}`);
console.log(`${number1} ^ ${number2} is equal to ${exponentiation}`);
console.log(`${number1} / ${number2} is equal to ${division}`);
console.log(`${number1} / ${number2} moduls is equal to ${modulus}`);
console.log(`${number1} ++ is equal to ${increment}`);
console.log(`${number1} -- is equal to ${decrement}`);

//Comparison Operators
let a = 1;
let b = '1';
console.log(`The value is: ${a} the type of is: ${typeof (a)}`);
console.log(`The value is: ${b} the type of is: ${typeof (b)}`);
//Comparison Operators: equal to
if (a == b) {
    console.log(`normal operator: ${a} is equal to ${b}`);
} else {
    console.log(`normal operator: ${a} is not equal to ${b}`);
}
//Comparison Operators: equal value and equal type
if (a === b) {
    console.log(`strict operator: ${a} is equal to ${b}`);
} else {
    console.log(`strict operator: ${a} is  not equal to ${b}`);
}
let x = 2;
let z = '1';
console.log(`The value is: ${x} the type of is: ${typeof (x)}`);
console.log(`The value is: ${z} the type of is: ${typeof (z)}`);
//Comparison Operators: not equal to 
if (x != z) {
    console.log(`normal operator: ${x} is not equal to ${z}`);
} else {
    console.log(`normal operator: ${x} is equal to ${z}`);
}
//Comparison Operators: not equal to value or not equal type
if (x != z) {
    console.log(`strict operator: ${x} is not equal to ${z}`);
} else {
    console.log(`strict operator: ${x} is equal to ${z}`);
}
//Comparison Operators: greater than/less than

let f = 57;
let g = 56;

if (f == g) {
    console.log(`${f} is equal to ${g}`);
} else if (f > g) {
    console.log(`${f} is greater than ${g} `);
} else if (f < g) {
    console.log(`${f} is less than ${g}`);
}

if (f >= g) {
    console.log(`${f} is greater or equal than ${g}`);
} else{
    console.log(`${f} is less or equal than ${g}`);
}

//Logical Operators

//logical and
let isFluffy = true;
let isCat = true;

if (isFluffy && isCat) {
  console.log("It's a Fluffy Cat!");
} else {
  console.log("Not a Fluffy Cat.");
}
//logical or
let hasFreePizza = true;
let hasLiveBand = false;

if (hasFreePizza || hasLiveBand) {
  console.log("I'm in for the party!");
} else {
  console.log("No pizza or live band? Count me out.");
}
//logical not
let isDogSmelly = false;

if (!isDogSmelly) {
  console.log("Your dog is officially not smelly!");
} else {
  console.log("Maybe consider a bath for your dog.");
}

/*====JS Strings==== */

//JavaScript String toUpperCase()
let txt = "Hello World";
///The toUpperCase() method converts a string to upper case letters.
console.log(txt.toUpperCase());
//The toLowerCase() method converts a string to lower case letters.
console.log(txt.toLowerCase());
//JavaScript String trim()
//The trim() method removes whitespace from both sides of a string.Does not change the original string.
let text = "       Hello World!        ";
console.log(text.trim());
//The trimEnd() method removes whitespace from the end of a string.
console.log(text.trimEnd());
//The trimStart() method removes whitespace from the beginning of a string.
console.log(text.trimStart());
//The toString() method returns a string.
let number = 4;
console.log(text.toString());
//The concat() method joins two or more strings.
let text1 = "sea";
let text2 = "food";
console-log(text1.concat(text2));

/*====JavaScript RegExp Reference====*/