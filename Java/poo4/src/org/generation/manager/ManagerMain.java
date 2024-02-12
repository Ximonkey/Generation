package org.generation.manager;
import org.generation.employee.Trabajador;

public class ManagerMain {
	public static void main(String[] args) {
		Manager Fernanda = new Manager("Fernanda Ramos", 136, 45365.28d, "Manager",2);
		System.out.println(Fernanda);
		Trabajador Daniel = new Manager("Daniel Maldonado",6548, 15233.3d,"Manager",1 );
		System.out.println(Daniel);
		//Metdo calcular salario
		Fernanda.calcularSalario();
		
		//Método calcular salario base heredado
		double salarioBaseFer = Fernanda.salarioBase;
		
		//Método calcular salario polimórfico
		double salarioFer = Fernanda.getSalario();
		System.out.println("El salario base de " + Fernanda.getFullName() + " con posición de " + Fernanda.getPuesto() + " es de $" + salarioBaseFer + " pero posee una antigüedad de " + Fernanda.getAntiguedad() + " años, por lo tanto su salario incrementa a " + salarioFer);
	}

}