import React from 'react'
import  Logo from "../assets/Logo.svg";
import { Link, } from 'react-router-dom';
const Navbar = (props) =>{
  let isLoggedIn = props.isLoggedIn;
  let setIsLooggedIn = props.setInLoggedIn;

  return (
    <div className='flex'>
     <Link to="/">
   <img src={Logo} alt="" width={160} height={32} loading='lazy' />
     </Link>
     <nav>
      <ul className='flex gap-3'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>

      </ul>
     </nav>

     <div className=' flex ml-5 mr-3 gap-3'>
     {!isLoggedIn &&
  <Link to="/login">
  <button>
  Login
  </button>
  </Link>
     }

     {!isLoggedIn &&
      <Link to="/signup">
  <button>
  SignUp
  </button>
  </Link>
     }

     {isLoggedIn &&
      <Link to="/">
  <button>
  LogOut
  </button>
  </Link>
     }

     {isLoggedIn &&
      <Link to="/dashboard">
  <button>
  Dashboard
  </button>
  </Link>
     }


     </div>
    </div>
  )
}

export default Navbar
