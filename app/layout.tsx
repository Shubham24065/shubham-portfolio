
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

const siteUrl = "https://shubhamsharmaportfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Shubham Sharma | Software Developer",
    template: "%s | Shubham Sharma",
  },

  description:
    "Explore the portfolio of Shubham Sharma, featuring software development, SQL, database systems, data analysis, and practical technology projects.",

  applicationName: "Shubham Sharma Portfolio",

  keywords: [
    "Shubham Sharma",
    "Software Developer",
    "SQL Developer",
    "Database Development",
    "SQL Server",
    "Data Analysis",
    "Next.js",
    "React",
    "Portfolio",
  ],

  authors: [{ name: "Shubham Sharma" }],
  creator: "Shubham Sharma",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Shubham Sharma Portfolio",
    title: "Shubham Sharma | Software Developer",
    description:
      "Explore software development, SQL, database systems, data analysis, and practical technology projects by Shubham Sharma.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shubham Sharma | Software Developer",
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
