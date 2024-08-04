import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li>Contact@GreatStack.dev</li>
            <li>+381 62 587962</li>
            <li>77 Massachusetts Ave, Cambridge <br/>
            MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  )
}

export default Contact
