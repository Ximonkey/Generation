package org.generation.overloading;

import java.math.BigDecimal;

public class Suma {

	/*
	 * Crear dos métodos llamados sumar
	 * método = int
	 * método = double
	 */
	static int sumar(int num1, int num2) {
		return num1 + num2;
	}
	
	static double sumar(double num1, double num2) {
		return num1 + num2;
	}
	
	//Crear un tercer método llamdo sumar de tipo bigdecimal
	
			static BigDecimal sumar(BigDecimal num1, BigDecimal num2) {
				return num1.add(num2);
			}
}
