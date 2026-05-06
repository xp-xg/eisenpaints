import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFAB from "@/components/ContactFAB";
import ScrollToTop from "@/components/ScrollToTop";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eisen Paints | German Technology Paints for Africa",
  description: "Premium quality paints engineered with German precision for the African climate. Interior, exterior, and specialty coatings that bring life to your space.",
  keywords: "paints, coatings, Kenyan paints, German technology, interior paints, exterior paints, Eisen Paints",
  openGraph: {
    title: "Eisen Paints | German Technology Paints for Africa",
    description: "Premium quality paints engineered with German precision for the African climate.",
    url: "https://eisenpaints.com",
    siteName: "Eisen Paints",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eisen Paints | German Technology Paints for Africa",
    description: "Premium quality paints engineered with German precision for the African climate.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
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
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <ContactFAB />
      </body>
    </html>
  );
}
