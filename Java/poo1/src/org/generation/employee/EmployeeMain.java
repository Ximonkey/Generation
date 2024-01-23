package org.generation.employee;

public class EmployeeMain {

	public static void main(String[] args) {
		//Instanciar los objetos
		Employee Ximena = new Employee("Ximena", "Muñoz", 56, "Java Developer", 12000);
		Employee David = new Employee("David", "Avila", 57, "Backend Developer", 15000);
		Employee Abigail = new Employee("Abigail", "Martinez", 58, "FrontEdad Developer", 12000);

		System.out.println(Ximena);
		System.out.println(David);
		System.out.println(Abigail);
		
		//Invocando métodos definidos previamente (trabajar, calcularSalario, capacitarse, infoGeneral)
		Ximena.trabajar();
		David.calcularSalario();
		Abigail.infoGeneral();
		
		//Utilizar información específica de cada objeto mediante sus propiedades
		//Usando getter
		System.out.println(Ximena.getNombre()+" "+Ximena.getApellido()+" Ocupa el puesto de "+Ximena.getPuesto());
		//Accediendo a la propiedad del objeto
		System.out.println(Abigail.puesto + " gana $"+ Abigail.salario+" pesos");
		//Actualizando información mediante setters
		David.setSalario(17000);
		David.calcularSalario();
	}
	

}
