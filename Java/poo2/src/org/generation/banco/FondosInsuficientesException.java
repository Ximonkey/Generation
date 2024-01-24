package org.generation.banco;

/*En esta clase se definen los métodos que arrojan Excepciones, siempre que en el Cajero se dispare dicha excepción.
 * 
 * 	Requerimientos:
 * 		1.Trabajar bajo el paradigma POO
 * 		2.Indicar que la clase es una Exception mediante herencia (extends)
 * 		3.Crear variables y métodos para instanciar objetos.
 * 		4.Encapsular (modificadores, gettersr y setters)
 * */

public class FondosInsuficientesException extends Exception {

	private static final long serialVersionUID = 1L; //No es necesaria, pero es buena práctica agregarla
	//Atributos 
	private double monto;

	//Constructor
	public FondosInsuficientesException(double monto) {
		super();
		this.monto = monto;
	}

	//Getter
	public double getMonto() {
		return monto;
	}

	public void setMonto(double monto) {
		this.monto = monto;
	}
	
	
	
	
	
}
