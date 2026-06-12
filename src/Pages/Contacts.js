import React, {useState} from "react";
import './Contacts.css';

export default function Contacts() {
    const [submitted, setSubmitted] = useState(false)

    return (
        <div className="contact">
            <h2>Contact Me</h2>

            <div className="contact-info">
                <p>📧 Email : rranthilini29@gmail.com</p>
                <p>📞 Phone : +94 70 685 2993</p>
                <p>🔗 LinkedIn : <a href="https://www.linkedin.com/in/ravindi-ranthilini/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                <p>💻 GitHub : <a href="https://github.com/Ravindi-29" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
            </div>

            <div className="contact-form">
                <h3>Send Message</h3>
                <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label>Your Email</label>
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label>Your Message</label>
                    <textarea placeholder="Write your message here..."></textarea>
                </div>
                <button className="submit-btn" onClick={() => setSubmitted(true)}>Send Message</button>
                {submitted && <p className="success-message">Message sent successfully!</p>}
            </div>
        </div>
    )
}