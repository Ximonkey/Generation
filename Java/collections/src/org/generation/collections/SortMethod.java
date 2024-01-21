package org.generation.collections;

import java.util.ArrayList;
import java.util.Collections;

public class SortMethod {

	public static void main(String[] args) {
		// El método .sort() permite ordenar  los elementos de un ArrayList
		ArrayList<Integer> points = new ArrayList<Integer>();
		ArrayList<String> names = new ArrayList<String>();
	
	points.add(2);
	points.add(3);
	points.add(9);
	points.add(35);
	points.add(2);
	points.add(8);
	
	System.out.print(points); //Ordenados como fueron agregados
	
	//Ordenamiento de menor a mayor utilizando sort
	Collections.sort(points);
	System.out.print(points);
	
	names.add("Ximena");
	names.add("Braulio");
	names.add("David");
	names.add("aldo");
	names.add("Fernanda");
	System.out.print(names);
	
	Collections.sort(names);//Ordenamiento en ascii
	System.out.print(names);
	
	
	
	
	}

}
