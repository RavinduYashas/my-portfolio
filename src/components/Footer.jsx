import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">RY<span>.</span></a>
                        <p>Building high-quality digital experiences.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <div className="links-grid">
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>

                    <div className="footer-social">
                        <h4>Follow Me</h4>
                        <div className="footer-social-icons">
                            <a href="https://github.com/RavinduYashas" target="_blank" rel="noreferrer"><Github size={20} /></a>
                            <a href="https://linkedin.com/in/ravindu-yashas-990179366/" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
                            <a href="mailto:ravinduyashas421@gmail.com"><Mail size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ravindu Yashas. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
