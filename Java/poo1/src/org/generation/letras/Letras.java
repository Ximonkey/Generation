package org.generation.letras;

import java.util.Scanner;

/*
 * Crear un programa que le solicite un mensaje al usuario y cuente cuántas vocales, consonantes, números y caracteres posee dicho mensaje
 * 		Letras: métodos para interactuar con el usuario
 * 		LetrasMain: instanciar objetos
 * 		Contador: mètodos para contar vocales, consonantes, número y simbolos
 * */
public class Letras {
	Scanner scanner = new Scanner(System.in);
	
	//Método para recibir info del usuario
	public String leerEntrada() {
		return scanner.next();
	}
	
	//Método para solicitar entradas al usuario
	public void mostrarMensaje(String mensaje) {
		System.out.println(mensaje);
	}
}
