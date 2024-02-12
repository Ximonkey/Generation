package org.generation.persona;

public class PersonaMain {

	public static void main(String[] args) {
		
		//Instanciar objetos
		
		Persona Eunice = new Persona("Eunice", "Ceja", "Eunice@gmail.com", 30);
		Persona Ana = new Persona("Ana", "Fernández", "Fernández@gmail.com", 26);
		Persona Carlos = new Persona("Carlos", "Salinas", "CarlosSalinas@gmail.com", 31);
		Persona Ximena = new Persona("Ximena", "Muñoz", "XimenaMuñoz@gmail.com", 21);

		System.out.println(Eunice);
		System.out.println(Ana);
		System.out.println(Carlos);
		System.out.println(Ximena);
	
	
	}

}
