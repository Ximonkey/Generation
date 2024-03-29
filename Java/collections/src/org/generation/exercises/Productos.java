package org.generation.exercises;

import java.util.Scanner;
import java.util.HashMap;
import java.util.Map;

public class Productos {
	public static void main(String[] args) {
		/*
		 * Crear un programa que le permita al usuario agregar un id de producto y el
		 * nombre del producto. Mostrar la lista de productos.
		 */
		Scanner scanner = new Scanner(System.in);

		Map<String, String> productos = new HashMap<String, String>();

		boolean again = true;

		System.out.println("Bienvenido al sistema.");

		do {
			System.out.println("Ingrese el id del nuevo producto.");
			String id = scanner.next();
			System.out.println("Ingrese el nombre del producto.");
			String nombre = scanner.next();

			productos.put(id, nombre);

			System.out.println("¿Desea añadir otro producto? (true/false)");
			again = scanner.nextBoolean();
		} while (again);
		
		System.out.println("***Lista de productos***");
		for (Map.Entry<String, String> producto : productos.entrySet()) {
			System.out.println("Id: " + producto.getKey() + " Nombre: " + producto.getValue());
		}

	}
}
