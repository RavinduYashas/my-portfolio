import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import './Projects.css';

import image1 from '../assets/projectsUi/csg.png';
// import image2 from '../assets/projectsUi/ceylonSparkleGems.png';
import image3 from '../assets/projectsUi/moneyMate.png';
import image4 from '../assets/projectsUi/topjobs.png';
import image5 from '../assets/projectsUi/eCare.png';
import smartCampusImg from '../assets/projectsUi/smartCampusHub.png';
import campusConnectImg from '../assets/projectsUi/CampusConnect.png';
import vibestaImg from '../assets/projectsUi/vibesta.png';

const Projects = () => {
    const projects = [
        {
            title: 'Ceylon Sparkle Gems',
            description: 'Developed a complete backend system with analyzed data for sales, product management, and catalog operations.',
            tech: ['React', 'Node.js', 'MongoDB', 'Express'],
            type: 'Full Stack',
            image: image1, // Replace null with your imported image
            link: '#'
        },
        {
            title: 'Smart Campus Operations Hub',
            description: 'Scalable campus management platform featuring OAuth2 authentication, RBAC, and a notification system.',
            tech: ['React', 'Spring Boot', 'MongoDB'],
            type: 'Full Stack',
            image: smartCampusImg,
            link: 'https://github.com/RavinduYashas/smart-campus-operations-hub.git'
        },
        {
            title: 'CampusConnect',
            description: 'Collaborative Q&A platform for students with user management and knowledge sharing features.',
            tech: ['React', 'Node.js', 'MongoDB', 'Express'],
            type: 'Full Stack',
            image: campusConnectImg,
            link: 'https://github.com/RavinduYashas/campusconnect-mern.git'
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
            title: 'Vibesta Music App',
            description: 'Modern music streaming application UI/UX design focusing on seamless user experience.',
            tech: ['Figma'],
            type: 'UI/UX Design',
            image: vibestaImg,
            link: '#'
        },
        {
            title: 'Topjob.lk Website Redesign',
            description: 'Comprehensive UI/UX redesign focusing on user experience and modern aesthetics.',
            tech: ['Figma'],
            type: 'UI/UX Design',
            image: image4,
            link: '#'
        },
        {
            title: 'Cristels-E-Care Healthcare',
            description: 'A healthcare management system designed to streamline patient records and appointments.',
            tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
            type: 'Web System',
            image: image5,
            link: 'https://github.com/RavinduYashas/CRISTELS-E-CARE.git'
        },
        {
            title: 'Vehicle Spare Parts Management System',
            description: 'A modular vehicle repair management web app with status tracking, PDF reports, and admin dashboard.',
            tech: ['React', 'Node.js', 'MongoDB', 'Express'],
            type: 'Full Stack',
            image: null,
            link: 'https://github.com/dilshan03/Spare-Parts-and-Repair-Management-System.git'
        },
        {
            title: 'Video Lane - Browsing System',
            description: 'Backend system for a video uploading and browsing platform using enterprise Java.',
            tech: ['Java Servlets', 'JSP', 'MySQL'],
            type: 'Backend',
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
