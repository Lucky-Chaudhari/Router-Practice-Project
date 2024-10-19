import { Route,Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Dashbord from './pages/Dashbord';
import Home from './pages/Home';
import Signup from './pages/Signup';
import About from './pages/About';
import Login from './pages/Login';
import {useState} from "react";
import PrivateRoute from "./components/PrivateRoute";

const App =() =>  {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn ={setIsLoggedIn} />

    <Routes>

      <Route path="/" element ={<Home isLoggedIn={isLoggedIn}/>} />
      <Route path="/about" element ={<About/>}/>
      <Route path="/login" element ={<Login setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/signup" element ={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/dashbord" element ={ <PrivateRoute isLoggedIn={isLoggedIn}>  <Dashbord/> </PrivateRoute>

      }/>
    </Routes>
    </div>
  );
}

export default App;
