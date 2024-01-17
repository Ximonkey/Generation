
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Button from './components/Button'
import Products from './components/Products'

function App() {
  const imgFashion = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933";
  const imgDark = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747";
  const imgCamel = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437";

  return (
    <>
      <Navbar />
      <Main />
      <Button label="Traer información" />
      <Button label="Enviar información" />
      <Products 
      img={imgFashion}
      tittle="Fashion" 
      description="Tennis Fitness Running" 
      price="$1958" />
      <Products 
      img={imgDark}
      tittle="Dark" 
      description="Tennis Dark Running" 
      price="$2256" />
      <Products 
      img={imgCamel} 
      tittle="Camel" 
      description="Tennis Camel City" 
      price="$1599" />
      <Products 
      img={imgDark}
      tittle="Dark Plus" 
      description="Tennis Dark Plus Running" 
      price="$3256" />
    </>
  )
}

export default App
