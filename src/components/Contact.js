import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='mt-3'>
            <h3 className=' mb-0 text-center heading'> Contact Us</h3>
            <div className='pt-1 border line  rounded mb-3 mt-0 bg-danger mx-auto'></div>
            <div className=' '>
                <h4 className='text-center'>Let's Work Together</h4>

                <div className='d-flex justify-content-around main-box'>
                    <div className='left-box text-center  border bg-dark text-dark '>
                        <h5>Find Me</h5>
                        <p>syedsumeera92@gmail.com</p>
                        <p>Phone: 8688216065</p>
                    </div >

                    <div className='right-box border p-2 w-50 bg-dark text-dark '>
                        <form className='mx-auto text-center'>
                            <div className='d-flex'>
                            <input placeholder='Your Name' className='rounded w-50 mx-1 p-1 px-2'></input>
                            <input placeholder='Your Email' className='rounded w-50 mx-1 p-1 px-2'></input>
                            </div>
                            <input placeholder='Subject' className='rounded w-100 mx-0 p-1 px-2 my-2'></input>
                            <textarea placeholder='Message' className='rounded w-100 mx-0 p-1 px-2 my-2 '></textarea>
                            <button className='bg-danger text-center rounded px-auto submit-btn'>Submit</button>
                        </form>

                    </div>

                </div>
            </div>
            </div>
        </>
    )
}

export default Contact
