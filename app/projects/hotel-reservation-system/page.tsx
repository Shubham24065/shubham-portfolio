
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
          title: "Application in Action",
          content:
            "The application connects a guided guest booking experience with hotel administration. The screens demonstrate room selection, optional services, reservation pricing, payment validation, and guest checkout.",
          visual: "hotel-showcase",
        },
        {
          number: "04",
          title: "Reservation and Billing",
          content:
            "The reservation workflow guides guests through occupancy details, room selection, optional services, and a final booking summary. Pricing calculations account for room rates, selected add-ons, and applicable charges before confirmation. Administrative workflows support reservation lookup, payment processing, balance validation, refunds, and guest checkout.",
        },
        {
          number: "05",
          title: "Database and Persistence",
          content:
            "The application uses MySQL for relational data storage and Hibernate/JPA for object-relational mapping. Entity and repository layers organize database operations, while service-layer logic handles reservation rules and transaction workflows. This separation keeps persistence concerns independent from JavaFX interface components.",
          visual: "hotel-database",
        },
        {
          number: "06",
          title: "Security and Administration",
          content:
            "Administrative access is protected through authentication and role-based authorization, with BCrypt used for password hashing. The management interface supports reservation administration, payment validation, activity logging, and operational tasks through controlled application workflows.",
        },
        {
          number: "07",
          title: "Reporting and Operations",
          content:
            "The administrative dashboard supports hotel operations through reservation management, occupancy and revenue reporting, loyalty point tracking, guest feedback, and data export capabilities. These features bring booking activity and operational information together within one application.",
        },
      ]}
    />
  );
}
