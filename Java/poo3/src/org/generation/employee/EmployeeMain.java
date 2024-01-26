package org.generation.employee;

public class EmployeeMain {

	public static void main(String[] args) {
		
		Employee Daniel = new Employee("Daniel Maldonado", 1088, 17000, "Java Fullstack");
		Employee Martin = new Employee("Martin Cortez", 1089, 18000, "Java Fullstack");
		Employee Rodrigo = new Employee("Rodrigo Macedo", 1090, 12000, "Front End");

		Daniel.calcularSalario();
		Martin.capactitarse();
		Rodrigo.ingoGeneral();
		
		
		
		
		
		
	}

}
