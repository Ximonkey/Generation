package org.generation.threads;

public class Prueba2 implements Runnable {
	
	private int numeroPedido;
	
	public Prueba2(int numeroPedido) {
		this.numeroPedido = numeroPedido;
	}
	
	@Override
	public void run() {
		
			System.out.println("Pedido "+numeroPedido+" procesado");
		
	}

}
