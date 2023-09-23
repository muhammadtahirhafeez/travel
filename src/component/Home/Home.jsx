import React, {useEffect} from 'react'
import './Home.css'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'


import video from '../../Assets/video.mp4'


const Home = () => {
// Scroll Animation

useEffect(()=>{
      Aos.init({duration:2000})
},[])


  return (
    <section className="home">
      <div className="overlay"></div >
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      
      <div className='homeContent container'>
          <div className="textDiv">
            <span data-aos="fade-up" className="smallText">
              Our Packages
            </span>
            <h1 data-aos="fade-up" className="homeTitle">Searach Your Holiday</h1>
          </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">
              Search Your Destinaiton:
            </label>
            <div className="input">
           
            <input type="text" placeholder="Enter Name Here" />
            {/* <GrLocation className="icon"/> */}
            </div>
          </div>

           <div className="dateInput">
            <label htmlFor="Date">
              Select Your Date
            </label>
            <div className="input">
           
            <input type="Date" placeholder="mm/dd/yyyy" />
            </div>
          </div>

          <div className="priceInput">
           <div className="label_total flex">
            <label htmlFor="price"> Max Price:</label>
            <h3 className="total">$5000</h3>
           </div>
              <div className="input flex">
                <input type="range" max="5000" min="1000"/>
              </div>

          </div>

          <div className="searchOptions flex">
          <HiFilter className="icon"/>
          <span>
            MORE FILTERS
          </span>
          </div>



        </div>

        <div data-aos="fade-up" className="homeFootericons flex">
          <div className="rightIcons">
            <FiFacebook className='icon'/>
            <AiFillInstagram className='icon'/>

          </div>
         

          <div className="leftIcons">
          <FaTripadvisor className='icon'/>
          <AiOutlineUnorderedList className='icon'/>
          <TbApps className='icon'/>
          </div>
        </div>

      </div>
      

  </section>
  )
}

export default Home