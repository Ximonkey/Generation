package org.generation.banco;

/*
 * En esta clase se definen los métodos para disparar la excepciones, es decir, el try-catch. Sin ebargo, aquí no se ejecuta el try-catch
 * Se definen otros métodos como depositar dinero, retirar dinero
 * 
 * 		Requerimientos:
 *			Trabajar bajo POO
 *			Encapsular (modificadores, getters y setters)
 *			Crear variables y métodos para instanciar objetos
 *
 * */

public class CuentaBancaria {

	private double saldo;
	private int idCuenta;

	// Constructor que recibe sólo el atributo número
	public CuentaBancaria(int idCuenta) {
		this.idCuenta = idCuenta;
	}

	// Depositar
	public void depositar(double monto) {
		saldo += monto;
	}

	// Retirar
	public void retirar(double monto) throws FondosInsuficientesException {
		if (monto <= saldo) {
			saldo -= monto;
		} else {
			double faltante = saldo - monto;

			// Crear la instancia de la clase FondosInsuficientesException con las palabras
			// reservadas throw new e y le pasamos el parámetro correspondiente a la
			// variable que disparar la excepción
			throw new FondosInsuficientesException(faltante); // Esto nos va a marcar un error, porque queremos
																// instanciar de manera local y no lo encuentra, para
																// ello necesitamos "heredarlo" como parte del método
																// con la palabra reservada throws y el nombre de la
																// excepción
		}

	}

	//Getters y Setters
	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}

	public int getIdCuenta() {
		return idCuenta;
	}

	public void setIdCuenta(int idCuenta) {
		this.idCuenta = idCuenta;
	}

}
