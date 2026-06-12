import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about">
          <h2>About Me</h2>

          <div className="section">
              <h3>Education</h3>
              <p>National Diploma in Technology</p>
              <p>Instituteof Technology</p>
              <p>University of Moratuwa</p>
          </div>

          <div className="section">
              <h3>Technical Skills</h3>
              <ul>
              <li>Programming Languages: JavaScript, Python, Java</li>
              <li>Frameworks: React, Node.js</li>
              <li>Databases: MySQL</li>
              <li>Web Technologies: HTML, CSS </li>
            </ul>
            </div>
            <div className="section">
              <h3>Career Aspiration</h3>
              <p>I aim to builda career as a UI/UX designer, focusing on user-centered design principles and creating intuitive, engaging user experiences.  </p>
          </div>
    </div>
  )
}