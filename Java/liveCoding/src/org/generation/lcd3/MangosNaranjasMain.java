package org.generation.lcd3;
import java.util.Scanner;

public class MangosNaranjasMain {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		//Solicitar información al usuario
		System.out.println("Ingrese el número de mangos");
		int numMangos = scanner.nextInt();
		System.out.println("Ingrese el número de naranjas");
		int numNaranjas = scanner.nextInt();
		
		//Instanciar objeto
		MangosNaranjas cajas = new MangosNaranjas(numMangos, numNaranjas);
		cajas.imprimirResultado();

        scanner.close();
	
	}

}
