package org.generation.test;

import static org.junit.Assert.assertEquals;

import org.generation.calculator.Calculator;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class TestCalculator {

	//1.Mandar a llamar un objeto de tipo calculator
	
	private Calculator testCalculator;
	
	//1.1. Crear un método llamado setUp para instanciar mi calculadoraTest como nuevo objeto de tipo Calculadora y le debo indicar que se ejecute antes de todos los test con la anotación @BeforeEach
	@BeforeEach
	public void setUp() {
		testCalculator = new Calculator();
}
	
	//2.Comenzar a crear métodos de prueba (test) que no retornan (void)
	
	@Test
	public void sumarTest() {
		assertEquals(42, testCalculator.sumar(40, 2));
	}
	//3.Revisar el archivo 'module-info.java' y eliminar los módulos que se importaron
	//4. Importar 'Assert.assertEquals'
	@Test
	public void restarTest() {
		assertEquals(38, testCalculator.restar(40, 2));
	}
	@Test
	public void multiplicarTest() {
		assertEquals(80, testCalculator.multiplicar(40, 2));
	}
	@Test
	public void dividirTest() {
		assertEquals(20, testCalculator.dividir(40, 2));
	}
}
