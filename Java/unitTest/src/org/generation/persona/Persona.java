package org.generation.persona;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Persona {

	//Atributos
	private String nombre;
	private String apellido;
	private String email;
	private int edad;
	
	//Constructor
	public Persona(String nombre, String apellido, String email, int edad) {
		super();
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.edad = edad;
	}

	
	
	//Métodos de comportamiento
	
	
	public boolean validarEmail () {
		Pattern pattern = Pattern.compile("@gmail.com", Pattern.CASE_INSENSITIVE);
	    Matcher matcher = pattern.matcher(this.email);
	    boolean matchFound = matcher.find();
		return matchFound;
	}

	   //
	
	
	//Getters y Setters
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	//Método toString
	@Override
	public String toString() {
		return "Persona [nombre=" + nombre + ", apellido=" + apellido + ", email=" + email + ", edad=" + edad + "]";
	}
	
	
	
	
	
	
}
