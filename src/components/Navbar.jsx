import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "./navbar.css"
import logo from "../img/logo.svg"
import user from "../img/user.svg"

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/login');
  };

  const location = useLocation();

  const isCover = location.pathname === '/';
  if (isCover) {
    return(null);
  }

  return (
    <div className='navbar'>
        <div className='navbarContainer'>
          <div className='logo'>
            <img src={logo} alt='logo' width={'150px'}/>
            <a style={{marginLeft:'10px'}}>耀瑄科技Rich大語言系統</a>
          </div>
          <div className='userBtn'>
            <button className='user' onClick={handleNavigate}><img src={user} style={{width:'35px'}}/></button>       
          </div>          
        </div>
    </div>
  )
}

export default Navbar