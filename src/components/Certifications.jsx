import React, { useState } from 'react';
import { Award, ExternalLink, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const badges = [
        {
            id: 'aws-cloud-foundations',
            title: 'AWS Academy Graduate - Cloud Foundations',
            issuer: 'Amazon Web Services (AWS)',
            platform: 'Credly',
            category: 'Cloud Computing',
            filterCategory: 'AWS',
            image: 'https://images.credly.com/images/e3541a0c-dd4a-4820-8052-5001006efc85/blob',
            verifyUrl: 'https://www.credly.com/badges/647024e1-0a76-42d9-bd1b-23bd7986cd2e/public_url',
            issueDate: 'Sep 2026',
            description: 'Completed AWS Academy Cloud Foundations covering cloud concepts, core AWS services, security, architecture, pricing, and cloud infrastructure support.'
        },
        {
            id: 'vertex-ai-prompt',
            title: 'Prompt Design in Vertex AI',
            issuer: 'Google Cloud',
            platform: 'Credly & Google Cloud',
            category: 'Generative AI',
            filterCategory: 'Google Cloud',
            image: 'https://images.credly.com/images/cef82b2e-970a-4318-8e59-c3e26b7f5c19/image.png',
            verifyUrl: 'https://www.credly.com/badges/f5f71b65-a61f-4f67-ad8f-1fa86ccbd666/public_url',
            issueDate: 'Jun 2026',
            description: 'Demonstrates verified skills in prompt engineering, image analysis, and multimodal generative techniques within Vertex AI using Gemini models.'
        },
        {
            id: 'agent-platform-prompt',
            title: 'Prompt Design in Agent Platform',
            issuer: 'Google Cloud',
            platform: 'Google Cloud Skills Boost',
            category: 'Generative AI & Agents',
            filterCategory: 'Google Cloud',
            image: 'https://cdn.qwiklabs.com/iU5O84A8jz9GlTb3jxMCX172rSDU8KnRVw6Rd5yJs3Q%3D',
            verifyUrl: 'https://www.skills.google/public_profiles/05cf68ea-74e2-442f-8f96-a632ae8a54f7/badges/24925490',
            issueDate: '2026',
            description: 'Mastered prompt design, multimodal prompting, and agent workflow orchestration within Google Agent Platform.'
        },
        {
            id: 'digital-transformation-gcp',
            title: 'Digital Transformation with Google Cloud',
            issuer: 'Google Cloud',
            platform: 'Google Cloud Skills Boost',
            category: 'Cloud Architecture',
            filterCategory: 'Google Cloud',
            image: 'https://cdn.qwiklabs.com/6xUK2PRpVXBXPfceAsFMtLwhoEfwpXtmN5ityJjCdjU%3D',
            verifyUrl: 'https://www.skills.google/public_profiles/05cf68ea-74e2-442f-8f96-a632ae8a54f7/badges/23486076',
            issueDate: '2026',
            description: 'Comprehensive overview of cloud modernization opportunities, enterprise data architecture, and digital transformation strategy on Google Cloud.'
        },
        {
            id: 'intro-genai',
            title: 'Introduction to Generative AI',
            issuer: 'Google Cloud',
            platform: 'Google Cloud Skills Boost',
            category: 'Generative AI',
            filterCategory: 'Google Cloud',
            image: 'https://cdn.qwiklabs.com/1IjA1paFzxAwvhaEuCNYzcrZkNyM%2FRWnfSQue%2BwKv3M%3D',
            verifyUrl: 'https://www.skills.google/public_profiles/05cf68ea-74e2-442f-8f96-a632ae8a54f7/badges/21213050',
            issueDate: '2026',
            description: 'Core concepts of Generative AI, foundational models, machine learning differentiators, and Google Gen AI app development tools.'
        },
        {
            id: 'intro-llm',
            title: 'Introduction to Large Language Models',
            issuer: 'Google Cloud',
            platform: 'Google Cloud Skills Boost',
            category: 'LLMs & NLP',
            filterCategory: 'Google Cloud',
            image: 'https://cdn.qwiklabs.com/k9QPlamtqAYqyBDn0hIOWr%2BBoJxznnibFblS%2Fsn%2Fgns%3D',
            verifyUrl: 'https://www.skills.google/public_profiles/05cf68ea-74e2-442f-8f96-a632ae8a54f7/badges/21233385',
            issueDate: '2026',
            description: 'Explores LLM architectures, transformer models, use cases, prompt tuning, and building custom language solutions.'
        },
        {
            id: 'intro-responsible-ai',
            title: 'Introduction to Responsible AI',
            issuer: 'Google Cloud',
            platform: 'Google Cloud Skills Boost',
            category: 'AI Ethics & Governance',
            filterCategory: 'Google Cloud',
            image: 'https://cdn.qwiklabs.com/KFb7gLKebthw1KJHf%2F88XmcqyUuizS6TppVyZ1AR9bA%3D',
            verifyUrl: 'https://www.skills.google/public_profiles/05cf68ea-74e2-442f-8f96-a632ae8a54f7/badges/21238386',
            issueDate: '2026',
            description: 'Ethical considerations, responsible AI principles, transparency, and safety mechanisms for real-world AI applications.'
        },
        {
            id: 'gemini-image-to-sheets',
            title: 'AI Boost Bites: Gemini Image-to-Sheets Hack',
            issuer: 'Google Cloud',
            platform: 'Google Cloud Skills Boost',
            category: 'Multimodal AI',
            filterCategory: 'Google Cloud',
            image: 'https://cdn.qwiklabs.com/%2BrIpa83CQUzIpdsu0Dc5zXJiXx%2F%2BTKSi35dsTzzE2T4%3D',
            verifyUrl: 'https://www.skills.google/public_profiles/05cf68ea-74e2-442f-8f96-a632ae8a54f7/badges/21257674',
            issueDate: '2026',
            description: 'Automating data workflows by transforming visual document inputs directly into structured Google Sheets using Gemini vision prompts.'
        },
        {
            id: 'gemini-arcade-game',
            title: 'AI Boost Bites: Create Retro Arcade Game',
            issuer: 'Google Cloud',
            platform: 'Google Cloud Skills Boost',
            category: 'AI App Building',
            filterCategory: 'Google Cloud',
            image: 'https://cdn.qwiklabs.com/77xMsnOKfqYkDQRaajEihlf7nmmugzv5ORrNtUWx68I%3D',
            verifyUrl: 'https://www.skills.google/public_profiles/05cf68ea-74e2-442f-8f96-a632ae8a54f7/badges/21214352',
            issueDate: '2026',
            description: 'Building and customizing playable games using natural language prompting in Gemini Canvas with 8-bit retro styling.'
        }
    ];

    const filteredBadges = activeFilter === 'All' 
        ? badges 
        : badges.filter(b => b.filterCategory === activeFilter);

    return (
        <section id="certifications" className="certifications bg-soft">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Verified Credentials</span>
                    <h2 className="section-title">Certifications & Badges</h2>
                    <p className="cert-intro">
                        Officially verified digital credentials earned from AWS and Google Cloud, demonstrating practical expertise in Cloud Computing, Generative AI, and Prompt Engineering.
                    </p>

                    {/* Official Profile Links */}
                    <div className="cert-profile-links">
                        <a 
                            href="https://www.credly.com/users/ravindu-yashas" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="cert-profile-btn credly"
                        >
                            <ShieldCheck size={18} />
                            <span>View Credly Profile</span>
                            <ExternalLink size={14} />
                        </a>
                        <a 
                            href="https://www.skills.google/public_profiles/05cf68ea-74e2-442f-8f96-a632ae8a54f7" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="cert-profile-btn google"
                        >
                            <Sparkles size={18} />
                            <span>View Google Cloud Skills Profile</span>
                            <ExternalLink size={14} />
                        </a>
                    </div>

                    {/* Filter Tabs */}
                    <div className="cert-filter-tabs">
                        <button 
                            type="button" 
                            className={`filter-tab ${activeFilter === 'All' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('All')}
                        >
                            All Badges ({badges.length})
                        </button>
                        <button 
                            type="button" 
                            className={`filter-tab ${activeFilter === 'Google Cloud' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('Google Cloud')}
                        >
                            Google Cloud & AI ({badges.filter(b => b.filterCategory === 'Google Cloud').length})
                        </button>
                        <button 
                            type="button" 
                            className={`filter-tab ${activeFilter === 'AWS' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('AWS')}
                        >
                            AWS Cloud ({badges.filter(b => b.filterCategory === 'AWS').length})
                        </button>
                    </div>
                </div>

                {/* Badges Grid */}
                <div className="badges-display-grid">
                    {filteredBadges.map((badge) => (
                        <div key={badge.id} className="badge-card">
                            <div className="badge-image-container">
                                <img 
                                    src={badge.image} 
                                    alt={badge.title} 
                                    className="badge-graphic-img"
                                    loading="lazy"
                                />
                                <span className="badge-category-tag">{badge.category}</span>
                            </div>

                            <div className="badge-content">
                                <div className="badge-issuer-row">
                                    <span className="badge-issuer-name">{badge.issuer}</span>
                                    {badge.issueDate && (
                                        <span className="badge-issue-date">{badge.issueDate}</span>
                                    )}
                                </div>

                                <h3 className="badge-title">{badge.title}</h3>
                                <p className="badge-description">{badge.description}</p>

                                <div className="badge-card-footer">
                                    <div className="badge-verified-indicator">
                                        <CheckCircle2 size={15} />
                                        <span>Verified on {badge.platform}</span>
                                    </div>

                                    <a 
                                        href={badge.verifyUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="badge-verify-btn"
                                    >
                                        Verify Badge
                                        <ExternalLink size={14} />
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

export default Certifications;
