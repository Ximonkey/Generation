package org.generation.overloading;

import java.math.BigDecimal;

public class SumaMain {

	public static void main (String [] args) {
		int suma1 = Suma.sumar(8, 5); //Invocamos el método de tipo static mediante su clase.
	
		double suma2 = Suma.sumar(4.3d, 6.26d);
		
		
		
		//Para imprimir BigDecimal, debemos guardar los valores de los parámetros en objetos de tipo BigDecimal y asignarlos como argumentos de tipo String de cada nueva instancia
		BigDecimal num1 = new BigDecimal("4.3"); //primer objeto instanciado
		BigDecimal num2 = new BigDecimal("6.26"); //segundo objeto instanciado
		
		BigDecimal suma3 = Suma.sumar(num1, num2);
		
		System.out.println("La suma de enteros es "+suma1);
		System.out.println("La suma de decimales es "+suma2);
		System.out.println("El resultado exacto de la suma de decimales es "+suma3);
	
	
	
	}
	
}
