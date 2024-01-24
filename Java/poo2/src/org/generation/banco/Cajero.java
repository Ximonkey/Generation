package org.generation.banco;

/*
 * En Cajero se instancia el objeto de tipo CuentaBancaria y se invocan los métodos definidos 
 * Aquí si se pueden establecer los try-catch de la excepción que se definió en el método retirar
 * Los resultados se muestran en consola
 */
public class Cajero {
	public static void main(String[] args) {
		CuentaBancaria cuentaXimena = new CuentaBancaria(6989); //Cuenta bancaria con su idCuenta
		
		//Simulamos que tenemos un Scanner y el cliente introduce dinero
		System.out.println("Depositando $500");
		cuentaXimena.depositar(500);
		
		//Revisar si se actualiza el saldo (debe haber 500 pesito)
		System.out.println("El nuevo saldo es de $" + cuentaXimena.getSaldo());
		
		//Retirando dineritos
		try {
			//Simulamos nuevamente el Scanner para retirar
			System.out.println("Retirando $300");
			cuentaXimena.retirar(300);
			System.out.println("El nuevo saldo es de $" + cuentaXimena.getSaldo()); //Output: $200
			
			System.out.println("Retirando $200");
			cuentaXimena.retirar(200);
			System.out.println("El nuevo saldo es de $" + cuentaXimena.getSaldo()); //Output: $0
			
			System.out.println("Retirando $300");
			cuentaXimena.retirar(300);
			System.out.println("El nuevo saldo es de $" + cuentaXimena.getSaldo()); //Output: Exception
		} catch (FondosInsuficientesException e) {
			System.out.println("\u001B[31mLo siento, te faltan $\u001B[31m" + e.getMonto());
			e.printStackTrace(); //Método de excepciones que imprime el seguimiento del flujo de la excepción
		}		
	}
}