
import './Astros.css'
import { useEffect, useState } from 'react';
import Astro from './Astro';

//Definir la URL de la API
const ASTROS_URL = 'http://api.open-notify.org/astros.json';

//Mandar llamar la API utilizando Hooks (useState y useEffect)

//Componente para agregar la información de la API dentro de las cards
const Astros = () => {

    //Implementando useState
    const [astros, setAstros] = useState([]);

    //Implementando useEffect
    useEffect(() => {
        fetchAstros();
    }, []);

    //Crear función fetch para conectarse a la API
    const fetchAstros = () => {
        fetch(ASTROS_URL)
            .then(response => response.json())
            .then(data => setAstros(data.people)) //Para que la información viva dentro del componente actualizado utilizo setAstros y le paso los datos 'people' de la API
            .catch(error => console.error(error))
    }

    //Enviar la información de la API a las cards utilizando .map sobre el array 'astros'
    return (
        <>
            {
                //astro funciona como los elementos que se recorren en el array 'astros' y .map recibe dichos elementos, más un index y una función tipo callback
                astros.map((astro, index) => (
                    //Exporto el componente Astro
                    //Crear una llave única para cada elemento del array (key)
                    //Desestructurar el array para que cada elemento reciba los props definidos dentro de Astro ({name, craft})
                    <Astro key={index} {...astro} />
                ))
            }
        </>
    )

}

export default Astros