import React from 'react'
import './Footer.css'
import {FiSend} from 'react-icons/fi'
import video2 from '../../Assets/video2.mp4'


const Footer = () => {
  return (

    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent .container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IT TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address'/>
            <button className='btn flex' type="submit" >SEND<FiSend className="icon"/></button>
              
          </div>
        </div>

      <div className="footerCard flex">
        <div className="footerIntro flex">
          <div className="logoDiv">
            <a href="#" className='logo flex'>Travel.</a>
            </div>
            </div>        

      </div>

      </div>


    </section>
  
    )
}

export default Footer