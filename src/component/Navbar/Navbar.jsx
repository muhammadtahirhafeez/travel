import React,{useState} from 'react'
import './Navbar.css'
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'



const Navbar = () => {

  const [active, setActive] = useState('navBar')

// Showing navbar by clicking on Toggle icon
  const showNav =()=>setActive('navBar activeNavbar')


// Removing navbar by clicking on Close icon
const removeNavbar =()=>
{
  setActive('navBar')
}



return (
    <section class='navBarSection'>

      <header className='header flex'>
      
      <div className="logoDiv">
        <a href= "#" className="logo flex">
          <h1 className='icon'> <MdOutlineTravelExplore className='icon'/>Travel.</h1>
            </a>
            </div>

            <div onClick={showNav} className="toggleNavbar"><TbGridDots className='icon'/></div>


              <div className={active}>

                <ul className="navLists flex">
                  
                    <li className="navItem">
                    <a href="#" className="navLink">Home</a>
                    </li>
                      
                    <li className="navItem">
                    <a href="#" className="navLink">About</a>
                    </li>
                      
                    <li className="navItem">
                    <a href="#" className="navLink">Pages</a>
                    </li>
                      
                    <li className="navItem">
                    <a href="#" className="navLink">News</a>
                    </li>
                      
                    <li className="navItem">
                    <a href="#" className="navLink">Contact</a>
                    </li>

                    <button className='btn'>
                      <a href='#'>BOOK NOW</a> 
                    </button>
                </ul>
                 <div onClick={removeNavbar} className="closeNavbar"><AiFillCloseCircle class="icon"/></div>
              </div>
             

              </header>
    </section>
  )
}

export default Navbar