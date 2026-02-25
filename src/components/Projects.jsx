import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import './Projects.css';

import image3 from '../assets/projectsUi/moneyMate.png';

const Projects = () => {
    const projects = [
        {
            title: 'Ceylon Sparkle Gems',
            description: 'Developed a complete backend system with analyzed data for sales, product management, and catalog operations.',
            tech: ['React', 'Node.js', 'MongoDB', 'Express'],
            type: 'Full Stack',
            image: null, // Replace null with your imported image
            link: '#'
        },
        {
            title: 'Vehicle Spare Parts Management System',
            description: 'A modular vehicle repair management web app with status tracking, PDF reports, and admin dashboard.',
            tech: ['React', 'Node.js', 'MongoDB', 'Express'],
            type: 'Full Stack',
            image: null,
            link: '#'
        },
        {
            title: 'MoneyMate Finance Tracker',
            description: 'Mobile application developed for tracking daily finances and managing budgets effectively.',
            tech: ['Kotlin'],
            type: 'Mobile App',
            image: image3,
            link: 'https://github.com/RavinduYashas/Finance-Tracker.git'
        },
        {
            title: 'Topjob.lk Website Redesign',
            description: 'Comprehensive UI/UX redesign focusing on user experience and modern aesthetics.',
            tech: ['Figma'],
            type: 'UI/UX Design',
            image: null,
            link: '#'
        },
        {
            title: 'Video Lane - Browsing System',
            description: 'Backend system for a video uploading and browsing platform using enterprise Java.',
            tech: ['Java Servlets', 'JSP', 'MySQL'],
            type: 'Backend',
            image: null,
            link: '#'
        },
        {
            title: 'Cristels-E-Care Healthcare',
            description: 'A healthcare management system designed to streamline patient records and appointments.',
            tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
            type: 'Web System',
            image: null,
            link: '#'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">My Work</span>
                    <h2 className="section-title">Selected Projects</h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="project-img" />
                                ) : (
                                    <div className="project-image-placeholder">
                                        <Code size={40} className="project-icon-placeholder" />
                                    </div>
                                )}
                                <span className="project-type-badge">{project.type}</span>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((tag, idx) => (
                                        <span key={idx} className="tech-tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.link} className="project-link-btn">
                                        <Github size={18} />
                                        Code
                                    </a>
                                    <a href={project.link} className="project-link-btn primary">
                                        <ExternalLink size={18} />
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
