import './products.css'

// props estructurados
// const Products = (props) => {

    const Products = ({img, tittle, description, price}) => {
    return (
        <>
            {/* Agregando las propiedades directamente al componente
            
            <div className='cards'>
                <div className='products--card'>
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933" alt="" />
                    <h3>Fashion</h3>
                    <p>Tennis Fitness Running Purple</p>
                    <h4>$1958</h4>
                </div>
            </div> */}
            {/* Props estructurados. Asignar distintas propiedades desde props como parametro de la función */}
            {/* <div className='cards'>
                <div className='products--card'>
                    <img src={props.img} alt="" />
                    <h3>{props.tittle}</h3>
                    <p>{props.description}</p>
                    <h4>{props.price}</h4>
                </div>
            </div> */}
            {/* Props desestructurados. Permite asignar datos de un objeto a una variable separada para que dicha variable pueda contener los datos provenientes del objeto.
        * No utilizamos `props` como parámetro de la función, sino que, asignamos parámetros a cada elementos y los llamados directamente en dichos elementos.
        * Los props desestructadores viven como parámetros, pero entre llaves y se les asigna un nombre específico        
        */}
            <div className='cards'>
                <div className='products--card'>
                    <img src={img} alt="" />
                    <h3>{tittle}</h3>
                    <p>{description}</p>
                    <h4>{price}</h4>
                </div>
            </div>
        </>
    )
}

export default Products;
