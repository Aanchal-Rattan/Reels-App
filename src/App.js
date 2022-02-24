import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup'
import { BrowserRouter } from 'react-router-dom'
import Login from './Components/Login'
import {
  Routes,
  Route,

} from "react-router-dom";
import AuthProvider from './Context/AuthContext'
import Feed from './Components/Feed'
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile'
import Ioa from './Components/Ioa'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/" element={
            <PrivateRoute>
              <Feed/>
            </PrivateRoute>
          } />
   
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    // <Ioa/>

  );
}

export default App;
