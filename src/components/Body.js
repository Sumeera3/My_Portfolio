import React from 'react'
import Header from './Header';
import About from './About'
import Skills from './Skills';
import Projects from './Projects';
// import pimg from '../Images/pimg.png';
import pimg from '../Images/proimg.png';
import Contact from './Contact';
import myimg from '../Images/myimg.png';
import Education from './Education';
// import MyResume from '.../pulic/MyResume.pdf';
// import profile_image from '../Images/profile_image.jpg'
function Body() {
  return (
    <>
      <Header></Header>
      <div className='Body d-flex  py-0' >
        <div className=' outer-box my-auto '>
          <div className='body-text text-dark  my-auto'>
            <p className="mb-0 About-text  ">HELLO I'm Sumeera</p>
            {/* <p className='mb-0 About-text'>I'm Sumeera</p> */}
            <p className='fs-6 mb-0 text-center'>PASSIONATE WEB DEVELOPER</p>
            <div className='d-flex justify-content-evenly mt-4 buttons'>
              <a href='/Resume(2).pdf' target="_blank" className='bg-light  border-rounded btn p-1'>View Resume</a>
              <button className='bg-light  border-rounded btn p-1'>Hire Me Now</button>
            </div>
          </div>
        </div>

        <div className='border-img'>
          {/* <img src={myimg} alt="" className='w-100' ></img> */}
        </div>
      </div>
      <div className='web-body m-0 p-0'>
      <About></About>
      <div className='d-flex justify-content-around align-items-center skill-Education'>
      <Skills></Skills>
      <Education></Education>
      </div>
      <Projects></Projects>
      <Contact></Contact>
      </div>

    </>

  )
}

export default Body
