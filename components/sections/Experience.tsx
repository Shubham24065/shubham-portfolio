"use client";

import { useEffect, useState } from "react";

type ExperienceItem = {
  id: string;
  period: string;
  role: string;
  company: string;
  type: string;
  mark: string;
  featured: boolean;
  description: string;
  technologies: string[];
  contributions: string[];
};

const experiences: ExperienceItem[] = [
  {
    id: "pocketride",
    period: "May 2026 – Present",
    role: "Operations Intern",
    company: "Pocketride Inc.",
    type: "Co-op II",
    mark: "P",
    featured: true,
    description:
      "Application support & testing, mobile QA, issue investigation, and help desk operations for a live ride-share platform.",
    technologies: ["Operational Data Management","Data Validation", "Application Support", "QA Testing", "HubSpot", "Jira", "Issue Tracking"],
    contributions: [
      "• Managed and reviewed rider and driver records, investigating data inconsistencies, verifying information accuracy, and supporting day-to-day platform operations.",
      "• Investigated application and customer-reported issues using HubSpot Service Hub, rider and driver information, and operational records to identify problems and coordinate resolutions.",
      "• Performed functional testing of mobile application workflows, reproduced defects, documented findings, and tracked technical issues through Jira in collaboration with development and QA teams.",
      "• Analyzed rider and driver operational information to support issue investigation, onboarding activities, and data-driven operational decisions.",
      "• Trained incoming co-op team members on HubSpot ticket management, data handling procedures, customer support workflows, and issue escalation."
    ],
  },
  {
    id: "needlist",
    period: "Sep 2025 – Dec 2025",
    role: "Full Stack Software Developer Intern",
    company: "NeedList.org",
    type: "Co-op I",
    mark: "N",
    featured: false,
    description:
      "Application development with FlutterFlow, Firebase, and Firestore-backed data workflows.",
    technologies: ["FlutterFlow", "Firebase", "Cloud Firestore", "Full-Stack Development", "NoSQL", "Backend Integration", "Debugging"],
    contributions: [
      "• Developed and maintained application features using FlutterFlow, integrating frontend components with Firebase backend services to support end-to-end functionality.",
      "• Designed and managed Cloud Firestore collections and documents, implementing data storage, retrieval, and update operations to support application workflows.",
      "• Built and configured data-driven application workflows, connecting user interfaces with Firestore queries and backend functionality.",
      "• Tested, debugged, and resolved application issues across frontend interfaces, backend integrations, and database operations to improve reliability and user experience.",
    ],
  },
  {
  id: "vosyn",
  period: "May 2025 – Aug 2025",
  role: "Frontend Developer Intern",
  company: "Vosyn",
  type: "Summer Internship",
  mark: "V",
  featured: false,
  description:
    "Frontend development and integration of data-driven application interfaces.",
  technologies: [
    "React",
    "Frontend Development",
    "Component Development",
    "APIs",
    "Git",
    "Application Testing",
    "Debugging",
    "UI Development",
  ],
  contributions: [
    "• Developed and implemented new frontend components using React, contributing to application features, user interface functionality, and overall usability.",
    "• Debugged and resolved frontend issues by investigating component behaviour, identifying errors, and improving application functionality.",
    "• Worked with structured application data to support dynamic content rendering and integration between frontend components and application services.",
    "• Collaborated with development team members to test, refine, and maintain React components, ensuring consistency and reliability across application interfaces.",
  ],
},
];

export default function Experience() {
  const [selected, setSelected] = useState<ExperienceItem | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-heading">
          <div>
            <p className="experience-kicker"><span />EXPERIENCE</p>
            <h2>Work beyond<br /><span>the classroom.</span></h2>
          </div>
          <p className="experience-intro">
            Experience across application development, technical support, quality assurance, and software operations—working with real applications, data workflows, and operational challenges.
          </p>
        </div>

        <div className="experience-layout">
          <div className="experience-timeline">
            {experiences.map((experience) => (
              <div
                className={`experience-row ${experience.featured ? "experience-featured" : ""}`}
                key={experience.id}
              >
                <div className="timeline-meta">
                  <span className={`timeline-dot ${experience.featured ? "timeline-dot-active" : ""}`} />
                  <div><strong>{experience.period}</strong><span>{experience.type}</span></div>
                </div>

                <button
                  type="button"
                  className="experience-card experience-card-button"
                  onClick={() => setSelected(experience)}
                  aria-label={`Explore ${experience.role} experience at ${experience.company}`}
                >
                  <div className="experience-card-header">
                    <div className="experience-company">
                      <div className="experience-logo" aria-hidden="true">{experience.mark}</div>
                      <div><h3>{experience.role}</h3><p>{experience.company}</p></div>
                    </div>
                    <span className="experience-type">{experience.type}</span>
                  </div>
                  <p className="experience-description">{experience.description}</p>
                  <div className="experience-tags">
                    {experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                  <span className="experience-explore">Explore experience <span aria-hidden="true">↗</span></span>
                </button>
              </div>
            ))}
          </div>

          <aside className="experience-side" aria-label="Professional focus">
            <div className="experience-system-card experience-focus-card">
              <p className="experience-system-label">EXPERIENCE / PROFESSIONAL FOCUS</p>
              <div className="experience-focus-list">
                <div><span>01</span><div><strong>Applications</strong><p>Developing interfaces and supporting application functionality.</p></div></div>
                <div><span>02</span><div><strong>Data</strong><p>Working with application records, data storage, and retrieval.</p></div></div>
                <div><span>03</span><div><strong>Systems</strong><p>Investigating issues, testing workflows, and supporting operations.</p></div></div>
              </div>
              <p className="experience-focus-note">Experience across development and support informs how I approach practical technical problems.</p>
            </div>
          </aside>
        </div>

        <div className="experience-footer">
          <p><span />DIFFERENT ROLES. A STRONGER FOUNDATION.</p>
          <p>SOFTWARE · DATA · SYSTEMS · OPERATIONS</p>
        </div>
      </div>

      {selected && (
        <div className="experience-modal-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}>
          <div className="experience-modal" role="dialog" aria-modal="true" aria-labelledby="experience-modal-title" tabIndex={-1}>
            <button type="button" className="experience-modal-close" onClick={() => setSelected(null)} aria-label="Close experience details">×</button>
            <p className="experience-modal-eyebrow">{selected.company.toUpperCase()} / {selected.type.toUpperCase()}</p>
            <h2 id="experience-modal-title">{selected.role}</h2>
            <p className="experience-modal-period">{selected.company} · {selected.period}</p>
            <p className="experience-modal-description">{selected.description}</p>
            <h3>CONTRIBUTIONS</h3>
            <ul className="experience-modal-contributions">
              {selected.contributions.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <h3>TOOLS & FOCUS</h3>
            <div className="experience-tags">
              {selected.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
