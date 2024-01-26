package org.generation.employee;

public class Employee {

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
	
	public void trebajar() {
		System.out.println(this.fullName+" está trabajando");
	}
	public void calcularSalario() {
		System.out.println("El salario basae del empleado "+this.fullName+" es de "+this.salario);
	}
	public void capactitarse() {
		System.out.println("El trabajdor con el puesto "+this.puesto+" se capacita.");
	}
	public void ingoGeneral() {
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
