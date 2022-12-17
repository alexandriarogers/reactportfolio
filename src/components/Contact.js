import { useState } from 'react';
import "../styles/Contact.css"


function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true);
    }


    return (
        <div className="contact" id="contact">
            <div className="form">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Name"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" className='submit'>Send</button>
                    {message && <span>Thanks, I will be in touch soon </span>}
                </form>
            </div>

        </div>
    );
}

export default Contact;