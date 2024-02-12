package org.generation.threads;

public class Prueba1 extends Thread {
	
	private int numeroPedido;
		
		public Prueba1(int numeroPedido) {
			this.numeroPedido = numeroPedido;
		}
		
	public void run() {
		System.out.println();System.out.println("Pedido "+numeroPedido+" procesado");
	}

}
