import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import n1 from '../img/n1.png'

const Nav = () => {
  return (
    <div>
         <nav class="navbar navbar-expand-lg ">
  <div class="container">
    <div className='nav-icon'>
    <img style={{height:'74px',width:'74px'}} src={n1}/>
    <h6 style={{color:'#EAD8BC',marginLeft:'-10px'}}>Educapedia</h6>
    </div>
    <button style={{border:'1px solid black'}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span  class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Home"><b>Home</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#About"><b>About Us</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#Courses"><b>Courses</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#Educator"><b>Educators</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#Priceing"><b>Pricing</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#contact-main" ><b>Contact Us</b></a>
        </li>
        
       
       
      </ul>
    
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav