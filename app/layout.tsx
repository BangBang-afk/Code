import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubang Srivatsa - AI Systems Architect & Full Stack Engineer",
  description: "Portfolio showcasing AI systems architecture, full stack development, and cloud infrastructure expertise. Specialized in assistive AI, data engineering, and responsive design.",
  keywords: ["AI", "Full Stack", "Cloud Architecture", "Next.js", "Python", "AWS"],
  authors: [{ name: "Shubang Srivatsa" }],
  openGraph: {
    title: "Shubang Srivatsa - Portfolio",
    description: "AI Systems Architect & Full Stack Engineer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
