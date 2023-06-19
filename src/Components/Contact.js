import React from 'react'
import ct1 from '../img/ct1.png'
import f1 from '../img/f1.png'
import f2 from '../img/f2.png'
import { AiOutlineArrowUp } from "react-icons/ai";



const Contact = () => {
  return (
    <div id='contact-main'>
 <div className="container">
        <h2 style={{textAlign:'center',paddingTop:'100px',fontSize:'24px'}}>Contact US</h2>
        <p style={{textAlign:'center',color:'rgba(0, 0, 0, 0.55)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis<br/> tellus. Sed dignissim, metus nec fringilla accumsan, </p>
      </div>     
      
      <div className="container">
        <div className="row">
        <div style={{marginLeft:'-50px'}} className='col-lg-6'>
              
             
        <form style={{marginTop:'100px'}} action="#" class="contFrm" method="POST">
          <div class="row">
            <div class="col-lg-6">
              <input style={{width:'100%'}} type="text" name="name" placeholder="Your First Name" class="inptFld" required />
            </div>

            <div class="col-lg-6">
              <input style={{width:'100%'}} type="email" name="email" placeholder="Your Last Name" class="inptFld" required />
            </div>

            <div class="col-lg-6">
              <input style={{width:'100%'}} type="tel" name="phone" placeholder="Phone Number" class="inptFld" required />
            </div>

            <div class="col-lg-6">
              <input style={{width:'100%'}} type="text" name="sub" placeholder="Email Address" class="inptFld" required />
            </div>

            <div class="col-12">
              <textarea style={{width:'100%',height:'150px'}} class="inptFld" rows="" cols="" placeholder="Your Message..." required></textarea>
            </div>

            <div class="col-12">
              {/* <input type="submit" name="submit" value="" class="inptBtn" /> */}
              <button className='contact-btn'>Send Message</button>
            </div>
          </div>
        </form>
      </div>

  {/* </div> */}
          <div className="col-lg-6">
            <img style={{width:'100%'}} src={ct1}/>
          </div>
        </div>
    </div>

    <div className="container">
        <div style={{display:'block',margin:'auto'}} className="subscribe-main">
      <div style={{justifyContent:'center'}} className="row">
          <div className="col-lg-6">
              <div style={{marginTop:'10%',marginLeft:'10%'}}>
              <h2>Subscribe Now!</h2>
              <p style={{color:'rgba(0, 0, 0, 0.53)'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
          <div className="col-lg-6">
            <input className='email-box' type='Email' placeholder='Enter Your Email' ></input>
            </div>
      </div>
    </div>
      </div>

      <div style={{marginTop:'-50px'}} className="footer-main">
        <div className="container">
          <div style={{textAlign:'center'}} className="row">
          <div className="col-lg-2">
            <div style={{marginTop:'50%'}}>
            <img src={f1}/>
            </div>
          </div>
          <div className="col-lg-3">
            <div style={{paddingTop:'50%'}}>
          <img src={f2}/>
          </div>
            </div>
            <div className="col-lg-7">
                <div style={{paddingTop:'20%'}}>
                  <hr style={{border:'2px solid white',width:'538px'}}/>
                  <p style={{color:'white',textAlign:'left'}}>© Copyrights 2020 All rights reserved. Made with &#128151; Educapedia</p>
                </div>
            </div>
        </div>

        </div>
        <button
        type="button"
        class="btn btn-danger btn-floating btn-lg"
        id="btn-back-to-top"
        >
  <i ><AiOutlineArrowUp/></i>
</button>
  
      </div>
      
        </div>
  ) 
}

export default Contact