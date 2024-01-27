package org.generation.codigo6;

import java.util.ArrayList;
import java.util.Scanner;

public class Codigo6 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayList<Integer> arregloRandom = new ArrayList<Integer>(); //Uso de ArrayList para almacenar los números generados aleatoriamente

        System.out.println("=====Arreglo de números======");

        for (int i = 0; i < 20; i++) {
            int numRandom = (int) (Math.random() * 381) + 20;
            arregloRandom.add(numRandom);
            System.out.print(arregloRandom.get(i) + " ");
        }

        System.out.println("\n¿Qué números quiere resaltar? Selecciona una opción "); // Se mejoraron los mensajes impresos para hacer el programa más claro y comprensible.
        System.out.println("Opción 1. Múltiplos de 5");
        System.out.println("Opción 2. Múltiplos de 7");
        int opcion = scanner.nextInt();//Mejora en la entrada de datos: Se utilizó scanner.nextInt()

        System.out.println("=====Multiplos de " + ((opcion == 1) ? 5 : 7) + "======"); //Uso de operador ternario
        for (int numero : arregloRandom) {
            if (opcion == 1 && numero % 5 == 0) {
                System.out.print("[" + numero + "] ");
            } else if (opcion == 2 && numero % 7 == 0) {
                System.out.print("[" + numero + "] ");
            } else {
                System.out.print(numero + " ");
            }
        }


        scanner.close();//Cierre del Scanner
    }
}
