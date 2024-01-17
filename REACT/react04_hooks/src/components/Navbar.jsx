import './Navbar.css'//importacion de css
import NasaLogo from '../assets/ISS_logo.svg'

//Crear funcion que contieene el marcado para que viva nuestro codigo
const Navbar = () =>{
    const url1 = 'https://www.nasa.gov/international-space-station/';
    const url2 = 'https://www.nasa.gov/mission/apollo-13/';
    const url3 = 'http://open-notify.org/Open-Notify-API/People-In-Space/';
    return(
        <> 
        <div className='navbar--container'>
            <div className='navbar--title'>
                <a href={url1} id="link--logo">
                    <img src={NasaLogo} alt="" />
                </a>
            </div>
            <div className='navbar--links'>
                <div className="navbar--link">
                    <a href="#">HOME</a>
                </div>
                <div className="navbar--link">
                    <a href={url3}>APOLLO 13</a>
                </div>
                
                <div className="navbar--link">
                <a href={url2}>ATROS API</a>
                </div>
            </div>
        </div>

        </>
    )

}

export default Navbar;
