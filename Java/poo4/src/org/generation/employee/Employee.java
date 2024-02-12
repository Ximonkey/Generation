package org.generation.employee;

/*
 * Abstracción. Pilar de la Programación Orientada a Objetos que permite identificar aspectos esenciales de un objeto y ocultar los detalles irrelevantes i complejos.
 * Permite que los métodos tomen diferentes formas al ser heredadasssss, usando una plantilla base.
 * Interface. Tipo de "clase" que define un conjunto de métodos que pueden ser implementados por diversas clases.
 * */

public class Employee implements Trabajador{

	private String fullName;
	private int id;
	private double salario;
	private String puesto;
	
	public Employee(String fullName, int id, double salario, String puesto) {
		super();
		this.fullName = fullName;
		this.id = id;
		this.salario = salario;
		this.puesto = puesto;
	}
	
	public void trabajar() {
		System.out.println(this.fullName+" está trabajando");
	}
	public void calcularSalario() {
		System.out.println("El salario basae del empleado "+this.fullName+" es de "+this.salario);
	}
	public void capacitarse() {
		System.out.println("El trabajdor con el puesto "+this.puesto+" se capacita.");
	}
	public void infoGeneral() {
		System.out.println("ID: "+this.id+" Nombre: "+this.fullName+" Puesto: "+this.puesto);
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}

	public String getPuesto() {
		return puesto;
	}

	public void setPuesto(String puesto) {
		this.puesto = puesto;
	}

	@Override
	public String toString() {
		return "Employee [fullName=" + fullName + ", id=" + id + ", salario=" + salario + ", puesto=" + puesto + "]";
	}
	
	
	
}
