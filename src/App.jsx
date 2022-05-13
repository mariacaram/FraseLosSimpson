import './App.css';
import logo from './logofamilia.png.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Frases from './components/Frases';
function App() {
  return (
    <section className='container my-5 d-flex flex-column align-items-center'>
<img src={logo} alt="logo de los simpson" />
<Button variant= 'warning' className='my-5 w-50' >Obtener frases</Button>
  <Frases></Frases>
  </section>
  );
}

export default App;
