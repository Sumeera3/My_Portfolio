import React from 'react'
import Image from '../Images/proimg.png'
function About() {
  return (
    <>
      <h2 className='text-center heading'>About Me</h2>
      <div className='About mx-4  d-flex  justify-content-around text-dark bg-dark'>
        <p className='p-4 pb-0'>Hey there! I'm SYED SUMEERA, currently a dedicated student at GIST College. My journey revolves around the pursuit of knowledge, and I thrive on learning new skills that fuel my curiosity and passion for growth.
          One of my key interests is undertaking internships that align with my academic pursuits. I am eager to contribute my skills and learn from real-world experiences. Whether it's in web development or related areas, I am excited about the prospect of applying classroom knowledge to practical scenarios.
          I am currently on the lookout for internship opportunities that allow me to blend my academic knowledge with practical applications. If you have exciting internship prospects or share a passion for WEB DEVELOPMENT, let's connect and explore the possibilities together.

          Thanks for taking the time to get to know me—I'm eager to embark on new learning adventures and contribute to meaningful projects!

        </p>
        
        {/* <div className='img '>
            <img src={Image} alt="" className='w-100'></img>
          </div> */}

      </div>

    </>
  )
}

export default About
