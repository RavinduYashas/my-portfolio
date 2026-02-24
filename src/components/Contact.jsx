import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact bg-soft">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Get In Touch</span>
                    <h2 className="section-title">Contact Me</h2>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h3 className="contact-title">Let's talk about everything!</h3>
                        <p className="contact-desc">
                            Don't like forms? Send me an email or call me directly.
                        </p>

                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="method-icon"><Mail size={20} /></div>
                                <div className="method-text">
                                    <span>Email</span>
                                    <a href="mailto:ravinduyashas421@gmail.com">ravinduyashas421@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon"><Phone size={20} /></div>
                                <div className="method-text">
                                    <span>Phone</span>
                                    <a href="tel:+94763421894">+94 76 34 21 894</a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon"><MapPin size={20} /></div>
                                <div className="method-text">
                                    <span>Location</span>
                                    <p>No: 09, Morathota, Pelmadulla</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Send Message
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
