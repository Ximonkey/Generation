import './Navbar.css' //Importación de CSS

//Crear funciòn que contiene el marcado para que viva nuestro còdigo
const Navbar = () => {
    return (
        <>{/*Fragmento*/}

            <div className='navbar--container'>
                <div className='navbar--tittle'>
                    <h1>GenMex-35</h1>
                </div>
                <div className='navbar--links'>
                    <div className='navbar--link'>
                        <a href="#">Home</a>
                    </div>
                    <div className='navbar--link'>
                        <a href="#">About</a>
                    </div>
                    <div className='navbar--link'>
                        <a href="#">Astros</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
