/*
Para manipular la información de un usuario necesitas crear un perfil mediante un objeto de JS.
*/
const user = {
    username: 'Ximonkey',
    age: '20',
    email: 'ximonkey28@gmail.com',
    favfilms: ['JorgeCurioso', 'LLuvia de hamburguesas', 'Jumaji']
}

//Crear una función que permita ingresar el objeto del perfil en el nodo padre

const createUser = (user) => {
    document.getElementById("username").textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    //Mostrar elementos en formato de lista
    const ul = document.getElementById("favfilms");
    user.favfilms.forEach(film => {
        const li = document.createElement("li");
        li.textContent = film;
        ul.appendChild(li);
    })
    //Modificar estilos para quitar viñetas
    ul.style.listStyleType = "none";
    ul.style.padding = "0";
    ul.style.color = "#D9B70D";
}

//Invocar función
createUser(user);

/*Eventos para actualizar username
 */

const inputName = document.getElementById("name");
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");

profileBtn.addEventListener("click", () => {
    userName.textContent = inputName.value;
})
