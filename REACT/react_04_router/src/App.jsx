import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Inicio from './components/Inicio'
import Contacto from './components/Contacto'
import SobreNosotros from './components/SobreNosotros'

// - Routes actúa como contenedor padre de todas las rutas individuales que se crearán en la aplicación.
/* - Route Es la ruta 'hija' de cada componente. Recibe dos atributos
      1. path: Especifíca la ruta (URL) a seguir.
      2. element: Especifíca el componente que se renderiza
*/
function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='about-us' element={<SobreNosotros />} />
      <Route path='contact' element={<Contacto />} />
      </Routes>

    </>
  )
}

export default App
