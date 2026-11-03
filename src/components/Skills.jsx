import React from 'react';
import { 
    SiKotlin, 
    SiJavascript, 
    SiPhp, 
    SiC, 
    SiCplusplus, 
    SiR, 
    SiReact, 
    SiSpringboot, 
    SiNodedotjs, 
    SiExpress, 
    SiTailwindcss, 
    SiHtml5, 
    SiMongodb, 
    SiMysql, 
    SiGooglecloud, 
    SiFirebase, 
    SiPostman, 
    SiSwagger, 
    SiGit, 
    SiGithub, 
    SiFigma 
} from 'react-icons/si';
import { 
    FaJava, 
    FaCss3Alt, 
    FaDatabase, 
    FaServer, 
    FaCode, 
    FaComments, 
    FaUsers, 
    FaLightbulb, 
    FaClock, 
    FaGlobe,
    FaAws 
} from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { Sparkles, Brain, Terminal, Languages } from 'lucide-react';
import './Skills.css';

// Custom Crisp Vector SVG Components for Specific Tools
const PlaywrightIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <path d="M19.4 6.8c-2.3 0-4.3 1.7-4.6 4-.4-.3-.8-.5-1.3-.6-2.3-.4-4.5 1.1-4.9 3.4-.4 2.3 1.1 4.5 3.4 4.9.5.1 1 0 1.5-.1.5 2.1 2.5 3.6 4.8 3.5 2.7-.1 4.9-2.3 4.9-5V11.8c0-2.8-1.9-5-4.8-5zm-5.4 9.6c-.9-.2-1.5-1-1.3-1.9.2-.9 1-1.5 1.9-1.3.9.2 1.5 1 1.3 1.9-.2.9-1 1.5-1.9 1.3zm6.3-2.1c-.2.9-1 1.5-1.9 1.3-.9-.2-1.5-1-1.3-1.9.2-.9 1-1.5 1.9-1.3.9.2 1.5 1 1.3 1.9z" fill="#2EAD33" />
        <path d="M21.5 8c-2.3 0-4.3 1.7-4.6 4-.4-.3-.8-.5-1.3-.6-2.3-.4-4.5 1.1-4.9 3.4-.4 2.3 1.1 4.5 3.4 4.9.5.1 1 0 1.5-.1.5 2.1 2.5 3.6 4.8 3.5 2.7-.1 4.9-2.3 4.9-5V13c0-2.8-1.9-5-4.8-5z" fill="#E54332" opacity="0.75" />
    </svg>
);

const IllustratorIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#330000" />
        <text x="6" y="22" fill="#FF9A00" fontFamily="sans-serif" fontSize="13" fontWeight="bold">Ai</text>
    </svg>
);

const PowerBIIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#F2C811" />
        <rect x="7" y="16" width="4" height="10" rx="1" fill="#262626" opacity="0.65" />
        <rect x="14" y="11" width="4" height="15" rx="1" fill="#262626" opacity="0.85" />
        <rect x="21" y="6" width="4" height="20" rx="1" fill="#262626" />
    </svg>
);

const RestApiIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11a9 9 0 0 1 9 9" />
        <path d="M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="1.5" fill="#6366F1" />
    </svg>
);

const DsaIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" />
        <circle cx="6" cy="19" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="10" y1="7.5" x2="7.5" y2="16.5" />
        <line x1="14" y1="7.5" x2="16.5" y2="16.5" />
    </svg>
);

const ComplexityIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 15" />
    </svg>
);

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: [
                { name: 'Java', icon: <FaJava color="#EA2D2E" size={18} /> },
                { name: 'Kotlin', icon: <SiKotlin color="#7F52FF" size={18} /> },
                { name: 'JavaScript', icon: <SiJavascript color="#EAB308" size={18} /> },
                { name: 'PHP', icon: <SiPhp color="#777BB4" size={18} /> },
                { name: 'C', icon: <SiC color="#00599C" size={18} /> },
                { name: 'C++', icon: <SiCplusplus color="#004482" size={18} /> },
                { name: 'R', icon: <SiR color="#276DC3" size={18} /> }
            ]
        },
        {
            title: 'Frameworks & Web Tech',
            skills: [
                { name: 'React.js', icon: <SiReact color="#00D8FE" size={18} /> },
                { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" size={18} /> },
                { name: 'Node.js', icon: <SiNodedotjs color="#5FA04E" size={18} /> },
                { name: 'Express.js', icon: <SiExpress color="#1E293B" size={18} /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" size={18} /> },
                { name: 'HTML5', icon: <SiHtml5 color="#E34F26" size={18} /> },
                { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" size={18} /> },
                { name: 'Java Servlets', icon: <FaServer color="#E11D48" size={18} /> },
                { name: 'JSP', icon: <FaCode color="#F59E0B" size={18} /> }
            ]
        },
        {
            title: 'Cloud & Databases',
            skills: [
                { name: 'AWS Cloud', icon: <FaAws color="#FF9900" size={18} /> },
                { name: 'Google Cloud (GCP)', icon: <SiGooglecloud color="#4285F4" size={18} /> },
                { name: 'Firebase', icon: <SiFirebase color="#FFCA28" size={18} /> },
                { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={18} /> },
                { name: 'MySQL', icon: <SiMysql color="#4479A1" size={18} /> },
                { name: 'SQL', icon: <FaDatabase color="#0284C7" size={18} /> }
            ]
        },
        {
            title: 'AI & Prompt Engineering',
            skills: [
                { name: 'Generative AI', icon: <Sparkles color="#8B5CF6" size={18} /> },
                { name: 'Large Language Models (LLMs)', icon: <Brain color="#EC4899" size={18} /> },
                { name: 'Prompt Design', icon: <Terminal color="#10B981" size={18} /> },
                { name: 'Vertex AI Studio', icon: <SiGooglecloud color="#1A73E8" size={18} /> }
            ]
        },
        {
            title: 'API & Testing',
            skills: [
                { name: 'Postman', icon: <SiPostman color="#FF6C37" size={18} /> },
                { name: 'Swagger', icon: <SiSwagger color="#85EA2D" size={18} /> },
                { name: 'Playwright', icon: <PlaywrightIcon size={18} /> },
                { name: 'REST APIs', icon: <RestApiIcon size={18} /> }
            ]
        },
        {
            title: 'Tools & Design',
            skills: [
                { name: 'Git', icon: <SiGit color="#F05032" size={18} /> },
                { name: 'GitHub', icon: <SiGithub color="#181717" size={18} /> },
                { name: 'VS Code', icon: <VscVscode color="#007ACC" size={18} /> },
                { name: 'Figma', icon: <SiFigma color="#F24E1E" size={18} /> },
                { name: 'Adobe Illustrator', icon: <IllustratorIcon size={18} /> },
                { name: 'Power BI', icon: <PowerBIIcon size={18} /> }
            ]
        },
        {
            title: 'Core Concepts',
            skills: [
                { name: 'Data Structures & Algorithms', icon: <DsaIcon size={18} /> },
                { name: 'Time Complexity Analysis', icon: <ComplexityIcon size={18} /> }
            ]
        },
        {
            title: 'Soft Skills & Languages',
            skills: [
                { name: 'Effective Communication', icon: <FaComments color="#0284C7" size={18} /> },
                { name: 'Teamwork', icon: <FaUsers color="#10B981" size={18} /> },
                { name: 'Critical Thinking', icon: <FaLightbulb color="#F59E0B" size={18} /> },
                { name: 'Time Management', icon: <FaClock color="#8B5CF6" size={18} /> },
                { name: 'English', icon: <Languages color="#06B6D4" size={18} /> },
                { name: 'Sinhala', icon: <FaGlobe color="#EC4899" size={18} /> }
            ]
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
                                        <span className="skill-chip-icon">{skill.icon}</span>
                                        <span className="skill-chip-name">{skill.name}</span>
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
