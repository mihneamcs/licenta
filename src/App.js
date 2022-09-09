import './App.css';
import Homepage from "./pages/homepage/Homepage";
import Contact from "./pages/contact/Contact";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Programare from './pages/programare/Programare';
import Login from './pages/login/Login';
import LoginTest from './pages/login/LoginTest';
import TestProgramare from './pages/programare/TestProgramare';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Homepage />}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path="/programare" element={<Programare/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Login/>} />
      <Route path="/test" element={<TestProgramare/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
