package org.generation.employee.developer;

import org.generation.employee.Employee;

public class Developer extends Employee {
	public String lenguajeProgramacion;


	public Developer(String fullName, int id, double salario, String puesto, String lenguajeProgramacion) {
		super(fullName, id, salario, puesto);
		this.lenguajeProgramacion = lenguajeProgramacion;
	}


	public void codear() {
		System.out.println("El programador "+this.getFullName()+"utiliza "+this.lenguajeProgramacion);
	}


	public String getLenguajeProgramacion() {
		return lenguajeProgramacion;
	}


	public void setLenguajeProgramacion(String lenguajeProgramacion) {
		this.lenguajeProgramacion = lenguajeProgramacion;
	}


	@Override
	public String toString() {
		return "Developer [Id=" + getId() + ", NombreCompleto=" + getFullName() + ", Puesto=" + getPuesto() + ", Salario="	+ getSalario() + ", lenguajeProgramacion=" + lenguajeProgramacion + "]";
	}
	
	
	
}
