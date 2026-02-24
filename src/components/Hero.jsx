import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile1.jpeg';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="badge">Welcome to my portfolio</div>
                    <h1 className="hero-title">
                        Hi, I'm <span className="text-primary">Ravindu Yashas</span>
                    </h1>
                    <h2 className="hero-subtitle">Undergraduate at SLIIT</h2>
                    <p className="hero-description">
                        IT student with hands-on Full stack experience. Proven ability to develop and deploy responsive web applications with strong problem-solving skills. Passionate about innovative solutions and eager to contribute to a collaborative development team.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                            <ArrowRight size={20} />
                        </a>
                        <div className="hero-socials">
                            <a href="https://github.com/RavinduYashas" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <Github size={22} />
                            </a>
                            <a href="https://linkedin.com/in/ravindu-yashas-990179366/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <Linkedin size={22} />
                            </a>
                            <a href="mailto:ravinduyashas421@gmail.com" className="social-icon">
                                <Mail size={22} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero-image-container">
                    <div className="blob-bg"></div>
                    <div className="hero-image-frame">
                        <img src={profileImg} alt="Ravindu Yashas" className="hero-profile-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
