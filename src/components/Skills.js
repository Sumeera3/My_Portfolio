import React from 'react'

function Skills() {
  return (
    <>
    <div className='technical m-0 p-0   mx-4'>
        <h3 className=' mb-0 text-center'> Skills</h3><div className='pt-1 border line  rounded mb-3 mt-0 bg-danger mx-auto'></div>
       <div className='skills text-center  bg-dark text-light px-auto'>
        <div className='skill-box'>
          <p className='skill-tittle mt-0 mb-0 text-start '>Html</p>
          <div className='rounded w-75 border  skill-bar mx-auto'>
            <div className='skill-per rounded  border  html'>
              <span className='per text-end'>70%</span>
            </div>

          </div>

        </div>

        <div className='skill-box'>
          <p className='skill-tittle mt-0 mb-0 text-start'>Css</p>
          <div className='rounded w-75 border  skill-bar mx-auto '>
            <div className='skill-per rounded  border   css'>
              <span className='per'>60%</span>
            </div>

          </div>

        </div>

        <div className='skill-box'>
          <p className='skill-tittle mt-0 mb-0 text-start'>Java Script</p>
          <div className='rounded w-75 border  skill-bar mx-auto '>
            <div className='skill-per rounded  border js'>
              <span className='per'>30%</span>
            </div>

          </div>

        </div>

        <div className='skill-box'>
          <p className='skill-tittle mt-0 mb-0 text-start'>C</p>
          <div className='rounded w-75 border  skill-bar mx-auto'>
            <div className='skill-per rounded  border c'>
              <span className='per'>50%</span>
            </div>

          </div>

        </div>

        <div className='skill-box '>
          <p className='skill-tittle  mt-0 mb-0 text-start'>Python</p>
          <div className='rounded w-75 border  skill-bar mx-auto '>
            <div className='skill-per rounded  border   python'>
              <span className='per'>40%</span>
            </div>

          </div>

        </div>


      </div>
    </div>

    </>
  )
}

export default Skills
