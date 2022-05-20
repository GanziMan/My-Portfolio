import React from 'react';
import emailjs from '@emailjs/browser';

export  const ContactUs = () =>{
      
            return  <form action="">
            <label htmlFor="">Name</label>
            <input type="text" name='user_name' />
            <label htmlFor="">Email</label>
            <input type="text" name='user_email' />
            <label htmlFor="">Message</label>
            <textarea name="message" cols="30" rows="10"></textarea>
            <input type="submit" value='Send' />
        </form>
        }

export default ContactUs;