import React from 'react'
import h2 from '../img/h2.png'
import About from './About'
import Courses from './Courses'
import Educator from './Educator'
import Nav from './Nav'
import Price from './Price'
import Contact from './Contact'



const Home = () => {
  return (
    <div>
      
        <Nav/>
        <div className="home_main">
            <div id='home-in' className="hero-image">
                <div style={{paddingTop:'180px'}} className="container">
                    <div className="row">
                        <div style={{marginTop:'30px'}} id='home-text' className="col-lg-6">
            <h1 style={{color:'white'}}>Learn Today For A Better Tomorrow!</h1>
            <p style={{color:'#829DA0',fontSize:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.</p>
            <button className='home-btn'><a href='#Courses' className='homebtn-text'  style={{textDecoration:'none',color:'#063B41'}}>View Courses</a></button>
            </div>
            <div className="col-lg-6">
                <img id='home-img' style={{width:'100%'}} src={h2}/>
            </div>
            </div>
            </div>
            </div>
        </div>
        <About/>
        <Courses/>
        <Educator/>
        <Price/>
        <Contact/>
       
    </div>
  )
}

export default Home