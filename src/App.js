import { Route,Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Dashbord from './pages/Dashbord';
import Home from './pages/Home';
import Signup from './pages/Signup';
import About from './pages/About';
import Login from './pages/Login';
import {useState} from "react";
const App =() =>  {
  const [isLoggedIn,setIsLooggedIn] = useState(false);
  return (
    <div>
    <Navbar isLoggedIn={isLoggedIn} setIsLooggedIn={setIsLooggedIn} />

    <Routes>

      <Route path="/" element ={<Home/>} />
      <Route path="/about" element ={<About/>} />
      <Route path="/login" element ={<Login/>} />
      <Route path="/signup" element ={<Signup/>} />
      <Route path="/dashbord" element ={<Dashbord/>} />



    </Routes>
    </div>
  );
}

export default App;
