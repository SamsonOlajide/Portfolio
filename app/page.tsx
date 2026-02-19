"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ParticlesLinks } from '../components/particles-links';
import { useTheme } from '../components/theme-provider';

const skills = [
  'Java',
  'Python',
  'TypeScript',
  'React Native',
  'HTML',
  'CSS',
  'JavaScript',
  'FastAPI',
  'Temporal',
  'AWS'
];

const professionalExperience = [
  {
    company: 'Eli Lilly',
    location: 'Bracknell, UK',
    roles: [
      'Software Engineer (Part-time/Zero-Hour) - August 2025 to Present',
      'Software Engineer (Placement) - July 2024 to August 2025'
    ],
    summary:
      'Contributed to high-impact projects across LLM infrastructure, internal tooling, and full-stack development during a year-long placement and ongoing part-time role.',
    highlights: [
      'Deployed LLM-powered classification models for Adverse Events and Product Complaints, reducing manual triage through scalable model execution pipelines.',
      'Designed and implemented a token-based redaction model that improved PHI redaction accuracy beyond regex-based systems.',
      'Automated model performance reporting with Python and Temporal, introducing dynamic configuration with around 60% less manual effort.',
      'Optimized AWS Textract OCR workflows for Data Extraction Service to improve form and table parsing reliability and reduce pipeline errors.',
      'Built and maintained an internal Next.js employee portal with Graph, JIRA, and Workday integrations plus CI/CD workflow improvements.',
      'Led a portal redesign sprint under tight timelines and delivered features that improved team velocity.'
    ]
  },
  {
    company: 'PromTron Solutions A.S',
    location: 'Prague, Czech Republic',
    roles: ['Intern - 2022'],
    summary:
      'Completed a business-technology internship focused on market-fit partner discovery for a cloud B2B platform in the promotional product sector.',
    highlights: [
      'Designed and implemented a structured partner-company database using market-fit and service-alignment criteria.',
      'Improved lead targeting and reduced manual filtering with business-logic driven collaborator scoring.',
      'Worked with stakeholders and presented findings to senior team members with strong commercial alignment.'
    ]
  }
];

const projects = [
  {
    title: 'LOCKD',
    period: '2024 - 2025',
    description:
      'Collaborative photo album platform built with Next.js, where multiple users contribute to shared albums. Added an Edge AI sentiment model to score positivity of album titles for user feedback.',
    highlights: [
      'Implemented secure authentication with NextAuth and Google OAuth.',
      'Managed user and application data with Prisma and media storage on AWS S3.'
    ]
  },
  {
    title: 'Bus Time Provider',
    period: '2023',
    description:
      'Built a scraper for live Oxford bus timings and delivered automated updates via messaging platforms to solve reminder gaps in the original service.',
    highlights: [
      'Integrated with Discord API for automatic arrival notifications and reminders.',
      'Explored embedded-system extension ideas for a standalone Arduino or Raspberry Pi display.'
    ]
  }
];

const education = {
  school: 'Oxford Brookes University',
  location: 'Oxford, UK',
  degree: 'BSc (Hons) Computer Science',
  period: '2022 - 2026',
  grade: 'Overall Grade: 1st class / 4.0 GPA (as of 2nd year)',
  modules: ['Object Oriented Programming', 'DevOps', 'Mathematics for Computing']
};

const contactLinks = [
  { label: 'Email', href: 'mailto:samsonolajide03@gmail.com' },
  { label: 'Phone', href: 'tel:+447490750450' },
  { label: 'GitHub', href: 'https://github.com/SamsonOlajide' },
  { label: 'Portfolio', href: 'https://samsonolajide.github.io/Portfolio/' }
];

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="page">
      <ParticlesLinks theme={theme} />
      <div className="grid-overlay" aria-hidden />

      <header className="top-nav glass">
        <span className="brand">SO</span>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {mounted ? (theme === 'dark' ? 'Light' : 'Dark') : 'Theme'}
        </button>
      </header>

      <section className="hero" id="home">
        <p className="hero-chip">Software Engineer</p>
        <h1 className="hero-name">
          <span className="hero-solid">SAMSON</span>
          <span className="hero-outline">OLAJIDE</span>
        </h1>
        <p className="hero-copy">
          Building production systems across LLM workflows, OCR pipelines, and modern full-stack platforms. Focused on practical engineering that scales.
        </p>
        <div className="actions hero-actions">
          <a href="#contact" className="button primary">Reach Out</a>
          <a href="#projects" className="button ghost">View Work</a>
        </div>
        <div className="hero-stats">
          <span>London, UK</span>
          <span>2+ years industry experience</span>
          <span>AWS Solutions Architect Associate</span>
        </div>
        <div className="floating-shape" aria-hidden />
      </section>

      <section className="section" id="skills">
        <div className="section-header">
          <p className="eyebrow">Languages and Tools</p>
          <h2>Technical stack</h2>
        </div>
        <div className="tag-row">
          {skills.map((skill) => (
            <span key={skill} className="tag">{skill}</span>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-header">
          <p className="eyebrow">Professional Experience</p>
          <h2>Recent roles and impact</h2>
        </div>
        <div className="project-grid">
          {professionalExperience.map((item) => (
            <article key={item.company} className="project-card glass card-animate">
              <div className="project-top">
                <div>
                  <p className="eyebrow">{item.location}</p>
                  <h3>{item.company}</h3>
                  <p className="muted">{item.summary}</p>
                </div>
              </div>
              <div className="role-list">
                {item.roles.map((role) => (
                  <p key={role} className="role-item">{role}</p>
                ))}
              </div>
              <ul className="detail-list">
                {item.highlights.map((point) => (
                  <li key={point} className="muted">{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-header">
          <p className="eyebrow">Personal Projects</p>
          <h2>Built and shipped</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card glass card-animate">
              <div className="project-top">
                <div>
                  <p className="eyebrow">{project.period}</p>
                  <h3>{project.title}</h3>
                  <p className="muted">{project.description}</p>
                </div>
              </div>
              <ul className="detail-list">
                {project.highlights.map((point) => (
                  <li key={point} className="muted">{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="resume">
        <div className="section-header">
          <p className="eyebrow">Education and Certification</p>
          <h2>Academic profile</h2>
        </div>
        <article className="project-card glass card-animate">
          <h3>{education.school}</h3>
          <p className="muted">{education.location}</p>
          <p className="role-item">{education.degree} ({education.period})</p>
          <p className="muted">{education.grade}</p>
          <p className="role-item">Modules: {education.modules.join(', ')}</p>
          <p className="role-item">Certification: AWS Solutions Architect - Associate</p>
        </article>
      </section>

      <section className="section contact" id="contact">
        <div className="cta glass card-animate">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Open to engineering opportunities</h2>
            <p className="muted">Reach out for internships, graduate roles, or collaboration on product-focused software projects.</p>
          </div>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="button ghost"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
