package org.generation.threads;

/*
 * Threads allows a program to operate more efficiently by doing multiple things at the same time.
 * Threads can be used to perform complicated tasks in the background without interrupting the main program.
 */
public class Main {

	public static void main(String[] args) {
		
		Prueba1 pedido1 = new Prueba1(65);
		Prueba1 pedido2 = new Prueba1(87);
		
		Prueba2 pedido3 = new Prueba2(41);
		Prueba2 pedido4 = new Prueba2(96);
		
		Thread hiloPedido1 = new Thread(pedido1);
		Thread hiloPedido2 = new Thread(pedido2);
		Thread hiloPedido3 = new Thread(pedido3);
		Thread hiloPedido4 = new Thread(pedido4);
	
		
		hiloPedido1.start();
		hiloPedido2.start();
		hiloPedido3.start();
		hiloPedido4.start();
		
		
		/*
		Prueba1 hilo1 = new Prueba1();//extends
		
		Thread hilo2 = new Thread(new Prueba2());//implements
		
		hilo1.start();
		hilo2.start();
		*/
	}
}
