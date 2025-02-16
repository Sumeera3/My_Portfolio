import React from 'react'
import p1image from '../Images/p1image.png'
import p2image from '../Images/p2image.png'
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils'


const Projects = () => {
  return (

    <>
      <div className='Projects d-absolute  mb-0'>
        <h3 className='text-center heading mb-0'>MY Projects</h3><div className='pt-1 border line mx-auto rounded mb-3 mt-0 bg-danger'></div>
        <div className='d-flex w-100  project-items'>
          
          <div className=' col-6 project-box border mx-3' >
            <div className='pimg  p-2 m-3 mx-auto'>
              <img src={p1image} alt="error" className='w-100'></img>
            </div>
            <div className='text '>
              <p className='text-dark text-center '><h2 className='project-text'>Personal-Portfolio</h2> Website using HTML CSS and JS </p>
              </div>
              {/* <button className='rounded  text-center project-btn mb-0'>Check Here</button> */}
              <a href='https://my-portfolio-ehwa.onrender.com'  className='rounded  text-center project-btn text-dark border p-1 '>Check Here</a>
 

          </div>

          <div className='border mx-3  project-box col-6'>
            <div className='pimg  p-2 m-3 mx-auto'>
              <img src={p2image} alt="error" className='w-100'></img>
            </div>

            <div className='text  '>
              <p className='text-dark text-center '><h2 className='project-text'>Expence-Tracker</h2> Website using React </p>
              </div>
              <a href='https://expensetracker-frontend-aa7o.onrender.com'  className='rounded  text-center project-btn text-dark border p-1 '>Check Here</a>
          </div>
          

        </div>
      </div>



    </>
  )
}

export default Projects
