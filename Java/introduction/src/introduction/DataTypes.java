package introduction;
import java.util.Scanner;
public class DataTypes {

	public static void main(String[] args) {

		System.out.println("Hola CH35");
		
		
		/*Comentario
		  multilinea
		 */
		
		//Comentario una sola línea
		
		
		/*Tipos de dato*/
		//boolean = true o false = 1 bit
		boolean nuevoUsuario = true;
		System.out.println("Tipo de dato boolen" + nuevoUsuario);
		//char = Cáracter Unicode = 16 bits
		char caracter = 3;
		System.out.println("Tipo de dato char" + caracter);
		//byte = Entero con signo = 8 bits = [-128 a 127]
		byte piso = 127;
		System.out.println("Tipo de dato byte" + piso);
		//short = Entero con signo = 16 bits = [-32,768 to 32,767]
		short total = 1500;
		System.out.println("Tipo de dato short" + total);
		//int = Entero con signo = 32 bits = [-2,147,483,648 to 2,147,483,647]
		int visitas = 456320;
		System.out.println("Tipo de dato int" + visitas);
		//long = Entero con signo = 64 bits = [-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807]
		long distancia = 9223372036854775l;
		System.out.println("Tipo de dato long" + distancia);
		//float = Flotante de precisión simple = 32 bits = Sufficient for storing 6 to 7 decimal digits
		float estatura = 15.50f;
		System.out.println("Tipo de dato float" + estatura);
		//double = Flotante de precisión doble  = 64 bits = Sufficient for storing 15 decimal digits
		double precio = 15263.20;
		System.out.println("Tipo de dato double" + precio);

		/** Java Type Casting **

		Widening Casting (automatically) - converting a smaller type to a larger type size
		byte -> short -> char -> int -> long -> float -> double
		
		Narrowing Casting (manually) - converting a larger type to a smaller size type
		double -> float -> long -> int -> char -> short -> byte
		 */
		
			/*Widening Casting
				Widening casting is done automatically when passing a smaller size type to a larger size type:*/
				int myInt = 9;
			    double myDouble = myInt; // Automatic casting: int to double
		
			    System.out.println(myInt);      // Outputs 9
			    System.out.println(myDouble);   // Outputs 9.0
			
			/*Narrowing Casting
				Narrowing casting must be done manually by placing the type in parentheses in front of the value:*/
			    double myDouble2 = 9.78d;
			    int myInt2 = (int) myDouble; // Manual casting: double to int
			    
		
			    System.out.println(myDouble2);   // Outputs 9.78
			    System.out.println(myInt2);      // Outputs 9
	
	
			    String number = "100";

			    byte numberByte = Byte.parseByte(number);
			    System.out.println(numberByte); 
			    short numberShort = Short.parseShort(number);
			    System.out.println(numberShort); 
			    int numberInt = Integer.parseInt(number);
			    System.out.println(numberInt); 
			    long numberLong = Long.parseLong(number);
			    System.out.println(numberLong); 
			    float numberFloat = Float.parseFloat(number);
			    System.out.println(numberFloat); 
			    double numberDouble = Double.parseDouble(number);
			    System.out.println(numberDouble); 
			    
			    
			    /**Ejercicio**/
			    byte salas = 10;
			    byte asientos = 50;
			    float boleto = 75.50f;
			    float palomitas = 89.70f;
			    float bebidas = 35.50f;
			    

		        // Entrada del usuario
		        Scanner scanner = new Scanner(System.in);
		        System.out.println("Bienvenido al cine.");

		        // Solicitar la cantidad de boletos al usuario
		        System.out.print("Por favor, ingrese la cantidad de boletos que desea comprar: ");
		        int cantidadBoletos = scanner.nextInt();

		        // Verificar si hay suficientes asientos disponibles
		        if (cantidadBoletos <= asientos) {
		            // Calcular el total a pagar
		            float totalPagar = cantidadBoletos * boleto;

		            // Mostrar el resumen de la compra
		            System.out.println("\nResumen de la compra:");
		            System.out.println("Película: [Nombre de la película]");
		            System.out.println("Número de boletos: " + cantidadBoletos);
		            System.out.println("Precio por boleto: $" + boleto);
		            System.out.println("Total a pagar: $" + totalPagar);

		            // Actualizar la cantidad de asientos disponibles
		            asientos -= cantidadBoletos;

		            // Despedida
		            System.out.println("\nGracias por su compra. ¡Disfrute de la película!");
		        } else {
		            System.out.println("Lo siento, no hay suficientes asientos disponibles para esa cantidad de boletos.");
		        }
	
	}

}
