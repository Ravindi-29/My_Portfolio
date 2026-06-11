import React, {useState} from "react";
import './Contacts.css';
import Navbar from "../Components/Navbar";  

export default function Contacts() {
    const [submitted, setSubmitted] = useState(false)

    return (
        <div className="contact">
            <h2>Contact Me</h2> 
            <p>Email : rranthilini29@gmail.com</p>
            <p>Phone : +94 70 685 2993</p>
            <p>LinkedIn : <a href="https://www.linkedin.com/in/ravindi-ranthilini/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            <p>GitHub : <a href="https://github.com/Ravindi-29" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
        
        <div className="contact-form">
            <h3>Send Message</h3>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button onClick={() => setSubmitted(true)}>Send Message</button>
            {submitted && <p className="success-message">Message sent successfully!</p>}
        </div>
        </div>
    )
}