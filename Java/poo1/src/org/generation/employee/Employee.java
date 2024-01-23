package org.generation.employee;

/*
 * 		La estructura básica para crear objetos es la siguiente:
 * 		1. Atributos o Propiedades
 * 		2. Método Constructor (1 - n métodos)
 * 		3. Métodos del objeto (comportamiento)
 * 		4. Métodos Getters y Setters
 * 		5. Método toString
 */

public class Employee {
	// 1. Atributos o Propiedades
	String nombre;
	String apellido;
	int id;
	String puesto;
	double salario;

	// 2. Método Constructor. Tiene el mismo nombre que la clase, no retorna, recibe
	// parámetros (atributos) y los asigna a variables del constructor. (this)
	Employee(String nombre, String apellido, int id, String puesto, double salario) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.id = id;
		this.puesto = puesto;
		this.salario = salario;
	}

	// 3. Métodos de comportamiento
	void trabajar() {
		System.out.println(this.nombre+" Está trabajando");
	}

	void calcularSalario() {
		System.out.println("El salario del empleado "+ this.nombre +" es " + this.salario + "pesos");
	}

	void capacitarse() {
		System.out.println("El empleado "+ this.nombre+ " se capacita en " + this.puesto);
	}

	void infoGeneral() {
		System.out.println("Id: " + this.id + "Nombre: " + this.nombre + "Apellido: " + this.apellido);
	}

	

	//4.Getters y Setters
	//4. Getters y Setters. Son métodos que nos permiten obtener o enviar información que está protegida por modificadores de acceso y de esta manera interactuar con nuestros objetos. Los getters nos permiten obtener la info y los setters nos permiten enviar la info.
	/*
	 * Estructura de Getter:
	 * 		public tipoDato getNombreVariable () {
	 * 			return nombreVariable;
	 * 		}
	 * 		p.e.
	 * 			public String getNombre () {
	 * 				return nombre;	
	 * 			}
	 * Estructura de Setter:
	 * 		public void setNombreVariable (variable) {
	 * 			this.variable = variable;
	 * 		}
	 * 		p.e.
	 * 			public void setNombre (String nombre) {
	 * 				this.nombre = nombre;	
	 * 			}
	 * Podemos inicializar setters y getter dando clic derecho > source > Generate Getters y Setters
	 * 
	 */
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPuesto() {
		return puesto;
	}

	public void setPuesto(String puesto) {
		this.puesto = puesto;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}
	
	//5.Método toString. Es un "Override" que se refiere a la capacidad de proporcionar información específica de una clase en forma de String. Nos permite imprimir nuestros objetos.
	//Podemos inicializar toString dar clic derecho > Source >  Generate toString > Fields > Generate

	@Override //La anotación @Override simplemente se utiliza, para forzar al compilador a comprobar en tiempo de compilación que estás sobrescribiendo correctamente un método, y de este modo evitar errores en tiempo de ejecución, los cuales serían mucho más difíciles de detectar.
	public String toString() {
		return "Employee [nombre=" + nombre + 
				", apellido=" + apellido + 
				", id=" + id + 
				", puesto=" + puesto + 
				", salario=" + salario + "]";
	}
}
