package controlFlow;
import java.util.Scanner;

public class ControlFlow {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
	/** Estructura condicional **/
		
		
		/*
		 
				//if simple
				
				boolean conexion = true;
				
				if (!conexion) {
					System.out.println("Su conexión a internet es inestable. No se pudo cargar el sitio web...");
				}
				
				//if - else simple
				
				if (conexion) {
					System.out.println("Su conexión a internet es estable. Cargando sitio web...");
				}else {
					System.out.println("Su conexión a internet es inestable. No se pudo cargar el sitio web...");
				}
		
				//if anidados
				
				boolean usuario = true;
				String nombreUsuario = "";
				String contraseña1 = "";
				String contraseña2 = "";
				
				if (conexion) {
					if(usuario) {
						System.out.println("Ingrese el nombre de usuario:");
						nombreUsuario = scanner.nextLine();
						
						System.out.println("Ingrese la contraseña:");
						contraseña1 = scanner.nextLine();
						
						System.out.println("Ingrese la contraseña nuevamente:");
						contraseña2 = scanner.nextLine();
						
						// Verificar si las contraseñas coinciden
				        if (contraseña1.equals(contraseña2)) {
				            System.out.println("Las contraseñas coinciden. Acceso permitido.");
				        } else {
				            System.out.println("Las contraseñas no coinciden. Acceso denegado.");
				        }
		
				        
				        
					}else {
						System.out.println("Por favor, crea una cuenta");
					}
				}else {
					System.out.println("Su conexión a internet es inestable. No se pudo cargar el sitio web...");
				}
				
				//Switch
				
				System.out.println("Bienvenido al sistema. Por favor eliga una opción");
				System.out.println("1. Ver tienda");
				System.out.println("2. Mostrar información de contacto");
				System.out.println("3. Ver mi perfil");
				System.out.println("4. Cerrar sesión");
				
				int opcion = scanner.nextInt();
				
				switch(opcion) {
				
				case 1:
					System.out.println("Cátalogo 2024");
					System.out.println("Botas Terrenaitor | 20MX - 27MX | $350");
					System.out.println("Tacones Elegant | 20MX - 25MX | $250");
					System.out.println("Tenis Git Rush | 20MX - 29MX | $450");
					System.out.println("Chanclas Fly | 20MX - 28MX | $150");
					break;
				case 2:
					System.out.println("Información de contacto\n"+
										"Ubicación: C. Ubicada 123 Col. Maps CP. 45609\n"+
										"Horario: L-S 09am - 8pm | D 01pm - 5pm\n"+
										"Teléfono: 333 333 333\n");
					break;
				case 3:
					System.out.println("Nombre de Usuario: "+ nombreUsuario);
					System.out.println("Contraseña: "+ contraseña1);
					break;
				case 4:
					System.out.println("Gracias por su visita.");
					break;
				}
				
				//Operador Ternario
				
				 //Es una forma reducida de escribir un if-then-else.
				 //(expresion)?valor_true:valor_false;
				
				
				System.out.println(contraseña1.equals(contraseña2) ? "Las contraseñas coinciden. Acceso permitido." : "Las contraseñas no coinciden. Acceso denegado.");
		*/		
				
			
				
		
	/** Estructura repetitiva **/
		
			/*
		
			//while
			
				//Crear un programa que solicite al usuario un número. Dicho número será tomado como el número final de una cuenta. 		
			
				System.out.println("Bienvenido, ingrese un número");
				int z = 1;
				int n = scanner.nextInt();
				System.out.println("Contando...");
				while(z<=n) {
					System.out.println(z);
					
					z++;
				}
			*/
				
		
			//do - while
			
				//https://elcodigoascii.com.ar
		
				/*
				 * 
				boolean repetir = true;
				char caracter = ' ';
				String tipo = "ni letra ni numero";
				
				do{
					System.out.println("Binevenidoo a Magin Program");
					System.out.println("Ingrese un caracter");
					caracter = scanner.next().charAt(0);
					
					if(caracter >= 48 && caracter <= 57) {
						tipo = "numero";
					}
					if((caracter>=65 && caracter <=90) || (caracter>=97 && caracter <=122)) {
						tipo = "letra";
					}
					
					System.out.println("El caracter introducido es de tipo " + tipo);
		            System.out.println("¿Desea intentarlo otra vez? (true/false)");
		            repetir = scanner.nextBoolean();
		
					
				}while(repetir);
				
				
				*/
				/*
		
				//Ejercicio 2
		 
				boolean repetir = true; 
				int opcion = 1;	
				int dinero = 0;
				int añadir = 0; 
				int retirar = 0;
				
				do {
					 
					System.out.println("Bienvenido al cajero automático. Seleccione una opción");
					System.out.println("1. Consultar saldo ");
					System.out.println("2. Ingresar dinero");
					System.out.println("3. Retirar dinero");
					System.out.println("4. Salir");
					
					opcion=scanner.nextInt();
					
					System.out.println("Usted eligió la opción "+ opcion);
					
					switch(opcion) {
					case 1:
						System.out.println("Su saldo es "+ dinero);
						break;
					case 2:
						System.out.println("Ingrese el monto por añadir");
							añadir=scanner.nextInt();
							dinero+=añadir;
						break;
					case 3:
						System.out.println("Ingrese el monto a retirar ");
						retirar=scanner.nextInt();
						if (dinero>=retirar) {
							dinero-=retirar;
						}else {
							System.out.println("Saldo insuficiente");
						}
						break;
					case 4:
						repetir = false;
						break;
					
					}
					
					System.out.println("¿Desea elegir otra opción? (true/false) ");
					repetir=scanner.nextBoolean();
					
				}while(repetir); 
				*/
		
		
			//for
				/*
				for (int i = 1; i <= 10; i++) {
				    System.out.println("Contando números del 1 al 10. "+i);
				}
			
				int tabla = 1;
				int numero = 1;
				
				//
				
				System.out.println("Crea tu tabla de multiplicar. Ingresa cualquier número.");
	            tabla = scanner.nextInt();
	            System.out.println("¿Cuántas veces quieres multiplicar el número?");
	            numero = scanner.nextInt();
	            
				for(int i = 1; i <=numero; i++ ) {
					 System.out.println(tabla + " x " + i + " = " + (tabla * i));
				}
		
				 */
		
	/** Instrucciones de Salto **/
		
		//Break
		
		/*
		
		// break para salir de un bucle cuando se encuentra un número par
        for (int i = 1; i <= 10; i++) {
            System.out.println("Número: " + i);
            
            if (i % 2 == 0) {
                System.out.println("¡Se encontró un número par!");
                break; // Salir del bucle cuando se encuentra un número par
            }
        }
		
		*/
		
		//Continue
		
		/*
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) {
                System.out.println("¡Se encontró un número par! (se omitirá)");
                continue; // Omitir la impresión de números pares y continuar con la siguiente iteración
            }
            
            System.out.println("Número: " + i);
        }
        
		*/
		
		
			// Cerrar el scanner
	        scanner.close();
	}

}
