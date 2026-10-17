
import type { Metadata } from "next";
import Link from "next/link";
import FeaturedWork from "@/components/sections/FeaturedWork";

export const metadata: Metadata = {
  title: "Projects | Shubham Kaushik",
  description:
    "Explore software development, database, and data projects by Shubham Kaushik.",
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
          A closer look at the applications, database systems,
          and practical solutions I&apos;ve built and continue
          to develop.
        </p>
      </div>

      <FeaturedWork mode="all" />
    </main>
  );
}
