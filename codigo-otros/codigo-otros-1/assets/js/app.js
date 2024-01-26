/*
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);

*/

const usersEndpoint = 'https://api.github.com/users'; //Referenciar la url en una sola variable
const $n = document.querySelector('.name');  // Utilizar el selector de clase
const $b = document.querySelector('.blog'); // Utilizar el selector de clase
const $l = document.querySelector('.location');

async function displayUser(username) { //Utilizar la sintaxis de la función async
  try {
    $n.textContent = 'Cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); //guardar los datos en formato JSON
    console.log(data);
    //sintaxis template literals (``)
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.error('Error:', err); //Muestra un error más preciso
  $n.textContent = `Algo salió mal: ${err}`;
}


displayUser('stolinski');