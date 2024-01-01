/*
Manipulación del DOM.
    document.getElementById (Traer elementos por Id)
    document.getElementByClassName (Trae elementos por Clase)
    document.getElementByTagName (Trae elementos por Etiquetas)
*/

//getElementById
const titulo = document.getElementById("tittle1");
console.log(titulo);
console.log(titulo.innerText);

//getElementByClassName
const titulos = document.getElementById("tittle");
console.log(titulos);
/*console.log(titulos.length);*/
console.log(typeof titulos);

//getElementByTagName
const tituloH3 = document.getElementsByTagName("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);

/*Métodos para llamar elementos mediante selectores CSS
Se usa para procesos más especifícos, la sintaxis es querySelector
    document.querySelector("selector"); 
    document.querySelectorAll()Selecciona los elementos que se especifìquen.
Siempre va a traer el elemento con el sector indicado
*/

//querySelector
const query = document.querySelector("#tittle");
/*console.log(query.innerText);*/

const queryClass = document.querySelector(".tittle");
console.log(queryClass);

const queryClassAll = document.querySelectorAll(".tittle");
console.log(queryClassAll);

//Manipular elementos del DOM (styles) con JS
titulo.style.textAlign = "center";
titulo.style.color = "#5058F2";

//Manipular el texto de un elemento
const titulo2 = document.querySelector("#tittle2");
titulo2.innerText = "Sesión de Manipulación del DOM";
titulo2.style.color = "#F23030";

/*
Métodos para crear y agregar elementos en el DOM. Este proceso se divide en dos: "Crear el nodo y agregar el nodo"
    Crear nodos
        document.creatElement("element") --> Crea elementos a partir de etiquetas.
        document.createTextNode("text") --> Crea texto dentro de las etiquetas.
*/
const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");

/*
Agregar nodos
    Mandamos a llamar el elemnto padre y le pasasmos la propiedad conb la constante que guarda el nodo creado.
        parentElement.appendChild(const);
        parentElement.append(const);
        parentElement.insertBefore(const);
        parentElement.insertAdjacentElement(const);
*/

//Obtener el elemnto padre, por tag class o id
const parentElement = document.getElementById("dif");
//Crear texto
const textNodo1 = document.createTextNode("Imagen agregada desde el DOM");
//Insertar texto
nodo1.appendChild(textNodo1);
//Insertar nodo en elemento padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = " 'Karla', sans-serif";
parentElement.style.color = "#201226";

/*Agregar Imagen
insertar el imgNodo en el elemento padre para definirlo posteriormente*/
parentElement.appendChild(imgNodo);
//Accwder a las propiedades de la imagen
imgNodo.src = "./src/assets/octo.jpg"
imgNodo.alt = "Octocat-gitHub";
imgNodo.width = "300";

/*Ota forma de leer y manipular nodos
document.outerHTL (leer)
node.innerHTML (escribir sobre el nodo)
*/
const elementoOuter = titulo2.outerHTML;
console.log(elementoOuter);
titulo2.innerHTML = "Manipulación del DOM - CH35"