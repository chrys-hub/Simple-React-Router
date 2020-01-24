import React from 'react';
import "./header.css"
import { Link } from 'react-router-dom'
const Header = () =>  {
  return(
    <div class="nav" style={{marginBottom:`50px`}}>
    <input type="checkbox" id="nav-check"/>
    <div class="nav-header">
      <div class="nav-title">
  <Link to="/">Simple React Router</Link>
      </div>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div class="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/NotMatchedLink">Try click this</Link>
    </div>
     
  </div>
  )
}

export default Header;