import React from 'react'
import Header from './Header';
import About from './About'
import Skills from './Skills';
import Projects from './Projects';
// import pimg from '../Images/pimg.png';
import pimg from '../Images/proimg.png';
import Contact from './Contact';
import myimg from '../Images/myimg.png'
function Body() {
  return (
    <>
      <Header></Header>
      <div className='Body d-flex  py-0' >
        <div className=' outer-box my-auto '>
          <div className='body-text text-light  my-auto'>
            <p className="mb-0 About-text  ">HELLO</p>
            <p className='mb-0 About-text'>I'm Sumeera</p>
            <p className='fs-6 mb-0 text-3'>PASSIONATE WEB DEVELOPER</p>
            <div className='d-flex justify-content-between mt-4 buttons'>
              <button className='bg-danger  border-rounded btn p-1'>View Resume</button>
              <button className='bg-danger  border-rounded btn p-1'>Hire Me Now</button>
            </div>
          </div>
        </div>

        <div className='border-img'>
          <img src={myimg} alt="" className='w-100' ></img>
        </div>
      </div>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>

    </>

  )
}

export default Body
