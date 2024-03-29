package org.generation.collections;

import java.util.Arrays;
import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		
		HashSet<String> animals = new HashSet<String>();
		
		animals.add("Zebra");
		animals.add("Mono");
		animals.add("Gorilla");
		animals.add("Chimpancé");
		animals.add("Chango");
		animals.add("Cerdito");
		animals.add("Vaca");
		animals.add("León");
		animals.add("Cerdito");
		animals.add("Cerdito");
		
		//Imprimir el HashSet
		System.out.println(animals);
		
		//Conocer si un elemento se encuentra dentro del Set: contains();
		System.out.println(animals.contains("Cerdito"));

		//Eliminar un elemento: remove();
		animals.remove("León");
		System.out.println(animals);
		
		//Agregando un elemento en una sola línea 
		animals.addAll(Arrays.asList("Caballo","Oso"));
		System.out.println(animals);
		
		/*
		 * La clase HashSet no va a garantizar que los elementos se muestren según el orden establecido ya que busca eficientar la búsqueda y recuperación de los elementos.
		 * Utiliza tablas hash para almacenar los elementos y mostrarlos al usuario
		 */
		
		//Limpiar el HashSet: .clear();
		animals.clear();
		System.out.println(animals);
	}

}
