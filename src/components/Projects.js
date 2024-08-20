import React from 'react'
import p1image from '../Images/p1image.png'
import p2image from '../Images/p2image.png'
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils'


const Projects = () => {
  return (

    <>
      <div className='Projects d-absolute  mb-0'>
        <h3 className='text-center mb-0'>MY Projects</h3><div className='pt-1 border line mx-auto rounded mb-3 mt-0 bg-danger'></div>
        <div className='d-flex w-100  project-items'>
          
          <div className='border w-50 mx- bg-dark project-box' >
            <div className='pimg  p-2 m-3 mx-auto'>
              <img src={p1image} alt="error" className='w-100'></img>
            </div>
            <div className='text '>
              <p className='text-light text-center '><h2 className='text-danger'>Personal-Portfolio</h2> Website using HTML CSS and JS </p>
              </div>
              <button className='rounded bg-danger text-center project-btn mb-0'>Check Here</button>

          </div>

          <div className='border w-50 mx-3 bg-dark project-box'>
            <div className='pimg  p-2 m-3 mx-auto'>
              <img src={p2image} alt="error" className='w-100'></img>
            </div>

            <div className='text  '>
              <p className='text-light text-center '><h2 className='text-danger'>Expence-Tracker</h2> Website using React </p>
              </div>
              <button className='rounded bg-danger text-center project-btn'>Check Here</button>
          </div>

                    
          

        </div>
      </div>



    </>
  )
}

export default Projects
