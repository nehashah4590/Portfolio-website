import React from 'react'
import './Contact.css';
function Contact() {
  return (
    <>
      <div className='contact_container'>
        <div className='para'>
          <h2>Contact</h2>
          <p>It you are looking for a Frontend Developer. Please reach out.</p>
        </div>
        <form className='form'>
          <div className='form_inputs'>
          <label for="fname">First Name:</label>
          <input type="text" id="fname" name="fname" placeholder='Your First Name' />
          </div>
          

          <div className='form_inputs'>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname" placeholder='Your Last Name' />
          </div>
         
          
          <div className='form_inputs'>
          <label for="email">Your Email:</label><br />
          <input type="email" id="email" name="email" placeholder='Your email' />
          </div>
          
          
          <div className='form_inputs'>
          <p><label HTMLfor="message">Your message:</label></p>
          <textarea id="message" name="message" rows="6" cols="69"></textarea>
          </div>
         
         <button  className='button'>
         <input type="send" value="send" className='btn_button'/>
            <input type="reset" className='btn_button'/>
         </button>

           
        </form>
      </div>
    </>
  )
}

export default Contact
