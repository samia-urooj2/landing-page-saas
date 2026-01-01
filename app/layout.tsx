import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'AI SaaS Pro | Next-Gen AI Solutions',
  description: "Transform your business with cutting-edge AI solutions. Boost productivity by 200% with our intelligent platform.",
    keywords: 'AI, SaaS, Automation, Business Solutions, Next.js',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    type: 'website',
    title: 'AI SaaS Pro',
    description: 'Transform your business with cutting-edge AI solutions',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={`${inter.className} bg-white dark:bg-dark-900 text-dark-900 dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
