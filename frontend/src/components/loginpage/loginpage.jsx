import React from 'react'
import './loginpage.css'
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLocationArrow, FaPhone } from "react-icons/fa";

const Loginpage = () => {
  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Touch With Us</h1>
        </div>

        <div className= 'contact-section'>
            <div className='contact-left'>
                <h1>Excel Analytics</h1>
                <p>Lipsum dolor sit,orem  amet consectetur adipisicing elit.Temporibus natus non quae delectus voluptas eaque ipsam aspernatur!</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <SiGmail /> <p>kartikneelgund028@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                        <FaPhone /><p>+91 1234567890</p>
                    </div>
                    <div className='contact-detail'>
                        <FaLocationArrow /><p>India</p>
                    </div>
                </div>
            </div>
            
            <form className='contact-right'>
                    <label htmlFor=''>User Name</label>
                    <input type='text' placeholder='Enter your email' name='name'/>

                    <label htmlFor=''>Password</label>
                    <input type='text' placeholder='Enter your password' name='email'/>

                   
                    <button type='submit' className='contact-submit'>Login </button>
                <div>
                <p>Don't have an account? <a> Sign up</a></p>
                </div>
            </form>
            
        </div>
    </div>
  )
}

export default Loginpage