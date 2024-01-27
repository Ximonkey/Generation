package org.generation.lcd3;

public class MangosNaranjas {
	
	//Variables
	private int mangos;
	private int naranjas;
	
	//Métodos
	private int obtenerMaxicoComunDivisor(int a, int b) {
		while(b != 0) {
			int temp = b;
			b = a%b;
			a = temp;
		}
		return a;
	}
	
	//Métodos
	public void imprimirResultado(){
		int maxMangosCaja = obtenerMaxicoComunDivisor(mangos, naranjas);
		int numeroCajas = mangos/maxMangosCaja;
		
			System.out.println("El número de cajas es: "+numeroCajas);
		    System.out.println("El número de mangos en una caja es: " + maxMangosCaja);
		    System.out.println("El número de naranjas en una caja es: " + naranjas/maxMangosCaja);
		}
	
	
	//Constructor
	public MangosNaranjas(int mangos, int naranjas) {
		this.mangos = mangos;
		this.naranjas = naranjas;
	}
	//Setters Getters
	public int getMangos() {
		return mangos;
	}
	public void setMangos(int mangos) {
		this.mangos = mangos;
	}
	public int getNaranjas() {
		return naranjas;
	}
	public void setNaranjas(int naranjas) {
		this.naranjas = naranjas;
	}
	
	//toString
	@Override
	public String toString() {
		return "MangosNaranjas [mangos=" + mangos + ", naranjas=" + naranjas + "]";
	}
	
	
	

				
				
}
