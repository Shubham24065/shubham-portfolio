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
              <svg
  viewBox="0 0 24 24"
  className="contact-github-svg"
  aria-hidden="true"
>
  <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
</svg>

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

          {/* SYSTEM VISUAL */}

<div className="contact-visual">
  <div className="contact-visual-grid" />

  {/* Decorative raised blocks */}
  <span className="visual-block visual-block-1" />
  <span className="visual-block visual-block-2" />
  <span className="visual-block visual-block-3" />
  <span className="visual-block visual-block-4" />
  <span className="visual-block visual-block-5" />

  {/* Connection lines */}
  <svg
    className="contact-network-lines"
    viewBox="0 0 700 330"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path d="M350 110 L180 230" />
    <path d="M350 110 L500 230" />
    <path d="M180 230 L350 110 L500 230" />
  </svg>

  {/* Email */}
  <div className="contact-node contact-node-email">
    <div className="contact-node-face">
      <svg
        viewBox="0 0 24 24"
        className="contact-node-svg"
        aria-hidden="true"
      >
        <path d="M3 6.5h18v11H3z" />
        <path d="m3.5 7 8.5 6 8.5-6" />
      </svg>
    </div>
  </div>

  {/* GitHub */}
  <div className="contact-node contact-node-github">
    <div className="contact-node-face">
      <svg
        viewBox="0 0 24 24"
        className="contact-node-svg contact-node-svg-fill"
        aria-hidden="true"
      >
        <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
      </svg>
    </div>
  </div>

  {/* LinkedIn */}
  <div className="contact-node contact-node-linkedin">
    <div className="contact-node-face">
      <svg
        viewBox="0 0 24 24"
        className="contact-node-svg contact-node-svg-fill"
        aria-hidden="true"
      >
        <path d="M5.37 3.5A2.37 2.37 0 1 1 .63 3.5a2.37 2.37 0 0 1 4.74 0ZM.94 7.1h4.74V22H.94V7.1Zm7.64 0h4.54v2.04h.06c.63-1.2 2.18-2.47 4.49-2.47 4.8 0 5.69 3.16 5.69 7.27V22h-4.73v-7.14c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.75 1.86-2.75 3.78V22H8.58V7.1Z" />
      </svg>
    </div>
  </div>

  {/* Copy */}
  <div className="contact-visual-copy">
    <span>SOFTWARE</span>
    <span>DATA</span>
    <span>SYSTEMS</span>
    <span>PEOPLE</span>
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

        <div className="footer-socials">
  <a
    href="https://www.linkedin.com/in/shubham-sharma-1650a2310/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <span className="footer-linkedin-icon">in</span>
  </a>

  <a
    href="https://github.com/Shubham24065"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <svg
      viewBox="0 0 24 24"
      className="footer-github-icon"
      aria-hidden="true"
    >
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
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