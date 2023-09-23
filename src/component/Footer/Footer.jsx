import React,{useEffect} from 'react'
import './Footer.css'
import {FiSend} from 'react-icons/fi'
import video2 from '../../Assets/video2.mp4'
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {FaTripadvisor} from "react-icons/fa"
import {BsChevronRight} from "react-icons/bs"

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(()=>
  {
    Aos.init({duration: 2000})
  },[])

  return (

    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent .container">
        <div data-aos="fade-up" className="contactDiv flex">
          <div className="text">
            <small>KEEP IT TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
            <button data-aos="fade-up" className='btn flex' type="submit" >SEND<FiSend className="icon"/></button>
              
          </div>
        </div>

      <div className="footerCard flex">
        <div className="footerIntro flex">
          <div className="logoDiv">
            <a href="#" className='logo flex'><MdOutlineTravelExplore className='icon'/>Travel.</a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <AiFillInstagram className='icon'/>
            <FaTripadvisor className='icon'/>

            </div>

            </div>   

             <div className="footerLinks grid">
              {/* Group 1 */}

            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGECY
              </span>

                <li className="footerList flex">
                  <BsChevronRight className="icon"/> Services
                </li>

                <li className="footerList flex">
                  <BsChevronRight className="icon"/> Insurance
                </li>

                <li className="footerList flex">
                  <BsChevronRight className="icon"/> Agency
                </li>

                <li className="footerList flex">
                  <BsChevronRight className="icon"/> Tourism
                </li>

                <li className="footerList flex">
                  <BsChevronRight className="icon"/> Tourism
                </li>

            </div>

                          {/* Group 2 */}

            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

                <li className="footerList flex">
                  <BsChevronRight className="icon"/> Bookings
                </li>

                <li className="footerList flex">
                  <BsChevronRight className="icon"/> RentCars
                </li>

                <li className="footerList flex">
                  <BsChevronRight className="icon"/> HostelWorld
                </li>

                <li className="footerList flex">
                  <BsChevronRight className="icon"/> Trivego
                </li>

                <li className="footerList flex">
                  <BsChevronRight className="icon"/> TriAdvisor
                </li>

            </div>

                          {/* Group 3 */}

            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

                <li className="footerList flex">
                  <BsChevronRight className="icon"/> London
                </li>

                <li className="footerList flex">
                  <BsChevronRight className="icon"/> California
                </li>

                <li className="footerList flex">
                  <BsChevronRight className="icon"/> Indonesia
                </li>

                <li className="footerList flex">
                  <BsChevronRight className="icon"/> Europe
                </li>

                <li className="footerList flex">
                  <BsChevronRight className="icon"/> Oceania
                </li>

            </div>

            <div className="footerDiv flex">
              <small> BEST TRAVEL WEBSITE THEME </small>
              <small> COPYRIGHT RESERVED 2023 </small>
            </div>

            </div>

      </div>

      </div>


    </section>
  
    )
}

export default Footer