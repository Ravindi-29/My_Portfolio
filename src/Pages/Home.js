import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from '../Components/Navbar';

export default function Home() {
  return (
    <div className="home">
          <h1>Welcome to My Portfolio</h1>
          <p className="greeting">Hi, </p>
          <h1>I'm <span className="highlight">Ravindi Ranthilini</span></h1>
          <p className="description">I am a Information Technology student at the Institute of Technology, University of Moratuwa. I am a passionate UI/UX designer with a strong background in creating intuitive and engaging user experiences. I create user interfaces that look good, are easy to use, and work well. I pay close attention to details and focus on the needs of users to build digital products that are helpful, enjoyable, and effective.</p>
          <div className="buttons">
              <Link to="/contacts" className="btn primary">Hire Me</Link>
              <Link to="/about" className="btn secondary">Experience</Link>
              <Link to="/projects" className="btn secondary">View Projects</Link>
          </div>
       <div className="home right">
    <img src={process.env.PUBLIC_URL + '/Profile.jpeg'} alt="Profile picture of Ravindi" className="profile-img" />
</div>
        </div>

  )
}
