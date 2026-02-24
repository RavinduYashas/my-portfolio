import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import './About.css';

const About = () => {
    const education = [
        {
            degree: 'B.Sc. (Hons.) Information Technology Specializing in Information Technology',
            institution: 'Sri Lanka Institute of Information Technology (SLIIT) University',
            period: '2023 - 2027 (Present)',
            icon: <GraduationCap size={24} />
        },
        {
            degree: 'Certificate in English',
            institution: 'Sabaragamuwa University of Sri Lanka',
            period: '2022',
            icon: <Award size={24} />
        },
        {
            degree: 'GCE A/L Examination 2020',
            institution: 'R/Gankanda Central College',
            period: '2020',
            icon: <Calendar size={24} />
        },
        {
            degree: 'GCE O/L Examination 2017',
            institution: 'R/Gankanda Central College',
            period: '2017',
            icon: <Calendar size={24} />
        }
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">My Journey</span>
                    <h2 className="section-title">About Me</h2>
                </div>

                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            I am an Information Technology student at SLIIT with a strong passion for full-stack development.
                            My academic journey has equipped me with a solid foundation in software engineering principles,
                            which I've applied to various projects including web and mobile applications.
                        </p>
                        <p>
                            I thrive in collaborative environments and am always eager to learn new technologies.
                            My goal is to build software that makes a meaningful impact while continuously improving
                            my technical and interpersonal skills.
                        </p>
                    </div>

                    <div className="education-list">
                        {education.map((item, index) => (
                            <div key={index} className="education-card">
                                <div className="education-icon">
                                    {item.icon}
                                </div>
                                <div className="education-content">
                                    <span className="education-period">{item.period}</span>
                                    <h3 className="education-degree">{item.degree}</h3>
                                    <p className="education-institution">{item.institution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
