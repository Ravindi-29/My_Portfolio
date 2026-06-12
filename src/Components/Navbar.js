import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
        <span className="logo">My Portfolio</span>
        <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contacts</a>
        </div>
    </nav>
  );
}