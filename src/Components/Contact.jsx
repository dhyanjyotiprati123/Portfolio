import React, { useState } from 'react';
import Con from "../Assets/contact.svg";
import {AiFillMessage} from "react-icons/ai"

const Contact = () => {
   const [message, setMessage]=useState(false)
   const handleSubmit=(e)=>{
      e.preventDefault()
      setMessage(true)
   }
    return (
        <div className='contact'>
            <div className="heading-box">
               <h1 className="main-heading">Contact Me</h1>
            </div>
            <div className="contact-hero">
              <div className="contact-left">
                 <figure>
                    <img src={Con} alt="Con" className="contact-img" />
                 </figure>
              </div>
              <div className="contact-right">
                <form  className="contact-form">
                   <input type="text" className="contact-input" placeholder="Phone No" />
                   <input type="email" className="contact-input" placeholder="Email" />
                   <textarea className="contact-area" placeholder="Message"></textarea>
                   <button className="btn" onClick={handleSubmit}>Contact Me <AiFillMessage /> </button>
                   {
                     message &&(
                        <span className="contact-span">I Will Get in touch with You Shortly !!</span>
                     )
                   }
                </form>
              
              </div>
            </div>
        </div>
    )
}

export default Contact
