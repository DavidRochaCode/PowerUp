import { GraficoPerfil } from "./Organism/PerfilArea/GraficoPerfil";
import { Container } from "./Pages/Container.js/Container";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Templates/Login/Login";
import { Perfil } from "./Templates/Perfil/Perfil";
import { SingUp } from "./Templates/SingUp/SingUp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
        <Container>
          <Routes>
            
            <Route exact path='/' element={<Login/>}></Route>
            <Route exact path='/cadastro' element={<SingUp/>}></Route>
            <Route exact path='/perfil' element={<Perfil/>}></Route>
            </Routes>
        </Container>
        
    </Router>
  );
}

export default App;
