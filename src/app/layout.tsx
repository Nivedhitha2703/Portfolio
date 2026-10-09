import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nivedhitha J. | AI & Full-Stack Developer",
  description:
    "Portfolio of Nivedhitha J., a Computer Science Engineering student exploring AI, machine learning, and full-stack development.",
  keywords: [
    "Nivedhitha J",
    "AI",
    "Machine Learning",
    "Full-Stack Development",
    "React",
    "TypeScript",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
