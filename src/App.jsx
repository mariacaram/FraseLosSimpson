import "./App.css";
import logo from "./logofamilia.png.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Frases from "./components/Frases";
import { useEffect, useState } from "react";
function App() {
  const [personaje, setPersonaje] = useState({});
  useEffect(() => {
    consultarAPI();
  }, []);
  const consultarAPI = async() => {
    const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const dato = await respuesta.json();
    console.log(respuesta);
    console.log(dato)
    setPersonaje(dato[0])
  };


  return (
    <section className="container my-5 d-flex flex-column align-items-center">
      <img src={logo} alt="logo de los simpson" />
      <Button variant="warning" className="my-5 w-50">
        Obtener frases
      </Button>
      <Frases></Frases>
    </section>
  );
}

export default App;

