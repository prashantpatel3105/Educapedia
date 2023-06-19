import React from 'react'
import a1 from '../img/a1.png'
import a2 from '../img/a2.png'
import a3 from '../img/a3.png'
import a4 from '../img/a4.png'
import a5 from '../img/a5.png'
import a6 from '../img/a6.png'
import a7 from '../img/a7.png'
import a8 from '../img/a8.png'
import a10 from '../img/a10.png'
import a11 from '../img/a11.png'
import a12 from '../img/a12.png'
import a13 from '../img/a13.png'
import a14 from '../img/a14.png'
import a15 from '../img/a15.png'


const About = () => {
  return (
    <div id='About'>
      <div className="container">
        <h2 style={{textAlign:'center',paddingTop:'100px',fontSize:'24px'}}>ABOUT US</h2>
      </div>
      <div className="container">
        <div id='about-first' style={{justifyitems:'center'}}  className="row">
          <div className="col-lg-5">
              <img style={{height:'520px',width:'100%'}} src={a3}/>

          </div>
          <div  className="col-lg-5">
            <p style={{color:'rgba(138, 138, 138, 1)',marginTop:'80px'}}>EXPLORE THE WIDE RANGE OF OPTIONS</p>
            <h3 style={{fontSize:'28px'}}>The Best Course Design for<br/> You Crafted By Professionals</h3>
            <p style={{maxWidth:'559px',width:'100%',color:'rgba(117, 117, 117, 1)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.</p>
            <div  className="row">
              <div className="col-lg-3">
                <div style={{display:'flex'}}>
                <img style={{width:'40px',height:'40px'}} src={a1}/>
                <p style={{marginLeft:'10px',fontSize:'10px'}}><b>Time To Time<br/>Schedule</b></p>
                </div>
              </div>
              <div className="col-lg-3">
                <div style={{display:'flex'}}>
                <img style={{width:'40px',height:'40px'}} src={a2}/>
                <p style={{marginLeft:'10px',fontSize:'11px'}}><b>24/7 Online<br/>Support</b></p>
                </div>
              </div>
              <div className="col-lg-3">
                <div style={{display:'flex'}}>
                <img style={{width:'40px',height:'40px'}} src={a1}/>
                <p style={{marginLeft:'10px',fontSize:'13px'}}><b>Profesional<br/>Instructors</b></p>
                </div>
              </div>
            </div>

      
            <div className='about-review'>
            
            <div  style={{gap:'40px',justifyContent:'center'}} className="row">
              <div className="col-lg-3">
                <div className='review-text' style={{display:'flex'}}>
                <h1 style={{fontSize:'50px',marginTop:'30px',color:'#063B41'}}>10K</h1>
                <p style={{marginTop:'40px',marginLeft:'10px',fontSize:'11px'}}>Active<br/> Students<br/> Worldwide</p>
                </div>
              </div>

              <div className="col-lg-3">
                <div  className='review-text' style={{display:'flex'}}>
                <h1 style={{fontSize:'50px',marginTop:'30px',color:'#063B41'}}>10K</h1>
                <p style={{marginTop:'40px',marginLeft:'10px',fontSize:'11px'}}>New Course<br/> Every Year</p>
                </div>
              </div>

              <div className="col-lg-3">
                <div  className='review-text' style={{display:'flex'}}>
                <h1 style={{fontSize:'50px',marginTop:'30px',color:'#063B41'}}>2K</h1>
                <p style={{marginTop:'45px',marginLeft:'10px',fontSize:'11px'}}>Cup of Tea&<br/>Coffee</p>
                </div>
              </div>
            </div>
            
        </div>

          </div>
        </div>
        
      </div>
      <div className="about-works">
        <div style={{paddingTop:'50px'}} className="container">
          <div style={{textAlign:"center",paddingTop:'-10px'}}>
          <h2 style={{fontSize:'24px'}}>HOW WE WORKS</h2>
          <p style={{color:'rgba(0, 0, 0, 0.63)'}}>SIMPLE & EFFICIENT</p>
          </div>
          <div style={{justifyContent:'center'}} className="card-main">
          <div  id='card1' className="Crad">    
            <img style={{display:'block',margin:'auto',marginTop:'-30px'}} src={a4}/>

            <h5  style={{textAlign:'center',marginTop:'10px'}}>Plan</h5>
            <p style={{textAlign:'center',color:'rgba(0, 0, 0, 0.69)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis libero et velit interdum, 
               ac aliquet odio mattis.</p>
          </div>
            
            <div id='card2'  className="Crad">
            <img style={{display:'block',margin:'auto',marginTop:'-30px'}} src={a5}/>
            <h5 style={{textAlign:'center',marginTop:'10px'}}>Study</h5>
            <p style={{textAlign:'center',color:'rgba(0, 0, 0, 0.69)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis libero et velit interdum, 
               ac aliquet odio mattis.</p>
          </div>
          
          <div id='card3'  className="Crad">
            <img style={{display:'block',margin:'auto',marginTop:'-30px'}} src={a6}/>
            <h5 style={{textAlign:'center',marginTop:'10px'}}>Experiment</h5>
            <p style={{textAlign:'center',color:'rgba(0, 0, 0, 0.69)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis libero et velit interdum, 
               ac aliquet odio mattis.</p>
          </div>
         
          <div id='card4'  className="Crad">
            <img style={{display:'block',margin:'auto',marginTop:'-30px'}} src={a7}/>
            <h5 style={{textAlign:'center',marginTop:'10px'}}>Score</h5>
            <p style={{textAlign:'center',color:'rgba(0, 0, 0, 0.69)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis libero et velit interdum, 
               ac aliquet odio mattis.</p>
          </div>
          
          <div id='card5'  className="Crad">
            <img style={{display:'block',margin:'auto',marginTop:'-30px'}} src={a8}/>
            <h5 style={{textAlign:'center',marginTop:'10px'}}>Get Certified</h5>
            <p style={{textAlign:'center',color:'rgba(0, 0, 0, 0.69)',width:'100%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis libero et velit interdum, 
               ac aliquet odio mattis.</p>
          </div>
         
          
      </div>
      </div>
      </div>
      <div className="choose-main">
        <h2 style={{textAlign:'center',paddingTop:'100px',fontSize:'24px'}}>WHY CHOOSE US</h2>
      </div>
      <div className="choose-img">
          <div className="container">
            <div style={{justifyContent:'center',gap:'30px'}} className="row">
              <div id='banner' className="col-lg-6">
                <h3 style={{fontSize:'18px',textAlign:'center',marginTop:'20px'}}>Hands-On Skilling</h3>
                <div style={{display:'flex'}}>
                <img style={{marginLeft:'-12px',marginTop:'10px',height:'100px',width:'140px'}} src={a10}/>
                <p style={{fontSize:'14px',width:'100%',maxHeight:'auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..</p>
                </div>
              </div>
              <div id='banner' className="col-lg-6">
                <h3 style={{fontSize:'18px',textAlign:'center',marginTop:'20px'}}>Supportive Educators</h3>
                <div style={{display:'flex'}}>
                <img style={{marginLeft:'-12px',marginTop:'10px',height:'100px',width:'140px'}} src={a11}/>
                <p style={{fontSize:'14px',width:'100%',maxHeight:'auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..</p>
                </div>

              </div>
            </div>

            <div style={{justifyContent:'center',gap:'30px'}} className="row">
              <div id='banner' className="col-lg-6">
                <h3 style={{fontSize:'18px',textAlign:'center',marginTop:'20px'}}>Communtiy-Driven Learning</h3>
                <div style={{display:'flex'}}>
                <img style={{marginLeft:'-12px',marginTop:'10px',height:'100px',width:'140px'}} src={a12}/>
                <p style={{fontSize:'14px',width:'100%',maxHeight:'auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..</p>
                </div>
              </div>
              <div id='banner' className="col-lg-6">
                <h3 style={{fontSize:'18px',textAlign:'center',marginTop:'20px'}}>Job Ready Portfolio</h3>
                <div style={{display:'flex'}}>
                <img style={{marginLeft:'-12px',marginTop:'10px',height:'100px',width:'140px'}} src={a13}/>
                <p style={{fontSize:'14px',width:'100%',maxHeight:'auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..</p>
                </div>
              </div>
            </div>

            <div style={{justifyContent:'center',gap:'30px'}} className="row">
              <div id='banner' className="col-lg-6">
                <h3 style={{fontSize:'18px',textAlign:'center',marginTop:'20px'}}>Strong Communicators</h3>
                <div style={{display:'flex'}}>
                <img style={{marginLeft:'-12px',marginTop:'10px',height:'100px',width:'140px'}} src={a14}/>
                <p style={{fontSize:'14px',width:'100%',maxHeight:'auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..</p>
                </div>
              </div>
              <div id='banner' className="col-lg-6">
                <h3 style={{fontSize:'18px',textAlign:'center',marginTop:'20px'}}>Certificats</h3>
                <div style={{display:'flex'}}>
                <img style={{marginLeft:'-12px',marginTop:'10px',height:'100px',width:'140px'}} src={a15}/>
                <p style={{fontSize:'14px',width:'100%',maxHeight:'auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..libero et velit interdum, ac aliquet odio mattis libero et velit interdum, ac aliquet odio mattis..</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>  
  )
}

export default About