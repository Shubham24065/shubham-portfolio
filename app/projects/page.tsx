
import type { Metadata } from "next";
import Link from "next/link";
import FeaturedWork from "@/components/sections/FeaturedWork";

export const metadata: Metadata = {
  title: "Projects | Shubham Sharma",
  description:
    "Explore software development, database, and data projects by Shubham Sharma.",
};

export default function ProjectsPage() {
  return (
    <main className="all-projects-page">
      <div className="all-projects-top">
        <Link href="/" className="all-projects-back">
          <span aria-hidden="true">←</span> Back to home
        </Link>

        <p className="all-projects-label">
          SOFTWARE / DATA / SYSTEMS
        </p>

        <h1>
          All <span>Projects.</span>
        </h1>

        <p className="all-projects-description">
          A collection of applications and database projects demonstrating SQL, system design, technical problem-solving, and software development.
        </p>
      </div>

      <FeaturedWork mode="all" />
    </main>
  );
}
