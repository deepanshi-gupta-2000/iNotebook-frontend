import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* <NavLink className="navbar-brand" to="/" aria-disabled='true'>iNotebook</NavLink> */}
          iNotebook

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className= {({isActive}) => isActive ? 'nav-link active': "nav-link"} aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className= {({isActive}) => isActive ? 'nav-link active': "nav-link"} aria-current="page" to="/about">About</NavLink>
              </li>
            </ul>
          </div>
          {!localStorage.getItem('token') ? <div>
          <NavLink className="btn btn-primary mx-1" to="/login" role="button">Login</NavLink>
          <NavLink className="btn btn-primary mx-1" to="/signup" role="button">SignUp</NavLink>
          </div>:
          <div>
          <NavLink className="btn btn-primary mx-1" role="button" onClick={handlelogout}>Logout</NavLink>  
          </div>}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
