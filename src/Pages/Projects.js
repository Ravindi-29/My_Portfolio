import React from 'react';
import './Projects.css';
import Navbar from '../Components/Navbar';

function ProjectCard(props) {
  return (
    <div className="project-card">
      {props.image && <img src={props.image} alt={props.title} className="project-image" />}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p><strong>Technologies:</strong> {props.technologies}</p>
      <a href={props.githubUrl } target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  )
}

export default function Projects() {
    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="project-grid">
                <ProjectCard
                    title="To-Do Application"
                    description="The simplest way to organize your tasks, track your deadlines, and get things done"
                    technologies="HTML, CSS, JavaScript"
                    githubUrl="https://github.com/Ravindi-29/complete-_-to_do-_-app.git"
                    image="/To-Do_app.png"
                />
                <ProjectCard
                    title=" Expense Tracker - Monthly Budget Plan"
                    description="Instantly view where your money goes with clear charts and progress bars."
                    technologies="HTML, CSS, JavaScript, Node.js,  MongoDB"
                    githubUrl="https://github.com/Ravindi-29/Expense_Tracker.git"
                    image="/Expense_Tracker.png"
                />
                <ProjectCard
                    title="Personal Portfolio Website"
                    description="A personal portfolio website to showcase my projects, skills, and experience."
                    technologies="HTML, CSS, JavaScript, React"
                    githubUrl="https://github.com/Ravindi-29/Portfolio.git"
                    image="/Portfolio.png"
                />
            </div>
        </div>
    )
}