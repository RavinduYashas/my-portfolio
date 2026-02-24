import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Tech Skills',
            skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Java', 'Kotlin', 'PHP', 'C', 'C++', 'SQL', 'MySQL', 'R']
        },
        {
            title: 'Tools & Platforms',
            skills: ['VS Code', 'Git/Github', 'Postman', 'Power BI', 'Adobe Illustrator', 'Figma']
        },
        {
            title: 'Soft Skills',
            skills: ['Teamwork', 'Time Management', 'Effective Communication', 'Critical Thinking']
        },
        {
            title: 'Languages',
            skills: ['English', 'Sinhala']
        }
    ];

    return (
        <section id="skills" className="skills bg-soft">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">What I Know</span>
                    <h2 className="section-title">My Skills</h2>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skill-chips">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-chip">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
