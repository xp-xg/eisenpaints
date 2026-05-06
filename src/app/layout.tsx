import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFAB from "@/components/ContactFAB";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eisen Paints | Bring Life to Your Space | German Technology Paints",
  description: "Official website for Eisen Paints, a proudly Kenyan brand utilizing German technology for the African market. High-performance paints and coatings.",
  metadataBase: new URL("https://eisenpaints.com"), // Replace with actual domain if known
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Eisen Paints | Bring Life to Your Space",
    description: "High-performance paints and coatings utilizing German technology for the African market.",
    url: "https://eisenpaints.com",
    siteName: "Eisen Paints",
    images: [
      {
        url: "/logos/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Eisen Paints Logo",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicons/manifest.json",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ContactFAB />
      </body>
    </html>
  );
}
