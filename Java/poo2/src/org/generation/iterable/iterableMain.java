package org.generation.iterable;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class iterableMain {

	public static void main(String[] args) {
		/*
		 * Podemos iterar sobre una coleción de tres maneras
		 * 1.Iteración mediante ciclo for-each*/
				List<String> nombres = new ArrayList<String>();
				
				nombres.addAll(Arrays.asList("Braulio","Fernanda","Rodrigo"));
				
				for (String nombre : nombres) {
					System.out.println(nombre);
				}
		// 2.Iterar mediante iterador
				List<String> apellidos = new ArrayList<String>();
				nombres.addAll(Arrays.asList("Aleman","Garcia","Martinez"));
				
				//Utilizar un nuevo iterador y le vamos a pasar el método iterator() a nuestro ArrayList
				Iterator<String> iterator = apellidos.iterator();
				
				//Utilizando while, devuelve verdadero si la iteración tiene más elementos sino, se termina el ciclo.
				
				while(iterator.hasNext()) {
					String elemento = iterator.next();
					System.out.println(elemento);
				}
	
		// 3. Mediante forEach qur toma una expresión Java Lambda como paràmetro
				List<String> animales = new ArrayList<String>();
	
				animales.addAll(Arrays.asList("Chango","Gorilla","Mono"));
	
				animales.forEach((animal)->{
					System.out.println(animal);
				});
	
	
	}

}
