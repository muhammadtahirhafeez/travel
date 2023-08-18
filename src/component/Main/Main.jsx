import React from 'react'
import './Main.css'
import {HiLocationMarker} from 'react-icons/hi'
import {BsFillClipboardCheckFill} from 'react-icons/bs'

import img from '../../Assets/img1.jpeg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpeg'
import img6 from '../../Assets/img6.jpeg'
import img7 from '../../Assets/img7.jpg'
// import img8 from '../../Assets/img8.png'
// import img9 from '../../Assets/img9.jpg'


const Data = [

{
id:1,
imgSrc: img,
destTitle:'Bora Bora',
location : 'New Zealand',
grade: ' CULTURE RELAX',
fees: '$700',
description: 'The Option of Romance, Bora Bora is one of the best travel desitnations in the AudioWorkletNode. The place is known for it Luxurious stays and advebturous activities.'
},

{
id:2,
imgSrc: img2,
destTitle:'Machu picchu',
location : 'Peru',
grade: ' CULTURE RELAX',
fees: '$600',
description: 'The Option of Romance, Bora Bora is one of the best travel desitnations in the AudioWorkletNode. The place is known for it Luxurious stays and advebturous activities.'
},


{
id:3,
imgSrc: img3,
destTitle:'Babuser Top',
location : 'Pakistan',
grade: ' CULTURE RELAX',
fees: '$600',
description: 'The Option of Romance, Bora Bora is one of the best travel desitnations in the AudioWorkletNode. The place is known for it Luxurious stays and advebturous activities.'
},


{
id:4,
imgSrc: img4,
destTitle:'Great Barrier Reef',
location : 'Australia',
grade: ' CULTURE RELAX',
fees: '$700',
description: 'The Option of Romance, Bora Bora is one of the best travel desitnations in the AudioWorkletNode. The place is known for it Luxurious stays and advebturous activities.'
},


{
id:5,
imgSrc: img5,
destTitle:'Cappadocia',
location : 'Turkey',
grade: ' CULTURE RELAX',
fees: '$800',
description: 'The Option of Romance, Bora Bora is one of the best travel desitnations in the AudioWorkletNode. The place is known for it Luxurious stays and advebturous activities.'
},


{
id:6,
imgSrc: img6,
destTitle:'Guanajuato',
location : 'Mexico',
grade: ' CULTURE RELAX',
fees: '$1100',
description: 'The Option of Romance, Bora Bora is one of the best travel desitnations in the AudioWorkletNode. The place is known for it Luxurious stays and advebturous activities.'
},

{id:7,
imgSrc: img7,
destTitle:'Angkor Wat',
location : 'Combodia',
grade: ' CULTURE RELAX',
fees: '$790',
description: 'The Option of Romance, Bora Bora is one of the best travel desitnations in the AudioWorkletNode. The place is known for it Luxurious stays and advebturous activities.'
},


// {
//   id:8,
//   imgSrc: img8,
//   destTitle:'Taj Mahal',
//   location : 'India',
//   grade: ' CULTURE RELAX',
//   fees: '$900',
//   description: 'The Option of Romance, Bora Bora is one of the best travel desitnations in the AudioWorkletNode. The place is known for it Luxurious stays and advebturous activities.'
//   },

// {  id:9,
//   imgSrc: img9,
//   destTitle:'Bali Island',
//   location : 'Indonesia',
//   grade: ' CULTURE RELAX',
//   fees: '$500',
//   description: 'The Option of Romance, Bora Bora is one of the best travel desitnations in the AudioWorkletNode. The place is known for it Luxurious stays and advebturous activities.'
//   },


]


const Main = () => {
  return (
    <section className="main section container">

      <div className="secTitle">
        <h3 className="title">
          Most Visited Destination
        </h3>
      </div>

      <div className="secContent grid">

          {
            Data.map(({id, imgSrc, destTitle, location, fees, grade, description})=>
            {
                return(
                  <div key={id} className="singleDestination">

                      <div className="imageDiv">
                        <img src={imgSrc} alt={destTitle} />
                      </div>

                      <div className="cardInfo">
                        <h4 className="destTitle">{destTitle}</h4>
                        <span className="continent flex"><HiLocationMarker className="icon"/><span className='name'>{location}</span></span>
                          

                        <div className="fees felx">
                          <div className="grade">
                            <span>{grade}<small> +1 </small></span>
                          </div>

                          <div className="price">
                              <h5>{fees}</h5>
                            </div>

                        </div>

                           <div className="desc">
                            <p>{description}</p>
                           </div>

                          <button className='btn flex'><BsFillClipboardCheckFill className='icon'/>DETAILS</button>

                      </div>

                  </div>
                )
            })
          }

      </div>

    </section>
    
  )
}

export default Main