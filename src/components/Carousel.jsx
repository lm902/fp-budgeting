import React from 'react'
import image1 from '../images/2.jpg'
import image2 from '../images/3.jpg'
import image3 from '../images/4.jpg'

function Carosel () {
  return (
    <div
      id='carouselExampleControls'
      className='carousel slide w-75 mycarouel'
      data-ride='carousel'
    >
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img className='d-block w-100' src={image1} alt='First slide' />
        </div>
        <div className='carousel-item'>
          <img className='d-block w-100' src={image2} alt='second slide' />
        </div>
        <div className='carousel-item'>
          <img className='d-block w-100' src={image3} alt='third slide' />
        </div>
      </div>

      <a
        className='carousel-control-prev'
        href='#carouselExampleControls'
        role='button'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='sr-only'>Previous</span>
      </a>
      <a
        className='carousel-control-next'
        href='#carouselExampleControls'
        role='button'
        data-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='sr-only'>Next</span>
      </a>
    </div>
  )
}

export default Carosel
