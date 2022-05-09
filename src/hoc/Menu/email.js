import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

export  const ContactUs = () =>{
    const form = useRef();

    

    class ContactUs extends React.Component{
        render(){
            const sendEmail = (e) =>{
                e.preventDefault();
                emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current,'YOUR_USERID').then((result)=>{
                    console.log(result.text);
                }, (error)=> {
                    console.log(error.text);
                });
            };
            return  <form ref={form} onSubmit={sendEmail} action="">
            <label htmlFor="">Name</label>
            <input type="text" name='user_name' />
            <label htmlFor="">Email</label>
            <input type="text" name='user_email' />
            <label htmlFor="">Message</label>
            <textarea name="message" cols="30" rows="10"></textarea>
            <input type="submit" value='Send' />
        </form>
        }
    }
   
}
export default ContactUs;