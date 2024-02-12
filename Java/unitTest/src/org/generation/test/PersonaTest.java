package org.generation.test;

import static org.junit.Assert.assertEquals;

import org.generation.persona.Persona;
import org.junit.Assert;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;





public class PersonaTest {

	/*Requerimientos:
	 * 	1. Instanciar 4 objetos con los parámetros establecidos en el constructor
	 * 	2. Crear métodos (4) para probar cada objeto instanciado con los valores de los atributos (getters)
	 * 	3. Crear un método de validación de email, donde el email debe cumplir con la condición de dominio @gmail.com ... si cumple con la condición, el test se evalúa correcto, si no, se evalúa como falla (método de test booleano, regex)
	 * */
	//Instanciar los objetos
	Persona Eunice = new Persona("Eunice", "Ceja", "Eunice@gmail.com", 30);
	Persona Ana = new Persona("Ana", "Fernández", "Fernández@gmail.com", 26);
	Persona Carlos = new Persona("Carlos", "Salinas", "CarlosSalinas@gmail.com", 31);
	Persona Ximena = new Persona("Ximena", "Muñoz", "XimenaMuñoz@gmail.com", 21);
	
	//Agregamos la anotación @Test e importamos.
	//Podemos agregar la anotación @DisplayName para personalizar el nombre de mi método test
    @Test
    @DisplayName("Eunice")
    public void testEunice(){        
        Assert.assertEquals("Eunice", Eunice.getNombre());
        Assert.assertEquals("Ceja", Eunice.getApellido());
        Assert.assertEquals("Eunice@gmail.com", Eunice.getEmail());
        Assert.assertEquals(30, Eunice.getEdad());
    }
    
    @Test
    @DisplayName("Ana")
    public void testAna(){
    	Assert.assertEquals("Ana", Ana.getNombre());
    	Assert.assertEquals("Fernández", Ana.getApellido());
    	Assert.assertEquals("Fernández@gmail.com", Ana.getEmail());
    	Assert.assertEquals(26, Ana.getEdad());
    }

    @Test
    @DisplayName("Carlos")
    public void testCarlos() {
    	Assert.assertEquals("Carlos", Carlos.getNombre());
    	Assert.assertEquals("Salinas", Carlos.getApellido());
    	Assert.assertEquals("CarlosSalinas@gmail.com", Carlos.getEmail());
    	Assert.assertEquals(31, Carlos.getEdad());
    }
    
    @Test
    @DisplayName("Ximena")
    public void testPersona4() {
    	Assert.assertEquals("Ximena", Ximena.getNombre());
    	Assert.assertEquals("Muñoz", Ximena.getApellido());
    	Assert.assertEquals("XimenaMuñoz@gmail.com", Ximena.getEmail());
    	Assert.assertEquals(21, Ximena.getEdad());
    }
    
    @Test
    @DisplayName("Validación regex de email @gmail.com")
    public void testEmailFormat() {
    	//Assert.assertTrue. Afirma que una condición es verdadera. Si no es así, arroja un AssertionError con el mensaje dado.
    	//.matches. Indica si el String coincide o no con la expresión regular dada. Una invocación de este método de la forma str.matches(regex) produce exactamente el mismo resultado que la expresión
    	
    	Assert.assertTrue(Eunice.getEmail().matches("^[A-Za-z0-9._%+-]+@gmail\\.com$"));
    	Assert.assertTrue(Ana.getEmail().matches("^[A-Za-z0-9._%+-]+@gmail\\.com$"));
    	Assert.assertTrue(Carlos.getEmail().matches("^[A-Za-z0-9._%+-]+@gmail\\.com$"));
    	Assert.assertTrue(Ximena.getEmail().matches("^[A-Za-z0-9._%+-]+@gmail\\.com$"));
    	
    	/*	^ representa el inicio del texto.
    	 * 	[A-Za-z0-9._%+-]+ indica que debe haber uno o más caracteres alfanuméricos, puntos, guiones bajos, porcentajes, signos más y signos menos.
    	 * 	@ representa el símbolo de arroba.
    	 * 	gmail\\.com se utiliza para verificar que la cadena "gmail.com" esté presente después del símbolo de arroba. 
    	 * 	El \\ se utiliza para escapar el carácter . y asegurarse de que se interprete literalmente como un punto y no como un carácter especial que coincida con cualquier carácter.
    	 * 	$ representa el final del texto.
    	 */
    }

	

}
