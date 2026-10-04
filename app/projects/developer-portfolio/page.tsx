import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";

export default function DeveloperPortfolioPage() {
  return (
    <ProjectCaseStudy
      number="01"
      category="FULL STACK / WEB"
      status="Active"
      title="Developer Portfolio"
      headline="Building a portfolio as a software product."
      description="A production portfolio designed and developed to present software, database, data, and systems work through structured technical case studies rather than a traditional résumé-style website."
      role="Designer & Developer"
      year="2026"
      technologies={[
        "Next.js",
        "React",
        "TypeScript",
        "Resend",
        "Vercel",
      ]}
      github="https://github.com/Shubham24065/shubham-portfolio"
      live="https://shubhamkaushikportfolio.vercel.app/"
      sections={[
        {
          number: "01",
          title: "The Challenge",
          content:
            "The goal was to move beyond a traditional portfolio that simply lists skills and projects. The site needed to communicate technical work, practical experience, project depth, and the reasoning behind each project.",
        },
        {
          number: "02",
          title: "The Approach",
          content:
            "The portfolio was designed as a structured product experience rather than a collection of disconnected pages. Projects are presented as technical case studies, capabilities are organized by discipline, and each section contributes to a consistent view of the work and the problems being solved.",
        },
        {
          number: "03",
          title: "Application Architecture",
          content:
            "The portfolio is built with Next.js, React, and TypeScript using reusable components for navigation, project presentation, experience, capabilities, contact functionality, and project case studies.",
          visual: "architecture",
        },
        {
          number: "04",
          title: "Contact System",
          content:
            "The contact experience includes a custom form connected to a server-side API route. Form submissions are validated before email delivery through Resend, allowing visitors to contact me directly without exposing application credentials in the browser.",
        },
        {
          number: "05",
          title: "Deployment",
          content:
            "The application is version controlled through Git and GitHub and deployed through Vercel. Environment variables are used for deployment-specific configuration such as email service credentials.",
          visual: "deployment",
        },
        {
          number: "06",
          title: "Continuous Development",
          content:
            "The portfolio is treated as an evolving software project rather than a finished static website. New case studies, technical projects, and capabilities are added as the underlying work is completed.",
        },
      ]}
    />
  );
}