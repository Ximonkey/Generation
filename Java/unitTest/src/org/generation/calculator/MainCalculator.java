package org.generation.calculator;

public class MainCalculator {
	
	public static void main (String [] args) {
		
		Calculator calculator = new Calculator();
		
		System.out.println("El resultado de la suma es "+calculator.sumar(9, 6));
		System.out.println("El resultado de la resta es "+calculator.restar(63, 5));
		System.out.println("El resultado de la división es "+calculator.dividir(9, 6));
		System.out.println("El resultado de la multiplicación es "+calculator.multiplicar(91, 6));
	}

	
}
