import React from 'react'
function Header() {
  return (
    <div>
      <nav className='d-flex text-center navbar w-100 '>
        <div className='logo-text'>
            <h4 className='portfolio'><span className='text-light'>My Por</span>tfolio</h4>
        </div>
        <div className='d-flex mx-0 justify-content-around mt-0   p-0 w-50 text-danger nav-items'>
        <a href='#' className=' text-decoration-none text-danger'>Home</a>
        <a href='#' className=' text-decoration-none text-light'>About</a>
        <a href='#' className=' text-decoration-none text-light'>Projects</a>
        <a href='#' className=' text-decoration-none text-light'>Contact</a>
        </div>

      </nav>
    </div>
  )
}

export default Header
