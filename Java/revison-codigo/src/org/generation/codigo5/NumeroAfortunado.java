package org.generation.codigo5;

import java.util.Scanner;//Importar scanner

public class NumeroAfortunado {

	public static void main(String[] args) { // Añadir

		Scanner scanner = new Scanner(System.in); // Declaración del scanner

		System.out.print("Introduzca un número para conocer si es o no afortunado: "); // Comillas dobles
		int numero = scanner.nextInt();// Cambiar nombre y tipo de dato a la variable + metodoscanner

		int afortunado = 0;
		int noAfortunado = 0;

		int contador = numero;
		
		while (contador > 0) {
			int digito = (int) (contador % 10);

			if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
				afortunado++;
			} else {
				noAfortunado++;
			}
			contador /= 10;
		}

		if (afortunado > noAfortunado) {
			System.out.println("El " + numero + " es un número afortunadortunado.");// corregir printnl
		} else {
			System.out.println("El " + numero + " no es un número afortunadortunado.");
		}

		
		scanner.close();//cerrar el objeto Scanner
		
	}

}
