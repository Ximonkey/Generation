package org.generation.collections;

import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListCollections {
	public static void main(String[] args) {
		
		//******Arrays*******//
		
		//Array names
		String[] names = {"Eunice", "Abigail", "Rey", "David", "Braulio", "Rubén", "Lucero"};
		//Imprimir Array
		System.out.println(Arrays.toString(names));
		
		//Array edades
		int[] edades = {25, 27, 30, 25, 27, 26, 29};
		//Imprimir Array
		System.out.println(Arrays.toString(edades));
		
		//Acceder a cada elementodel array
		String name1 = names[0];
		System.out.println("El primer nombre de la lista es: "+name1);
		int edad1 = edades[1];
		System.out.println("La edad de "+name1+" es de "+edad1+" años.");
	
		System.out.println(names[1]);
		System.out.println(edades[1]);
		
		//Obtener la longitud del Array
		int lenghtNames = names.length;
		System.out.println("El Array names tiene "+ lenghtNames+" elementos.");
		System.out.println(names.length);
		
		//Obtener el último elemento
		String lastElement = names[lenghtNames -1];
		System.out.println("El último elemento del array es: "+ lastElement);
		System.out.println(names[names.length-1]);
	
		//Mostrar cada elemento utilizando forEach
		
		for (String name : names) {
			System.out.println(name);
		}
		
		//******ArrayList*******//
		//Es un array que puede cambiar de tamaño. Es la clase de Javaque representa la estructura de datos de Arrays. Permite elementos duplicados y recibe varios métodos para su manipulación.
		
		ArrayList<String> films = new ArrayList<String>();
		ArrayList<Integer> matricula = new ArrayList<Integer>();//Wrapper class
		
		//Agregar elementos
		films.add("Sherk");
		films.add("Willy Wonka");
		films.add("Blancanieves");
		films.add("Pinocho");
		films.add("Cómo entrenar a tu dragón");
		films.add("Avatar");
		
		System.out.println(films);
		
		//Obtener un elemento: name.get(index);
		String film1 = films.get(0);
		System.out.println("La primer película es: "+film1);
		System.out.println(films.get(0));
	
		//Modificar un elemento: name.set(index, newValue);
		String film3 =films.set(3, "Cars 2");
		String film3Get = films.get(3);
		System.out.println(film3Get);
		
		//Conocer el tamño del ArrayList: name.size();
		int sizeFilms = films.size();
		System.out.println("El tamaño del Array List films es de "+sizeFilms+" elementos.");
	
		//Agregar un elemento y despúes eliminarlo: name.remove(index);
		films.add("Soul");
		System.out.println(films);
		
		films.remove(6);
		System.out.println(films);
		
		System.out.println("***Films en lista***");
		for (String film : films) {
			System.out.println(film);
		}
	
	
	}
}