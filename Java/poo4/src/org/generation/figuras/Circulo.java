package org.generation.figuras;

/************Clase Circulo ***********/
public class Circulo extends Figura {
	private double radio;

	public Circulo(double radio) {
		this.radio = radio;
	}
	
	@Override
	public double calcularArea() {
		return Math.PI * radio * radio;
	}
	
	//Instanciando un objeto de tipo Rectangulo
			public static void main(String[] args) {
				Circulo circulo = new Circulo(12);
				System.out.println("El área del circulo es " + circulo.calcularArea() + " metros cuadrados");
				
				circulo.infoFigura();
			}
}