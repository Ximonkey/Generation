package introduction;
import java.util.Scanner;
public class Operators {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		/**Java Logical Operators**
		You can test for true or false values with logical operators.
	
		
		Operator	Name		Description	
		&& 			Logical and	Returns true if both statements are true		
		|| 			Logical or	Returns true if one of the statements is true	
		!			Logical not	Reverse the result, returns false if the result is true	*/
	
		
		/**Ejercicio 1 **/
		System.out.println("Bienvenido a SkyFun");
		System.out.println("Ingrese el numero de adultos");
		int adultos = scanner.nextInt();
		System.out.println("Ingrese el numero de niños");
		int niños = scanner.nextInt();
		

        // Verificar elegibilidad para descuento
        if (niños != 0 && adultos >=2) {
            System.out.println("¡Felicidades! Niño entre gratis por cada 2 adultos");
        } else {
        	System.out.println("Lo sentimos, no aplica la promoción");
        }
        
		
		/**Ejercicio 2**/
        double costoBase = 100.0;
        boolean esMexicano = false;
        boolean esEstudiante = false;
        boolean esMaestro = false;
        boolean esPersonaMayor = false;

                System.out.println("¿Eres mexicano? (true/false):");
                esMexicano = scanner.nextBoolean();
                

                if (esMexicano) {
                    costoBase *= 0.9;  // Descuento del 10% para mexicanos

                    // Preguntar si es estudiante, maestro o persona mayor solo si es mexicano
                    System.out.println("¿Eres estudiante? (true/false):");
                    esEstudiante = scanner.nextBoolean();
                    if (!esEstudiante) {
                    System.out.println("¿Eres maestro? (true/false):");
                    esMaestro = scanner.nextBoolean();
                    if(!esMaestro){
                        System.out.println("¿Eres adulto mayor de 60 años? (true/false):");
                        esPersonaMayor = scanner.nextBoolean();
                        }
                    }

                    // Aplicar descuento adicional del 20% para estudiantes, maestros y personas mayores
                    if (esEstudiante || esMaestro || esPersonaMayor) {
                        costoBase *= 0.8;
                    }
                }

                // Mostrar el costo del boleto después de aplicar los descuentos
                System.out.println("\nResumen del costo del boleto:");
                System.out.println("Costo base del boleto: $" + costoBase);
  
		
	}
}