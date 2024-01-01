const buttonRandom = document.getElementById("button");
const buttonReset = document.getElementById("reset");
const backgroudColor = document.body.style.backgroundColor;

//Vamos a declarar una función que genera 

const random = (number) => {
    return Math.floor(Math.random() * (number + 1));
}

//Crear eventos de click para que al presionar un botón pase algo
buttonRandom.addEventListener("click", () => {
    const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = randomColor;
});

//Boton de reset
buttonReset.addEventListener('click', () => {
    document.body.style.background = colorFondo;
})