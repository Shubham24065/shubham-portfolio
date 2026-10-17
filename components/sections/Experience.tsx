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
    technologies: ["Application Support", "QA Testing", "HubSpot", "Jira", "Issue Tracking"],
    contributions: [
      "Investigated rider and driver support issues using HubSpot tickets, application records, and operational information.",
      "Tested mobile application workflows, documented defects, and coordinated technical escalations through Jira and internal teams.",
      "Supported help desk processes and trained incoming co-op team members on ticketing and customer-support workflows.",
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
    technologies: ["FlutterFlow", "Firebase", "Firestore", "Application Development", "Data Management"],
    contributions: [
      "Contributed to application development using FlutterFlow and Firebase.",
      "Worked with Firestore-backed application data, including data storage and retrieval within application workflows.",
      "Supported functionality connected to backend services and application data.",
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
    technologies: ["Frontend Development", "Data Integration", "APIs", "Git", "Application Development"],
    contributions: [
      "Contributed to frontend application development in a collaborative environment.",
      "Worked on user interfaces that present structured application data.",
      "Supported integration of frontend components with backend services.",
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
