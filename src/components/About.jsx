import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import './About.css';

const About = () => {
    const education = [
        {
            degree: 'B.Sc. (Hons.) Information Technology (CGPA: 3.26)',
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
            degree: "GCE A/L Examination (Maths Stream: 2C's, 1S)",
            institution: 'R/Gankanda Central College',
            period: '2020',
            icon: <Calendar size={24} />
        },
        {
            degree: "GCE O/L Examination (5A's, 3C's, 1S)",
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
                            I am an Information Technology undergraduate at SLIIT with a strong passion for Software Engineering and Full-Stack Development.
                            My academic journey has equipped me with a solid foundation in software engineering principles,
                            which I've applied to various academic and personal projects including web and mobile applications.
                        </p>
                        <p>
                            I thrive in collaborative environments and am always eager to learn new technologies.
                            Seeking a Software Engineering Internship to gain practical industry experience, contribute to innovative software solutions, and further develop my technical expertise.

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
