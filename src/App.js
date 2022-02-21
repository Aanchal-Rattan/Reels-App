import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup'
import { BrowserRouter } from 'react-router-dom'
import Login from './Components/Login'
import {
  Routes,
  Route,
 
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>



    </BrowserRouter>

  );
}

export default App;
