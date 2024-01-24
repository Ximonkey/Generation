package org.generation.exceptions;

public class Division {
	
	public static int dividir(int num1, int num2) {
		return num1 / num2;
	}
	
	
	
	
	public static void main(String [] args) {
		/*
		 * La clase Exception nos permite manejar cualquier caso excepcional con nuestro código, es el equivalente a los errores.
		 * Utiliza una estructura de control try-catch que permite manejar las excepciones
		 * - try: encuelce el código que puede generar una excepciòn y lo evalúa
		 * - catch: contine el código que se ejecuta cuando se lanza la excepción.
		 * 		Sintaxis:
		 * 		try{
		 * 			//Código protegido
		 * 		}catch(ExceptionName e){
		 * 			//Bloque de excepcion
		 * 		}
		 * -finally: siempre se ejecuta, y se utiliza para mostrar un mensaje en caso de ser invocado.Podemos prescindir de finally
		 * */
	
	//Excepci{on que se arroja si un número se divide entre cero
		try {
			int resultado = dividir(10, 0);
			System.out.println("El resultado de la división es "+resultado);
		}catch (ArithmeticException e){
			System.out.println("\\u001B[31mError: no puedes dividir entre cero\\u001B[31m");
		}finally {
			System.out.println("\\u001B[0mPrograma finalizado\\u001B[0m");
		}
	
	
	
	
	
	
	}

}
