
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";

export default function HotelReservationSystemPage() {
  return (
    <ProjectCaseStudy
      number="02"
      category="SOFTWARE / DATABASE"
      status="Completed"
      title="Hotel Reservation System"
      headline="Engineering hotel operations into one integrated application."
      description="A desktop-based reservation and billing system developed with Java, JavaFX, Hibernate/JPA, and MySQL. The application brings together guest booking, administrative management, pricing, billing, loyalty programs, and reporting."
      role="Application Developer"
      year="2026"
      technologies={[
        "Java",
        "JavaFX",
        "Hibernate/JPA",
        "MySQL",
        "BCrypt",
        "Git",
      ]}
      github="https://github.com/Shubham24065/hotel-reservation-system"
      sections={[
        {
          number: "01",
          title: "Project Context",
          content:
            "The project was designed to replace manual hotel reservation processes with a structured desktop application. It simulates hotel operations through separate guest-facing booking and administrative management workflows.",
        },
        {
          number: "02",
          title: "Application Architecture",
          content:
            "The system follows a three-tier architecture separating JavaFX presentation components, service-layer business rules, and Hibernate/JPA persistence backed by MySQL. Repository abstractions organize database operations and support separation of concerns.",
          visual: "hotel-architecture",
        },
        {
          number: "03",
          title: "Reservation and Billing",
          content:
            "The booking workflow includes guest occupancy validation, room selection, optional services, pricing rules, reservation summaries, and billing estimates. Administrative workflows cover reservation management, payments, refunds, and checkout.",
        },
        {
          number: "04",
          title: "Database and Persistence",
          content:
            "Hibernate/JPA manages entity relationships and database persistence through repository abstractions. The data layer supports transaction handling, query management, and entity validation.",
        },
        {
          number: "05",
          title: "Security and Administration",
          content:
            "Administrative functionality includes BCrypt password hashing, role-based authorization, activity logging, reservation management, reporting, and guest feedback workflows.",
        },
        {
          number: "06",
          title: "Reporting and Operations",
          content:
            "The system includes revenue and occupancy reporting, loyalty point management, feedback tracking, and export functionality for operational records.",
        },
      ]}
    />
  );
}
