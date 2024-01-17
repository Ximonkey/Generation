import './Main.css'
import logo_generation from '../assets/generation_logo.jpg'

const Main = () => {
    return (
        <>
            <div className='main--container'>
                <div className='main--head'>
                    <a href="https://mexico.generation.org" target='_blank'><img src={logo_generation} className='main--logo' alt="Logo Generation" /></a>
                </div>
            </div>
            <h1>React + Vite</h1>
            <h2>Astros API</h2>
        </>
    )
}
export default Main;