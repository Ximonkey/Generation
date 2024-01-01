/*
====Paradigmas de Programación==== 
*Programación imperativa: Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada.
*Progrmación basada en eventos:Se basa en la gestión y respuesta de eventos 
*Programación declarativa: Explicar lo que queremos obtener.
*Programación orientada a objetos: es un paradigma de programación, es decir, un modelo o un estilo de programación que nos da unas guías sobre cómo trabajar con él. Se basa en el concepto de clases y objetos.

====Programación Orientada a Objetos====

Una **Clase** es una plantilla para objetos
Un **Objeto** es una instancia de una clase.
Un **Atributo** es una propiedad del objeto.
un **Método** es lo que un objeto puede hacer (algoritmo)

Cuando se crean los objetos individuales, heredan todos los atribitos y métodos de la clase.

Ejemplo:
Clase: Animal
Objetos:             Perro  |   Gato
Atributos:  Nombre  Pancho  |    Paco
            Edad    4 años  |    3 años    
Métodos: Comer | Caminar

Un **constructor** sirve para inicializar el objeto y establecer sus atributos. Tiene el mismo nombre que la clase y no cuenta con ningún valor de retorno, ya que su función principal es inicializar el objeto y no devolver ningún valor.
*/
class persona {
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    constructor(nombre, apellido, edad, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }

    comer() {
        console.log("Bon apetit");
    }//Método

    bailar() {
        console.log("Dale hasta el suelo");
    }//Método

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Email: ${this.email}`);
        console.log(`Telèfono: ${this.telefono}`);

    }

    leer() {
        console.log("Leyendo un libro");
    }
}

let persona1 = new persona("Ximena", "Muñoz", 20, "ximonkey@hotmail.es", "3318712350"); //Instanciar objeto
let persona2 = new persona("Diana", "Laura", 21, "DianaLau@hotmail.es", "5532684523");
let persona3 = new persona("Emiliano", "Madrigal", 21, "Emiliano99@hotmail.es", "3365698525");
let persona4 = new persona("Ana", "Fernández", 22, "Ana_Fernandez@hotmail.es", "5524523625");
let persona5 = new persona("Fernanda", "Carmona", 23, "Carmona98@hotmail.es", "5866326236");
let persona6 = new persona("Uriel", "Cardoso", 25, "UrielCardo@hotmail.es", "3352685966");

console.log(persona1);
console.log(`El email de ${persona2.nombre} es ${persona3.email}`);

persona4.mostrarInfo(); //Invocar el método.
persona5.comer();
persona6.leer();

/*
====Pilares de la programación orientada a objetos====

====Herencia====
La herencia nos permite reutilizar el código programado en cada clase “heredando” o extendiendo las características de un objeto a sus “descendientes” o derivados. 
*/

//subclase / clase hija
class usuario extends persona {

    username = "";
    password = "";

    constructor(nombre, apellido, edad, email, telefono, username, password) {
        super(nombre, apellido, edad, email, telefono);
        this.username = username;
        this.password = password;
    }

    mostrarInfo() {
        console.log(`Usuario: ${this.username}`);
        console.log(`Contraseña: ${this.password}`);

    }
}

let usuario1 = new usuario("Rocio", "Hernández", 29, "rohdez@gmail.com", "5532336588", "Roo", "Ro99K2");

usuario1.mostrarInfo();

/*
====Polimorfismo====
Proviene de Poli = muchas, morfismo = formas. Se utiliza para crear métodos con el mismo nombre pero con diferente comportamiento.

Puedo utilizar el metodo calcular perimetro y calcular area para cada una de mis figuras. Es el mimo metodo pero toma en cuenta diferentes atributos.
*/

//Clase padre
class figura {
    lado = 0;
}

//Clase hija 
class figura2D extends figura {
    area = 0;
    perimetro = 0;

    calcularPerimetro() {
    }

    calcularArea() {
    }
}

//Clase Nieta
class triangulo extends figura2D {

}


/*
====Encapsulamiento====
Protege la información de manipulaciones no autorizadas.
*/

class Admin {
    #contraseña;

    constructor(usuario, contraseña) {
        this.usuario = usuario;
        this.#contraseña = contraseña;
    }

    verificarContraseña(contraseña) {
        return this.#contraseña === contraseña;
    }
}



/*
====Abstracción====
No es nada más que traer objetos del mundo real y aplicarlos a la programción mediante clases, métodos, costructores y objetos.

El formato JSON (JavaScript Object Notation) es comúnmente utilizado en JavaScript para representar datos de manera estructurada y fácilmente legible.
*/

// Definición de un libro utilizando abstracción con JSON
var libro = {
    "titulo": "El señor de los anillos",
    "autor": "J.R.R. Tolkien",
    "anioPublicacion": 1954,
    "genero": "Fantasía",
    "editorial": {
        "nombre": "Editorial Fantasy",
        "ubicacion": "Ciudad de la Imaginación"
    },
    "resumen": "Una épica historia que sigue las aventuras de Frodo Bolsón para destruir el Anillo Único."
};

// Acceso a la información a través de la abstracción
console.log("Título: " + libro.titulo);
console.log("Autor: " + libro.autor);
console.log("Año de publicación: " + libro.anioPublicacion);
console.log("Género: " + libro.genero);
console.log("Editorial: " + libro.editorial.nombre);
console.log("Ubicación de la editorial: " + libro.editorial.ubicacion);
console.log("Resumen: " + libro.resumen);

let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",

}
console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}
console.log(objetoLiteral);

//Principios solid
/*
Los 5 principios SOLID de diseño de aplicaciones de software son:

S – Single Responsibility Principle (SRP)
O – Open/Closed Principle (OCP)
L – Liskov Substitution Principle (LSP)
I – Interface Segregation Principle (ISP)
D – Dependency Inversion Principle (DIP).

S -  Principio de Responsabilidad Única- una clase debería tener una, y solo una, razón para cambiar
O - Principio de Abierto/Cerrado - las clases que usas deberían estar abiertas para poder extenderse y cerradas para modificarse.
L - Principio de Sustitución de Liskov - Esto significa que los objetos deben poder ser reemplazados por instancias de sus subtipos sin alterar el correcto funcionamiento del sistema o lo que es lo mismo: si en un programa utilizamos cierta clase, deberíamos poder usar cualquiera de sus subclases sin interferir en la funcionalidad del programa.  
I - Principio de Segregación de la Interfaz - Es preferible contar con muchas interfaces que definan pocos métodos que tener una interface forzada a implementar muchos métodos a los que no dará uso.
D - Principio de Inversión de Dependencias - Consiste en reducir las dependencias entre los módulos del código, es decir, alcanzar un bajo acoplamiento de las clases.
 */