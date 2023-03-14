import{Home} from "../src/Pages/Home/Home"
import { VerDieta } from "./Organism/VerDieta/VerDieta";
import { Container } from "./Pages/Container.js/Container";
import { Dieta } from "./Templates/Dieta/Dieta";
import { Login } from "./Templates/Login/Login";
import { Perfil } from "./Templates/Perfil/Perfil";
import { SingUp } from "./Templates/SingUp/SingUp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import{Treino} from "./Templates/Treino/Treino"
import { VerTreino } from "./Organism/VerTreino/VerTreino";


function App() {
  return (
    <Router>
        <Container>
          <Routes>
            
            <Route exact path='/' element={<Login/>}></Route>
            <Route exact path='/home' element={<Home/>}></Route>
            <Route exact path='/cadastro' element={<SingUp/>}></Route>
            <Route exact path='/perfil' element={<Perfil/>}></Route>
            <Route exact path='/dieta' element={<Dieta/>}></Route>
            <Route exact path='/verDieta' element={<VerDieta/>}></Route>
            <Route exact path='/treino' element={<Treino/>}></Route>
            <Route exact path='/verTreino' element={<VerTreino/>}></Route>
             </Routes>
        </Container>
        
    </Router>
  );
}

export default App;
