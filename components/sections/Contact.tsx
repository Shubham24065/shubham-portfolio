"use client";

import { useState, type FormEvent } from "react";


type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contactTypes = [
  {
    icon: "▤",
    title: "Project Discussions",
  },
  {
    icon: "♙",
    title: "Collaboration Opportunities",
  },
  {
    icon: "◇",
    title: "Ideas & Consultations",
  },
  {
    icon: "□",
    title: "General Questions",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<
  "idle" | "success" | "error"
  >("idle");

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  setIsSubmitting(true);
  setStatus("idle");
  setStatusMessage("");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        website: "",
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Unable to send message.");
    }

    setStatus("success");
    setStatusMessage(
      "Message sent successfully. I'll get back to you soon."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    setStatus("error");

    setStatusMessage(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
    };
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* =====================================================
            LEFT
        ====================================================== */}

        <div className="contact-left">
          <div className="contact-section-label">
            <span />
            <p>06 / CONTACT</p>
          </div>

          <h2 className="contact-title">
            Let&apos;s <span>connect.</span>
          </h2>

          <p className="contact-intro">
            I&apos;m always interested in conversations about software
            development, databases, data, systems, and opportunities where
            technology can solve real-world problems.
          </p>

          {/* CONTACT LINKS */}

          <div className="contact-links">
            <a
              className="contact-link contact-link-primary"
              href="mailto:shubham24065@gmail.com"
            >
              <span className="contact-link-icon">✉</span>
              <span>Email me</span>
              <span className="contact-link-arrow">→</span>
            </a>

            <a
              className="contact-link"
              href="https://www.linkedin.com/in/shubham-sharma-1650a2310/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-social-icon">in</span>
              <span>LinkedIn</span>
              <span className="contact-link-arrow">↗</span>
            </a>

            <a
              className="contact-link"
              href="https://github.com/Shubham24065"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-github-icon">●</span>
              <span>GitHub</span>
              <span className="contact-link-arrow">↗</span>
            </a>
          </div>

          {/* CONTACT TYPES */}

          <div className="contact-types">
            {contactTypes.map((type) => (
              <div className="contact-type" key={type.title}>
                <span className="contact-type-icon">{type.icon}</span>

                <span>{type.title}</span>
              </div>
            ))}
          </div>

          {/* SYSTEM VISUAL */}

          <div className="contact-visual">
            <div className="contact-visual-grid" />

            <div className="contact-node contact-node-email">
              <span>✉</span>
            </div>

            <div className="contact-node contact-node-github">
              <span>GH</span>
            </div>

            <div className="contact-node contact-node-linkedin">
              <span>in</span>
            </div>

            <span className="contact-path path-one" />
            <span className="contact-path path-two" />

            <div className="contact-visual-copy">
              SOFTWARE
              <br />
              DATA
              <br />
              SYSTEMS
              <br />
              PEOPLE
              <br />
              <strong>REAL IMPACT</strong>
            </div>
          </div>
        </div>

        {/* =====================================================
            FORM
        ====================================================== */}

        <div className="contact-form-panel">
          <div className="contact-form-header">
            <div className="contact-form-heading">
              <span />
              <p>SEND A MESSAGE</p>
            </div>

            <p className="contact-response-note">
              <span>✉</span>
              I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">
                  Name <span>*</span>
                </label>

                <div className="contact-input-wrapper">
                  <span className="field-icon">♙</span>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={100}
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">
                  Email <span>*</span>
                </label>

                <div className="contact-input-wrapper">
                  <span className="field-icon">✉</span>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>
            </div>
<div
  aria-hidden="true"
  style={{
    position: "absolute",
    left: "-9999px",
    width: "1px",
    height: "1px",
    overflow: "hidden",
  }}
>
  <label htmlFor="website">Website</label>

  <input
    id="website"
    type="text"
    name="website"
    tabIndex={-1}
    autoComplete="off"
  />
</div>

            <div className="contact-field">
              <label htmlFor="contact-subject">
                Subject <span>*</span>
              </label>

              <div className="contact-input-wrapper">
                <span className="field-icon">◇</span>

                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    What&apos;s this about?
                  </option>

                  <option value="project">
                    Project / Work
                  </option>

                  <option value="opportunity">
                    Opportunity
                  </option>

                  <option value="question">
                    General Question
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">
                Message <span>*</span>
              </label>

              <div className="contact-input-wrapper contact-message-wrapper">
                <span className="field-icon message-icon">▤</span>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  minLength={10}
                  maxLength={2000}
                />
              </div>

              <span className="contact-character-count">
                {formData.message.length} / 2000
              </span>
            </div>

            <div className="contact-submit-row">
              <button
                className="contact-submit"
                type="submit"
                disabled={isSubmitting}
              >
                <span>➤</span>

                {isSubmitting ? "Sending..." : "Send message"}

                <span>→</span>
              </button>

                {status !== "idle" && (
                    <p
                        className={`contact-form-status ${
                        status === "success"
                            ? "contact-form-status-success"
                            : "contact-form-status-error"
                        }`}
                        role="status"
                        aria-live="polite"
                    >
                        {statusMessage}
                    </p>
                )}
            </div>
          </form>

          <div className="contact-privacy">
            <p>
              <span>♙</span>
              Your information is only used to respond to your message.
            </p>

            <span>No spam. Ever.</span>
          </div>
        </div>
      </div>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="contact-footer">
        <div className="contact-footer-brand">
          <strong>SHUBHAM KAUSHIK</strong>
          <span>SOFTWARE · DATA · SYSTEMS · REAL IMPACT</span>
        </div>

        <nav className="contact-footer-nav" aria-label="Footer navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="contact-footer-socials">
          <a href="mailto:shubham24065@gmail.com" aria-label="Email">
            ✉
          </a>

          <a
            href="https://www.linkedin.com/in/shubham-sharma-1650a2310/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>

          <a
            href="https://github.com/Shubham24065"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>
        </div>

        <div className="contact-footer-meta">
          <span>© 2026 Shubham Kaushik</span>
          <span>Designed &amp; built by Shubham Kaushik</span>
        </div>
      </footer>
    </section>
  );
}