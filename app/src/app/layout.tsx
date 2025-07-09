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
  title: "CuboApp - Transform Your Business with Analytics",
  description: "Comprehensive analytics and insights platform to help businesses make data-driven decisions and accelerate growth. Start your free trial today.",
  keywords: "analytics, business intelligence, data visualization, dashboard, insights, reporting",
  authors: [{ name: "CuboApp Team" }],
  openGraph: {
    title: "CuboApp - Transform Your Business with Analytics",
    description: "Comprehensive analytics and insights platform to help businesses make data-driven decisions and accelerate growth.",
    type: "website",
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
