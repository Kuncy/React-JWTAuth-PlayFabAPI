import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/auth-context'
import './NavLinks.css';
import { useHistory } from 'react-router-dom';
const NavLinks = props => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  function onLgout() {
    console.log(history)
    auth.logout()
    history.push('/')

  }
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>Home</NavLink>
    </li>
    <li>
      <NavLink to="/news" exact>News</NavLink>
    </li>
    {auth.isLoggedIn && (<> <li>
      <NavLink to="/profile">Profile</NavLink>
    </li>
     </>
    )}



    {/* <li>
      <NavLink to="/auth">AUTHENTICATE</NavLink>
    </li> */}

    {!auth.isLoggedIn && (
      <li>
        <NavLink to="/login">Sign In</NavLink>
      </li>
    )}
    {!auth.isLoggedIn && (
      <li className="SignUp">
        <NavLink to="/register">Sign Up!</NavLink>
      </li>
    )}

    {auth.isLoggedIn && (
      <li>
        <button onClick={onLgout}>Logout</button>
      </li>
    )}
  </ul>
};

export default NavLinks;