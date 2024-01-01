import './App.css'
import axios from 'axios'

function App() {

  //Función async-await para consumir API
  const getUsers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(response);
      console.log(response.data[1].name);//Output Ervin Howell
    } catch (error) {
      console.log("Algo salió mal", error);
    }
  }

  //Función async-await para enviar un usuario
  const postUser = async () =>{
    try{
      const url = "https://jsonplaceholder.typicode.com/posts";
      const user ={
        userId: 1986,
        title: "Java FullStack dev",
        body: "Ximena Muñoz"
      }
      const response = await axios.post(url, user);
      console.log(response);
      //Para mostrar solamente la informacion en consola 
      console.log(response.data);
    }catch(error){
      console.log("Tienes otro error", error);
    }
  }

  return (
    <>
      <div>
        <h1 className="box">HTTP - Axios</h1>
      </div>
      <div className="card">
        <button onClick={getUsers}>
          Get Method
        </button>
        <button onClick={postUser}>
          Post Method
        </button>
      </div>
    </>
  )
}

export default App
