import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Web App URL from Google Apps Script
        const scriptUrl = "https://script.google.com/macros/s/AKfycbykV2zxD48oGiE5fmskLtXI6XSzBRFm55B00v0z1akUR4xUS185OMHtmECOoTN7nil6/exec";

        const formDataToSubmit = new FormData();
        formDataToSubmit.append("name", formData.name);
        formDataToSubmit.append("email", formData.email);
        formDataToSubmit.append("message", formData.message);
        formDataToSubmit.append("date", new Date().toLocaleString());

        // We use mode: 'no-cors' to avoid cross-origin issues with Google Apps Script
        fetch(scriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            body: formDataToSubmit
        })
        .then(() => {
            // Show success and clear
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 4000);
        })
        .catch((error) => {
            console.error('Error!', error.message);
            alert("Something went wrong. Please try again.");
        });
    };
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

                    <form className="contact-form" onSubmit={handleSubmit}>
                        {status === 'success' && (
                            <div className="success-message" style={{ color: '#10b981', backgroundColor: '#d1fae5', padding: '12px', borderRadius: '6px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '500' }}>
                                <CheckCircle size={20} />
                                <span>Send successful! Details saved to excel file.</span>
                            </div>
                        )}
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Your Name" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Your Email" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="message"
                                placeholder="Your Message" 
                                rows="5" 
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
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
