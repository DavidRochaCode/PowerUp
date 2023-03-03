import { Container } from "./Pages/Container.js/Container";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Templates/Login/Login";
import { SingUp } from "./Templates/SingUp/SingUp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
        <Container>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/cadastro' element={<SingUp/>}></Route>
            </Routes>
        </Container>
        
    </Router>
  );
}

export default App;
