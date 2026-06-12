import React from 'react';
import './Projects.css';

function ProjectCard(props) {
  return (
    <div className="project-card">
      {props.image && <img src={process.env.PUBLIC_URL + props.image} alt={props.title} className="project-image" />}
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
                    title="Inventory Management System"
                    description="A system to manage and track inventory levels, orders, and shipments."
                    technologies="HTML, CSS, JavaScript, React, Node.js, MySQL"
                    githubUrl="https://github.com/Ravindi-29/Inventory-Management-System.git"
                    image="/Inventory.png"
                />
                <ProjectCard
                    title="Career Suggestion System"
                    description="A system to suggest career paths based on user interests and skills."
                    technologies="PHP, CSS, JavaScript"
                    githubUrl="https://github.com/Ravindi-29/career-suggestion-system.git"
                    image="/Career_Suggestion.png"
                />
            </div>
        </div>
    )
}