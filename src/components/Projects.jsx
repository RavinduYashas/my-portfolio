import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, Github, Code, ArrowLeft, X, Eye, CheckCircle2 } from 'lucide-react';
import './Projects.css';

import image3 from '../assets/projectsUi/moneyMate.png';
import image4 from '../assets/projectsUi/topjobs.png';
import image5 from '../assets/projectsUi/eCare.png';
import smartCampusImg from '../assets/projectsUi/smartCampusHub.png';
import vibestaImg from '../assets/projectsUi/vibesta.png';

// Ceylon Sparkle Gems UI assets
import csgHero from '../assets/projectsUi/csg.png';
import csgScreen1 from '../assets/projectsUi/csg/csg-screen-1.png';
import csgScreen2 from '../assets/projectsUi/csg/csg-screen-2.png';
import csgScreen3 from '../assets/projectsUi/csg/csg-screen-3.png';
import csgScreen4 from '../assets/projectsUi/csg/csg-screen-4.png';
import csgScreen5 from '../assets/projectsUi/csg/csg-screen-5.png';
import csgScreen6 from '../assets/projectsUi/csg/csg-screen-6.png';

// CampusConnect UI assets
import campusConnectHero from '../assets/projectsUi/CampusConnect.png';
import ccScreen1 from '../assets/projectsUi/campusConnect/cc-screen-1.png';
import ccScreen2 from '../assets/projectsUi/campusConnect/cc-screen-2.png';
import ccScreen3 from '../assets/projectsUi/campusConnect/cc-screen-3.png';
import ccScreen4 from '../assets/projectsUi/campusConnect/cc-screen-4.png';
import ccScreen5 from '../assets/projectsUi/campusConnect/cc-screen-5.png';

