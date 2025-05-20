import React, { useState } from 'react'

const Contact = () => {
    const[data,SetData]=useState({
        name:'',
        email:'',
        subject:'',
        message:''
    })

    const handleChange=(event)=>{
        const{name,value}=event.target
        SetData({...data,[name]:value})
    }

    const handleSubmit=(event)=>{
        // event.preventDefault()
        console.log(data)
    }
    return (
        <>
            <div className='mt-3'>
            <h3 className=' mb-0 text-center heading'> Contact Us</h3>
            <div className='pt-1 border line  rounded mb-3 mt-0 bg-danger mx-auto'></div>
            <div className=' '>
                <h4 className='text-center'>Let's Work Together</h4>

                <div className='d-flex justify-content-around main-box'>
                    <div className='left-box text-center    text-light'>
                        <h5>Find Me</h5>
                        <p>syedsumeera92@gmail.com</p>
                        <p>Phone: 8688216065</p>
                    </div >

                    <div className='right-box  p-2 w-50  text-dark '>
                        <form className='mx-auto text-center' onSubmit={handleSubmit}>
                            <div className='d-flex'>
                            <input placeholder='Your Name' className='rounded w-50 mx-1 p-1 px-2' type='text' name='name' value={data.name} onChange={handleChange}></input>
                            <input placeholder='Your Email' className='rounded w-50 mx-1 p-1 px-2'  type='email' name='email' value={data.email} onChange={handleChange}></input>
                            </div>
                            <input placeholder='Subject' className='rounded w-100 mx-0 p-1 px-2 my-2'  type='text' name='subject' value={data.subject} onChange={handleChange}></input>
                            <textarea placeholder='Message' className='rounded w-100 mx-0 p-1 px-2 my-2 '  type='text' name='message' value={data.message} onChange={handleChange}></textarea>
                            <button className='text-light bg-dark text-center rounded px-auto submit-btn' type='submit'>Submit</button>
                        </form>

                    </div>

                </div>
            </div>
            </div>
        </>
    )
}

export default Contact
