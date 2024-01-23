package org.generation.letras;

import org.generation.employee.Employee;

public class LetrasMain {

	public static void main(String[] args) {
		//Instanciar objetos
		Letras letras = new Letras();
		letras.mostrarMensaje("Ingrese una palabra");
		String palabra = letras.leerEntrada();
		//Invocar los métodos para contar caracteres
		Contador contador = new Contador();
		int vocales = contador.contarVocales(palabra);
		System.out.println("La cantidad de vocales es: "+vocales);
		int numeros = contador.contarNumeros(palabra);
		System.out.println("La cantidad de numeros es: "+numeros);
		int consonantes = contador.contarConsonantes(palabra);
		System.out.println("La cantidad de consonantes es: "+consonantes);
		int simbolos = contador.contarSimbolos(palabra);
		System.out.println("La cantidad de simbolos es: "+simbolos);
		
	}

}