// MathQuest UI assets
import mathQuestHero from '../assets/projectsUi/mathQuest/hero-image.png';
import mqScreen1 from '../assets/projectsUi/mathQuest/mq-screen-1.png';
import mqScreen2 from '../assets/projectsUi/mathQuest/mq-screen-2.png';
import mqScreen3 from '../assets/projectsUi/mathQuest/mq-screen-3.png';
import mqScreen4 from '../assets/projectsUi/mathQuest/mq-screen-4.png';
import mqScreen5 from '../assets/projectsUi/mathQuest/mq-screen-5.png';
import mqScreen6 from '../assets/projectsUi/mathQuest/mq-screen-6.png';
import mqScreen7 from '../assets/projectsUi/mathQuest/mq-screen-7.png';
import mqScreen8 from '../assets/projectsUi/mathQuest/mq-screen-8.png';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const projects = [
        {
            id: 'mathquest',
            title: 'MathQuest – Intelligent Pedagogical Agent & Adaptive Student Progress Engine',
            subtitle: 'Component 4 | Pedagogical Scaffolding & Knowledge Tracing • Ongoing Research',
            status: 'Ongoing Research',
            type: 'AI & Full Stack',
            images: [
                mathQuestHero,
                mqScreen1,
                mqScreen2,
                mqScreen3,
                mqScreen4,
                mqScreen5,
                mqScreen6,
                mqScreen7,
                mqScreen8
            ],
            description: 'MathQuest is an ongoing research initiative delivering an adaptive pedagogical scaffolding and intelligent knowledge tracking engine for gamified Sinhala mathematics learning. Tailored specifically for Sri Lankan Grade 1–5 students with ADHD-related learning support needs, it integrates personalized log-normal reaction-time baselining, multimodal behavioral signal ingestion, an embodied 3D companion robot (MathBot 3000), 4-tier visual scaffolding, and the novel Attention-Disentangled Bayesian Knowledge Tracing (AD-BKT) Factorial HMM to trace mastery without penalizing attention lapses.',
            features: [
                'Ongoing Research & Clinical Evaluation: Active benchmark testing and school-level clinical trial evaluation for ADHD learners',
                'Attention-Disentangled Bayesian Knowledge Tracing (AD-BKT) decoupling latent knowledge (Kt) from attention lapses (At)',
                'Embodied 3D companion robot (MathBot 3000) rendered with Three.js WebGL featuring 11 non-punitive interactive animations',
                'Personalized log-normal reaction-time baselining to detect impulsive guessing vs. inattention drift',
                'Rule-based Finite State Machine (FSM) pedagogical decision engine mapping 6 learner states to real-time scaffolding',
                '4-tier progressive visual hints with interactive numbered counter dots instead of heavy text',
                'Multimodal signal ingestion from gameplay telemetry logs and webcam gaze/behavior analysis engines',
                'Pedagogical analytics dashboard delivering cognitive state insights and mastery summaries for educators and parents',
                'Ebbinghaus memory stability decay modeling for spaced retention and forgetting curve estimation'
            ],
            pedagogicalStates: [
                'Focused Flow / Engaged',
                'Impulsive Rush',
                'Inattention Drift',
                'Productive Struggle',
                'Cognitive Overload / Frustration',
                'Concept Mastery Achieved'
            ],
            tech: ['React', 'TypeScript', 'Three.js', 'Node.js', 'Express', 'MongoDB', 'Python', 'scikit-learn', 'Tailwind CSS'],
            githubLink: '#',
            liveLink: '#'
        },
        {
            id: 'csg',
            title: 'Ceylon Sparkle Gems',
            type: 'Full Stack',
            images: [
                csgHero,
                csgScreen1,
                csgScreen2,
                csgScreen3,
                csgScreen4,
                csgScreen5,
                csgScreen6
            ],
            description: 'A luxury gem-selling web platform featuring comprehensive product catalog management, sales analytics, and customer inquiry handling. Implemented secure backend REST APIs for inventory management, product operations, and an intuitive admin dashboard for managing orders and products.',
            features: [
                'Luxury gemstone & jewelry catalog with advanced product filtering',
                'Comprehensive Admin dashboard for real-time inventory and sales analytics',
                'Secure RESTful APIs for customer inquiry handling and order processing',
                'Responsive, modern UI optimized for seamless desktop and mobile shopping'
            ],
            tech: ['React', 'Node.js', 'MongoDB', 'Express'],
            githubLink: '#',
            liveLink: '#'
        },
        {
            id: 'smart-campus',
            title: 'Smart Campus Operations Hub',
            type: 'Full Stack',
            images: [smartCampusImg],
            description: 'Developed a smart campus management platform with secure role-based access for Admin, Manager, Technician, and Student users. Implemented user management, notification handling, REST APIs, and OAuth2 authentication using Spring Boot and MongoDB.',
            features: [
                'Role-Based Access Control (RBAC) for Admin, Manager, Technician, and Student roles',
                'Enterprise-grade OAuth2 security and authentication architecture',
                'Issue reporting, maintenance scheduling, and real-time notification handling',
                'Clean React frontend dashboards connecting to Spring Boot REST endpoints'
            ],
            tech: ['React', 'Spring Boot', 'MongoDB', 'OAuth2'],
            githubLink: 'https://github.com/RavinduYashas/smart-campus-operations-hub.git',
            liveLink: '#'
        },
        {
            id: 'campus-connect',
            title: 'CampusConnect',
            type: 'Full Stack',
            images: [
                campusConnectHero,
                ccScreen1,
                ccScreen2,
                ccScreen3,
                ccScreen4,
                ccScreen5
            ],
            description: 'Collaborative student Q&A platform featuring user and profile management, OTP-based email authentication, real-time notifications, interactive like/reaction features, and online user status tracking.',
            features: [
                'Community Q&A forum with topic categorization and search',
                'Secure OTP-based email authentication for student verification',
                'Real-time notifications and interactive reaction/upvote system',
                'Live user online status tracking and MongoDB-backed REST APIs'
            ],
            tech: ['React', 'Node.js', 'MongoDB', 'Express'],
            githubLink: 'https://github.com/RavinduYashas/campusconnect-mern.git',
            liveLink: '#'
        },
        {
            id: 'moneymate',
            title: 'MoneyMate Finance Tracker',
            type: 'Mobile App',
            images: [image3],
            description: 'Personal finance tracking mobile application for managing income, expenses, and budgeting activities. Implemented SharedPreferences local data storage, notifications, onboarding flows, and data backup & restore.',
            features: [
                'Daily income and expense tracking with category breakdown',
                'Fast local persistence using Android SharedPreferences',
                'Budget threshold alerts and scheduled notifications',
                'Interactive onboarding screens with data backup & restore capabilities'
            ],
            tech: ['Kotlin', 'Android'],
            githubLink: 'https://github.com/RavinduYashas/Finance-Tracker.git',
            liveLink: '#'
        },
        {
            id: 'topjobs',
            title: 'Topjob.lk Website Redesign',
            type: 'UI/UX Design',
            images: [image4],
            description: 'Redesigned the user interface and user experience of the TopJobs.lk platform with modern UI/UX concepts. Created responsive wireframes, interactive prototypes, and accessible visual assets.',
            features: [
                'Modern UI/UX overhaul of Sri Lanka’s popular recruitment platform',
                'Clean typography, enhanced contrast, and accessibility compliance',
                'High-fidelity interactive prototypes designed in Figma',
                'Custom vector iconography and illustration assets created in Adobe Illustrator'
            ],
            tech: ['Figma', 'Adobe Illustrator'],
            githubLink: '#',
            liveLink: '#'
        },
        {
            id: 'cristels-ecare',
            title: 'Cristels-E-Care Healthcare',
            type: 'Web Application',
            images: [image5],
            description: 'Healthcare management web application featuring patient appointment scheduling, responsive user interfaces, and CRUD functionalities with secure form handling and database integration.',
            features: [
                'Patient appointment booking and doctor schedule management',
                'Interactive Contact Us and patient inquiry management module',
                'Secure CRUD operations backed by PHP backend and MySQL',
                'Form validation and sanitized database handling'
            ],
            tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            githubLink: 'https://github.com/RavinduYashas/CRISTELS-E-CARE.git',
            liveLink: '#'
        },
        {
            id: 'spare-parts',
            title: 'Vehicle Spare Parts & Repair Management',
            type: 'Full Stack',
            images: [],
            description: 'Modular vehicle repair management web app with repair handling, image uploads, job cards, mechanic assignment, status tracking, and automated PDF report generation via an admin dashboard.',
            features: [
                'Vehicle repair job card creation, mechanic assignment, and workflow tracking',
                'Image upload support for documenting vehicle damage and repairs',
                'Automated PDF invoice and repair report generation via Admin dashboard',
                'Inventory management for spare parts with real-time stock updates'
            ],
            tech: ['React', 'Node.js', 'MongoDB', 'Express'],
            githubLink: 'https://github.com/dilshan03/Spare-Parts-and-Repair-Management-System.git',
            liveLink: '#'
        },
        {
            id: 'video-lane',
            title: 'Video Lane - Video Browsing System',
            type: 'Enterprise Java',
            images: [],
            description: 'Backend system for video uploading and browsing built using Java Servlets and MySQL. Implemented core video upload/retrieval, database handling, and connected dynamic JSP pages.',
            features: [
                'Enterprise Java architecture powered by Java Servlets and MySQL',
                'Video upload pipeline, metadata indexing, and streaming retrieval',
                'Server-side rendered dynamic JSP interfaces with session control',
                'Category-based video browsing with search capabilities'
            ],
            tech: ['Java Servlets', 'JSP', 'MySQL'],
            githubLink: '#',
            liveLink: '#'
        },
        {
            id: 'vibesta',
            title: 'Vibesta Music App',
            type: 'UI/UX Design',
            images: [vibestaImg],
            description: 'Modern music streaming application UI/UX design focusing on intuitive navigation, playlist management, and sleek dark-mode aesthetics.',
            features: [
                'Sleek dark-mode visual design tailored for music streaming',
                'Intuitive audio player controls, playlist curation, and library management',
                'Artist profile pages and personalized recommendation layout',
                'Interactive micro-interactions prototyped in Figma'
            ],
            tech: ['Figma'],
            githubLink: '#',
            liveLink: '#'
        }
    ];

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            setActiveImageIndex(0);
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedProject]);

    // Handle ESC key to close modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const openModal = (project) => {
        setSelectedProject(project);
        setActiveImageIndex(0);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">My Work</span>
                    <h2 className="section-title">Selected Projects</h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => {
                        const hasImage = project.images && project.images.length > 0;
                        const mainImage = hasImage ? project.images[0] : null;

                        return (
                            <div key={index} className="project-card">
                                <div className="project-image" onClick={() => openModal(project)}>
                                    {mainImage ? (
                                        <img src={mainImage} alt={project.title} className="project-img" />
                                    ) : (
                                        <div className="project-image-placeholder">
                                            <Code size={40} className="project-icon-placeholder" />
                                        </div>
                                    )}
                                    {project.status && (
                                        <span className="project-status-badge">
                                            <span className="status-dot"></span>
                                            {project.status}
                                        </span>
                                    )}
                                    <span className="project-type-badge">{project.type}</span>
                                    <div className="project-image-overlay">
                                        <span className="preview-label">
                                            <Eye size={18} />
                                            View Details
                                        </span>
                                    </div>
                                </div>

                                <div className="project-content">
                                    <h3 className="project-title" onClick={() => openModal(project)}>
                                        {project.title}
                                    </h3>

                                    <div className="project-tech">
                                        {project.tech.map((tag, idx) => (
                                            <span key={idx} className="tech-tag">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        {project.githubLink && project.githubLink !== '#' ? (
                                            <a 
                                                href={project.githubLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="project-link-btn"
                                            >
                                                <Github size={18} />
                                                Code
                                            </a>
                                        ) : (
                                            <button 
                                                type="button"
                                                className="project-link-btn disabled-link" 
                                                title="Code available upon request"
                                            >
                                                <Github size={18} />
                                                Code
                                            </button>
                                        )}

                                        <button 
                                            type="button"
                                            onClick={() => openModal(project)} 
                                            className="project-link-btn primary"
                                        >
                                            <Eye size={18} />
                                            Demo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Project Showcase / Details Modal rendered in portal to escape section transform & navbar stacking context */}
            {selectedProject && typeof document !== 'undefined' && createPortal(
                <div className="project-modal-backdrop" onClick={closeModal}>
                    <div 
                        className="project-modal-container" 
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                    >
                        {/* Modal Header */}
                        <div className="modal-top-bar">
                            <button type="button" onClick={closeModal} className="modal-back-btn">
                                <ArrowLeft size={18} />
                                <span>Back to Projects</span>
                            </button>
                            <button type="button" onClick={closeModal} className="modal-close-icon-btn" aria-label="Close modal">
                                <X size={22} />
                            </button>
                        </div>

                        {/* Modal Content Split: Visuals on one side, Description on the other side */}
                        <div className="modal-body-split">
                            {/* Left Side: Images */}
                            <div className="modal-visual-side">
                                <div className="modal-main-image-wrapper">
                                    {selectedProject.images && selectedProject.images.length > 0 ? (
                                        <img 
                                            src={selectedProject.images[activeImageIndex]} 
                                            alt={selectedProject.title} 
                                            className="modal-active-img"
                                        />
                                    ) : (
                                        <div className="modal-image-placeholder">
                                            <Code size={56} className="modal-placeholder-icon" />
                                            <p>Screenshots coming soon</p>
                                        </div>
                                    )}
                                </div>

                                {/* Thumbnail Gallery (Supports multiple images) */}
                                {selectedProject.images && selectedProject.images.length > 1 && (
                                    <div className="modal-thumbnails-strip">
                                        {selectedProject.images.map((img, idx) => (
                                            <button
                                                type="button"
                                                key={idx}
                                                className={`modal-thumb-btn ${activeImageIndex === idx ? 'active' : ''}`}
                                                onClick={() => setActiveImageIndex(idx)}
                                            >
                                                <img src={img} alt={`Preview ${idx + 1}`} />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Right Side: Detailed Description & Features */}
                            <div className="modal-details-side">
                                <div className="modal-badge-wrapper">
                                    <span className="modal-badge">{selectedProject.type}</span>
                                    {selectedProject.status && (
                                        <span className="modal-status-badge">
                                            <span className="status-dot"></span>
                                            {selectedProject.status}
                                        </span>
                                    )}
                                </div>

                                <h2 className="modal-title">{selectedProject.title}</h2>
                                {selectedProject.subtitle && (
                                    <p className="modal-project-subtitle">{selectedProject.subtitle}</p>
                                )}

                                <div className="modal-desc-box">
                                    <h4 className="modal-subheading">About the Project</h4>
                                    <p className="modal-description">{selectedProject.description}</p>
                                </div>

                                {selectedProject.pedagogicalStates && selectedProject.pedagogicalStates.length > 0 && (
                                    <div className="modal-states-box">
                                        <h4 className="modal-subheading">Six Pedagogical States</h4>
                                        <div className="modal-states-tags">
                                            {selectedProject.pedagogicalStates.map((state, idx) => (
                                                <span key={idx} className="modal-state-chip">{state}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {selectedProject.features && selectedProject.features.length > 0 && (
                                    <div className="modal-features-box">
                                        <h4 className="modal-subheading">Key Highlights & Features</h4>
                                        <ul className="modal-features-list">
                                            {selectedProject.features.map((feature, idx) => (
                                                <li key={idx}>
                                                    <CheckCircle2 size={16} className="feature-icon" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="modal-tech-box">
                                    <h4 className="modal-subheading">Technologies Used</h4>
                                    <div className="modal-tech-tags">
                                        {selectedProject.tech.map((t, idx) => (
                                            <span key={idx} className="modal-tech-pill">{t}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Modal Actions */}
                                <div className="modal-actions-row">
                                    {selectedProject.githubLink && selectedProject.githubLink !== '#' && (
                                        <a 
                                            href={selectedProject.githubLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="modal-action-btn"
                                        >
                                            <Github size={18} />
                                            View Source Code
                                        </a>
                                    )}

                                    {selectedProject.liveLink && selectedProject.liveLink !== '#' && (
                                        <a 
                                            href={selectedProject.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="modal-action-btn primary"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                    )}

                                    <button type="button" onClick={closeModal} className="modal-action-btn secondary">
                                        <ArrowLeft size={16} />
                                        Back to Projects
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
};

export default Projects;
