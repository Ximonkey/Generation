/*package com.generation;

public class Codigo4 {

    Scanner s = new Scanner();
    
    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    String j1 = s.nextLine();
    
    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    Scanner s2 = new Scanner();
    String j2 = s.nextLine();
    
    if (j1 == j2)) {
      System.out.println("Empate");
    } else {
      int g = 2;
      switch(j1) {
        case "piedra":
          if (j2 == "tijeras") {
            g = 1;
          }

        case "papel":
          if (j2 == "piedra") {
            g = 1;
          
        case "tijera":
          if (j2.equals("papel")) {
            g = 1;
          }
          break;
        default:
      }
      System.out.println("Gana el jugador " + g);
    }
  
  
}
*/

import java.util.Scanner;

public class Codigo4 {

	public static void main(String[] args) {  // implementación del public static void main(String[] args), es el punto de entrada del programa Java. 
		
		Scanner s = new Scanner(System.in); //declaración de los objetos Scanner para que utilicen new Scanner(System.in) en lugar de simplemente new Scanner(), lo que permite leer la entrada estándar del usuario.
	    
	    
		System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
	    String j1 = s.nextLine();
	    
	    System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): "); //Se ha corregido el mensaje que solicita el turno del jugador 2 para que refleje correctamente el número del jugador.
	    String j2 = s.nextLine();
	    
	    if (j1.equals(j2)) {
	      System.out.println("Empate");
	    } else {
	    	

	      int g = 2;
	      
	      switch(j1) {
	      
	        case "piedra":
	          if (j2.equals("tijeras")) {
	            g = 1;
	          }
	          break; //Se ha agregado la instrucción break después de cada caso en el bloque switch(j1) para evitar que se ejecuten otros casos después de que se haya encontrado un caso coincidente.
	        case "papel":
	          if (j2.equals("piedra")) {
	            g = 1;
	          }
	          break;
	        case "tijera":
	          if (j2.equals("papel")) {
	            g = 1;
	          }
	          break;
	      default: 
	    	  System.out.println("Ingrese un valor válido"); //Esto imprimirá un mensaje indicando que se debe ingresar un valor válido.
	      }
	      System.out.println("Gana el jugador " + g);
	    }
    
    }
  
}