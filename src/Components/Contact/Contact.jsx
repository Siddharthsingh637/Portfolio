import React from 'react'
import './Contact.css'
import Title from '../Title/Title'
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import phone_icon from '../../assets/call_icon.svg';

const Contact = () => {
  return (
    <div>
      <div className="contact-title">
        <Title title='Contact' subTitle='Get in touch' />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm always excited to connect, collabrate, and explore new opportunities! Feel free to reach out...</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt='mail icon' />
              <p>siddharthsingh.6217@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt='location icon' />
              <p>Patna, Bihar</p>
            </div>
            <div className="contact-detail">
              <img src={phone_icon} alt='phone icon' />
              <p>+91 6206382386</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className='contact-form'>
            <label htmlFor=''> Your Name </label>
            <input type='text' placeholder='Enter your name' />
            <label htmlFor=''> Your Email </label>
            <input type='email' placeholder='Enter your email' />
            <label htmlFor=''> Your Message </label>
            <textarea name='' id='' cols='30' rows='10' placeholder='Enter your message'></textarea>
          </form>
        </div>
      </div>


    </div>
  )
}

export default Contact
