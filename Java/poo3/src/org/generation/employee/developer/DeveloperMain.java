package org.generation.employee.developer;

public class DeveloperMain {

	public static void main(String[] args) {
		Developer Baruch = new Developer("Baruch Moreno", 415048, 18632, "Programador", "Java");
		System.out.println(Baruch);
		
		Baruch.calcularSalario(); //Metodo de superclase que se extrajo de employee.java
		Baruch.codear();//Metodo de subclase que se extrajo de developer.java
	}

}
