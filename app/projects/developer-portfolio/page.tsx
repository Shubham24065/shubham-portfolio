import type { Metadata } from "next";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description:
    "A Next.js and TypeScript portfolio built with reusable project case studies, a validated contact API, Vercel Web Analytics, and production deployment.",
  alternates: {
    canonical: "/projects/developer-portfolio",
  },
};

export default function DeveloperPortfolioPage() {
  return (
    <ProjectCaseStudy
      number="03"
      category="FULL STACK / WEB"
      status="Active"
      title="Developer Portfolio"
      headline="Building a portfolio as a software product."
      description="A production-deployed Next.js application that brings software, SQL, database, and systems work into one structured experience. Beyond presenting projects, it includes reusable case-study components, interactive technical evidence, a server-side contact workflow, and privacy-focused traffic analytics."
      role="Designer & Developer"
      year="2026"
      technologies={[
        "Next.js",
        "React",
        "TypeScript",
        "CSS",
        "Resend",
        "Vercel",
        "Git / GitHub",
      ]}
      github="https://github.com/Shubham24065/shubham-portfolio"
      live="https://shubhamsharmaportfolio.vercel.app/"
      sections={[
        {
          number: "01",
          title: "Problem & Objectives",
          content:
            "A conventional portfolio can show project titles and technology badges without explaining the work behind them. I wanted a platform where a reviewer could move quickly from a high-level overview to implementation details, technical decisions, and supporting evidence. The main objectives were clear navigation, consistent presentation, direct access to GitHub repositories, and a maintainable foundation for adding new work.",
        },
        {
          number: "02",
          title: "Product Structure & Experience",
          content:
            "The homepage connects selected projects, experience, technical capabilities, background, recognition, and contact information. A separate projects listing and individual case-study routes let visitors explore work in more depth. The interface uses a consistent dark visual system, responsive layouts, project previews, status indicators, and clear navigation between overview and detail pages.",
          images: [
            { src: "/projects/developer-portfolio/portfolio-homepage.png", alt: "Developer Portfolio homepage showing hero and software data SQL visualizations", caption: "01 / Homepage — hero section, navigation and custom technical visualization" },
            { src: "/projects/developer-portfolio/portfolio-projects.png", alt: "Selected projects cards for Northstar Retail Hotel Reservation System and Developer Portfolio", caption: "02 / Featured work — project previews, status indicators and direct case-study navigation" },
          ],
        },
        {
          number: "03",
          title: "Application Architecture",
          content:
            "The application uses the Next.js App Router with React and TypeScript. Route files in the app directory define the homepage, project listing, individual case studies, and contact API. Shared components handle navigation, homepage sections, and project presentation. Most content is rendered as pages, while interactive features such as the contact form use client-side state and event handling. The contact endpoint runs server-side and communicates with Resend.",
          visual: "portfolio-architecture",
        },
        {
          number: "04",
          title: "Reusable Case Studies & Technical Evidence",
          content:
            "Instead of creating unrelated layouts for each project, I built a shared ProjectCaseStudy component driven by project metadata and an ordered list of content sections. The component consistently renders the hero, project overview, technology stack, technical sections, visualizations, and navigation. Specialized visuals extend the same system: Northstar Retail includes an entity-relationship diagram and a 15-ticket SQL showcase, while the Hotel Reservation System presents architecture and application screenshots.",
          images: [
            { src: "/projects/developer-portfolio/portfolio-sql-showcase.png", alt: "Northstar Retail SQL ticket grid within the portfolio case study", caption: "03 / Technical evidence — the reusable project layout supports a dedicated SQL ticket showcase" },
          ],
        },
        {
          number: "05",
          title: "Contact Form & Server-Side Email Delivery",
          content:
            "The contact section combines a controlled React form with a Next.js POST endpoint at /api/contact. The server checks required fields, validates email format and field lengths, handles a honeypot spam field, and escapes user-provided text before constructing the email. Resend sends the message using a server-side API key, while the interface displays loading, success, and error states. Visitors can also use direct social links or copy the email address.",
          images: [
            { src: "/projects/developer-portfolio/portfolio-contact.png", alt: "Portfolio contact section with contact links and message form", caption: "04 / Contact interface — direct links, copy-email option and validated message form" },
          ],
          visual: "portfolio-contact-flow",
        },
        {
          number: "06",
          title: "Metadata, Analytics & Discoverability",
          content:
            "Site-wide metadata defines a descriptive title, page description, canonical configuration, and Open Graph and Twitter metadata. The project also integrates Vercel Web Analytics through the root layout, allowing page views and aggregated visitor activity to be reviewed privately. Analytics is used to understand traffic and page interest, not to identify individual visitors.",
            images: [
            { src: "/projects/developer-portfolio/portfolio-vercel-analytics.png", alt: "Northstar Retail SQL ticket grid within the portfolio case study", caption: "05 / Web Analytics — privacy-focused traffic monitoring and page-level engagement insights through Vercel." },
          ],
        },
        {
          number: "07",
          title: "Version Control & Deployment",
          content:
            "Development is managed through Git and GitHub, with the application deployed to Vercel. The production build generates the public pages and provides an on-demand server route for contact submissions. Configuration such as the Resend API key is read from environment variables rather than being embedded in client-side code. Dependency updates and production builds are checked as part of maintaining the application.",
          visual: "deployment",
        },
        {
          number: "08",
          title: "Engineering Decisions & Trade-offs",
          content:
            "I prioritized a reusable component structure over duplicating project-page markup, and used custom CSS to control the visual identity across the site. I kept analytics private instead of displaying a public visitor counter, and used a server-side email integration instead of exposing service credentials in the browser. The shared case-study model improves consistency, while project-specific visuals allow technical work to be presented without forcing every project into an identical format.",
        },
        {
          number: "09",
          title: "Outcome & Continued Development",
          content:
            "The result is a deployed, navigable portfolio with detailed technical project pages, a contact workflow, structured metadata, and working visitor analytics. The project is maintained as an active application: new work can be added through the existing project structure, and individual case studies can be refined as supporting evidence and implementations evolve. Its value is both as a professional showcase and as a demonstration of application organization, frontend development, API integration, and deployment practices.",
        },
      ]}
    />
  );
}
