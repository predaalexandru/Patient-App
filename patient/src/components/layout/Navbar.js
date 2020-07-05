import React from 'react'
import {Link} from 'react-router-dom'

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <Link class="navbar-brand" to="#">Speromax</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</div>
</nav>
   )
 }

export default Navbar