
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://shubhamkaushikportfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Shubham Kaushik | Software Developer",
    template: "%s | Shubham Kaushik",
  },

  description:
    "Explore the portfolio of Shubham Kaushik, featuring software development, SQL, database systems, data analysis, and practical technology projects.",

  applicationName: "Shubham Kaushik Portfolio",

  keywords: [
    "Shubham Kaushik",
    "Software Developer",
    "SQL Developer",
    "Database Development",
    "SQL Server",
    "Data Analysis",
    "Next.js",
    "React",
    "Portfolio",
  ],

  authors: [{ name: "Shubham Kaushik" }],
  creator: "Shubham Kaushik",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Shubham Kaushik Portfolio",
    title: "Shubham Kaushik | Software Developer",
    description:
      "Explore software development, SQL, database systems, data analysis, and practical technology projects by Shubham Kaushik.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shubham Kaushik | Software Developer",
    description:
      "Software development, SQL, database systems, and practical technology projects.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <Analytics />
      </body>
    </html>
  );
}
