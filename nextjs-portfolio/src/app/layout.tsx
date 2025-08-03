import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huzaifa Nasir - Portfolio",
  description: "Computer Science Student at FAST-NUCES | Skilled in Python, MERN Stack, Java, C++, Kubernetes, AWS, Docker, Terraform, and Parallel Computing | Passionate about AI, Game Development, Web Development, and DevOps",
  keywords: "Huzaifa Nasir, Portfolio, Computer Science, FAST-NUCES, Python, MERN Stack, Java, C++, Kubernetes, AWS, Docker, Machine Learning, AI, Game Development, Web Development, DevOps",
  authors: [{ name: "Huzaifa Nasir" }],
  creator: "Huzaifa Nasir",
  openGraph: {
    title: "Huzaifa Nasir - Portfolio",
    description: "Computer Science Student passionate about AI, Game Development, Web Development, and DevOps",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
