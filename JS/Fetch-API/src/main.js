//Programación sincrónica

function two() {
    console.log("Two");
}

function one() {
    console.log("One");
    two();
    console.log("Three");
}

one();

//Prograsmción asíncrona (setTimeOut). Recibe una función anónima y establece un tiempo (en milisegundos) de ejcución para cumplir con la condición de asincronismo.

const twoAsync = () => {
    setTimeout(() => {
        console.log("TwoAsync");
    }, 5000);
}

const oneAsync = () => {
    setTimeout(function () {
        console.log("OneAsync");
    }, 2000);
    twoAsync();
    console.log("ThreeAsync");
}

oneAsync();


/**
 * Trabajando con promesas mediante Fetch API
 */
const url = "https://jsonplaceholder.typicode.com/users";

// --> Usando fetch para mostrar en consola
// Si se cumple la promesa, vamos a traer los datos de la API y se convertirá en tipo json para poder mostrarlos en consola
fetch(url)
    .then(data => data.json())
    .then(data => {
        console.log(data); // Mostrando en consola todos los usuarios de la API
        console.log(data[0].name); // Mostrando en consola el usuario con el índice 0 y trayendo solamente su nombre
    })
    .catch(error => console.error("¡Ups!, algo salió mal", error)); // Mensaje de error

//Usando fetch para mostrar en navegador
const botonInfo = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");
//Variable para guardar la información que se va a traer desde la API: debe ser de tipo null
let post = null;

//Consumiendo API con fetch (promesa)
botonInfo.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users/6")
        .then(response => response.json())
        .then(response => {
            post = response;//Guarda los datos de response en la variable de tipo null, para que modifique el dato.
            mostrarDatos(post);
        })
        .catch(error => console.error("¡Problemas!", error));
})



//Funciòn que me permita manipular la variable de tipo null
//Quiero traer name, username, email, phone de la API
const mostrarDatos = (post) => {
    // Creando nodos (elementos) mediante DOM Manipulation
    const name = document.createElement("h2");
    const username = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");
    //Ponernos en el HTML (innerHTML)
    name.innerHTML = post.name;
    username.innerHTML = post.username;
    email.innerHTML = post.email;
    phone.innerHTML = post.phone;
    //Hacer que aparezcan en el navegador
    info.appendChild(name);
    info.appendChild(username);
    info.appendChild(email);
    info.appendChild(phone);
}

//Fetch para mostrar en navegador (mostrar productos)

const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");

let productos = null;

botonProductos.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response => {
            productos = response;

            mostrarProductos(productos);
        })
        .catch(error => console.error("Algo salió mal", error));
})

//Funcion para crear, agregar y mostrar elementos desde el DOM

const mostrarProductos = (productos) => {
    productos.map((productos) => { //El método map toma el array (objeto en JS y crea nuevos arreglos que se pueden manupular de manera individual. Así, evitamos el uso de un ciclo foreach)
        const tittle = document.createElement("h2");
        const image = document.createElement("img");
        const price = document.createElement("h3");
        const description = document.createElement("p");
        const category = document.createElement("p");
        const separador = document.createElement("hr");

        //Envivar a HTML con innerHTML
        tittle.innerHTML = productos.tittle;
        image.src = productos.image;
        image.width = 200;
        price.innerHTML = productos.price;
        description.innerHTML = productos.description;
        category.innerHTML = productos.category;


        //Mostrarlos en navegador al agregarlos a su padre
        tienda.appendChild(tittle);
        tienda.appendChild(image);
        tienda.appendChild(price);
        tienda.appendChild(description);
        tienda.appendChild(category);
        tienda.appendChild(tittle);
        tienda.appendChild(separador);
    })
}

//Método POST utilizando fetch
fetch("https://jsonplaceholder.typicode.com/posts", {
    //Indicar que es un método de tipo POST
    method: "POST",
    //Crear body en el nuevo objeto siguiendo las mismas llaves de la API existente.
    body: JSON.stringify({
        userId: 2014,
        tittle: "Carta de amor a los muertos",
        body: "Es la primera novela de la escritora estadounidense Ava Dellaira, publicada en 2014. Trata de una novela juvenil contada a través de una serie de cartas escritas a personajes muertos por una chica de 15 años llamada Laurel, que está de duelo por la pérdida de su hermana mayor llamada May."
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(json => {
        console.log(json)
    })
    .catch(error => console.error("Error", error));

/*====Programación asíncrona====*/

//Función tipo felcha de tipo async-await
//Indico que es una funciòn asìncrona con la palabra async antes de los paràmetros.
const getUser = async () => {
    //Para qye se cumpla la promesa no utilizamos then, sino try. Para errores e sigue utilizando catch.
    try {
        //Retardo para que se ejecute de manera asìncrona. Tengo que crear una nueva promesa que recibe un setTimeout
        await new Promise(resolve => setTimeout(resolve, 3000));
        //Mi promesa que se ejecuta
        const response = await fetch("https://jsonplaceholder.typicode.com/users/4");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error inexplicado", error);
    }
}
getUser();

/*====Local Storage====*/
//Nos permite crear, modificar, eliminar, guardar objetos de Javascript de manera local (en el equipo).

//Crear un objeto de JS con sus llaves y valores
const user = [
    {
        id: 1,
        nombre: "Ximena",
        apellido: "Muñoz",
        email: "Ximonkey@gmail.com",
        posicion: "Estudiante",
        empresa: "Generation"
    },
    {
        id: 2,
        nombre: "Diana",
        apellido: "Alvarez",
        email: "Diana@gmail.com",
        posicion: "Java Dev",
        empresa: "Cofepris"
    }
]

//Convertir el objeto creado a notaciòn json y almacenarlo en el localStorage
localStorage.setItem("usuario", JSON.stringify(user));

//Traer el objeto desde el local storage
const users = JSON.parse(localStorage.getItem("usuario"));

console.log(users);
console.log(`${user[1].nombre} con posición ${user[1].posicion}, trabaja en ${user[1].empresa}`);