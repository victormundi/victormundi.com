import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import "./globals.css";
import "./editorial.css";

const siteUrl = new URL("https://victormundi.com");
const socialImage = new URL("/og.jpg", siteUrl).toString();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Jeroen Sakkers — Founder of HireData | Improve Every Day",
  description:
    "Jeroen Sakkers is the Amsterdam founder of HireData. Explore his AI products, national business radio work, 2,000-person event and portfolio exit into a leading Dutch insurance group.",
  applicationName: "Jeroen Sakkers",
  authors: [{ name: "Jeroen Sakkers", url: "https://victormundi.com" }],
  creator: "Jeroen Sakkers",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/jeroen.png",
    shortcut: "/jeroen.png",
    apple: "/jeroen.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Jeroen Sakkers — Founder of HireData | Improve Every Day",
    description:
      "Founder of HireData. Building AI products, communities and systems around one principle: Improve Every Day.",
    siteName: "Jeroen Sakkers",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Jeroen Sakkers, founder of HireData — Improve Every Day",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@victormundi",
    site: "@victormundi",
    title: "Jeroen Sakkers — Founder of HireData | Improve Every Day",
    description:
      "Founder of HireData. Building AI products, communities and systems around one principle: Improve Every Day.",
    images: [socialImage],
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
      className={`${geistSans.variable} ${newsreader.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
