package org.generation.exercises;

import java.util.ArrayList;
import java.util.Scanner;

/*
 * Programa que permite que un usuario agregue nombre y apellido de estudiantes matriculados en una universidad. Posteriomente, muestra la lista de los estudiantes agregados.
 * -- Requerimientos:
 * 		> Utilizar ArrayList para guardar a los estudiantes
 * 		> Scanner para interactuar con el usuario y permitir que agregue estudiantes
 * 		> Loop para permitir que se agreguen varios estudiantes (do-while)
 * 		> Opción para salir del loop con la palabra 'Salir' (if-else, try-catch, !=, switch son posibles opciones)
 * 		> Mostrar lista de estudiantes (for-each) 
 */
public class SistemaEscolar {

	public static void main(String[] args) {
		// Declaración del escaner
		Scanner scanner = new Scanner(System.in);
		/*
		 * // Array List estudiantes ArrayList<String> estudiantes = new
		 * ArrayList<String>(); // Inicialización de nombre String nombre; boolean
		 * repetir = true;
		 * 
		 * do { // Menú (switch)
		 * System.out.println("Bienvenido al sistema. Eliga una opción");
		 * System.out.println("1. Añadir estudiantes");
		 * System.out.println("2. Mostrar lista de estudiantes"); int option =
		 * scanner.nextInt();
		 * 
		 * switch (option) { case 1:// Añadir estudiantes
		 * System.out.println("¿Cuántos estudiantes desea añadir al sistema?"); int
		 * cantidad = scanner.nextInt(); int contador = 1;
		 * 
		 * do { System.out.println("Ingrese el nombre completo del estudiante"); nombre
		 * = scanner.next();
		 * 
		 * estudiantes.add(nombre);
		 * 
		 * contador++; } while (contador <= cantidad);
		 * System.out.println("Estudiante(s) añadidos con éxito"); repetir = false;
		 * break; case 2:// Mostrar lista de estudiantes
		 * System.out.println("**Lista de estudiantes**"); for (String estudiante :
		 * estudiantes) { System.out.println(estudiante); } repetir = false; break; }
		 * System.out.println("¿Desea volver al menú? (true/false)"); repetir =
		 * scanner.nextBoolean(); } while (repetir);
		 * System.out.println("Fin del programa");
		 * 
		 * /* Modificar nuestro programa para permitir salir con las palabras 'Salir' o
		 * 'salir'. Agreguar la opción que permite que el usuario elimine un estudiante
		 * después de haberlo agregado y muestre la lista actualizada después de la
		 * eliminación
		 */

		// Inicializar un ArrayList para guardar a los estudiantes
		ArrayList<String> students = new ArrayList<String>();

		// Loop para permitir agregar un usuarios
		String name; // inicializado de manera global
		String salir;
		boolean delate = false;
		do {
			System.out.println("Ingresa el nombre del estudiante. Escribe 'Salir' para finalizar");
			name = scanner.next();
			; // Invocando de manera local
			salir = name.toLowerCase();
			students.add(name);
			if (!salir.equals("salir")) {
				System.out.println("¿Desea eliminar al estudiante? (true/false)");
				delate = scanner.nextBoolean();
				if (delate == true) {
					students.remove(students.size() - 1);
				}
			}

		} while (!salir.equals("salir")); // Siempre que No se escriba "Salir", el loop se sigue ejecutando

		System.out.println("* Lista de estudiantes *");

		for (String student : students) {
			System.out.println(student);

		}

		scanner.close();
	}

}