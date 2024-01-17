const calculator = require('../calculator.js');

//Primer test para suma
test('La suma de dos numeros y el valor resultante', () => {
    expect(calculator.sum(10,20)).toBe(30);
});

//Segundo test para resta
test('La resta de dos numeros y el valor resultante', () => {
    expect(calculator.substract(10,20)).toBe(-10);
});