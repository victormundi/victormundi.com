import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const siteUrl = new URL("https://victormundi.com");
const socialImage = new URL("/og.jpg", siteUrl).toString();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Jeroen Sakkers — Improve Every Day",
  description:
    "Jeroen Sakkers is an Amsterdam entrepreneur and founder of HireData, building products that learn through use and help people discover and develop their superpower.",
  applicationName: "Jeroen Sakkers",
  authors: [{ name: "Jeroen Sakkers", url: "https://victormundi.com" }],
  creator: "Jeroen Sakkers",
  alternates: { canonical: "/" },
  icons: {
    icon: "/jeroen.png",
    shortcut: "/jeroen.png",
    apple: "/jeroen.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Jeroen Sakkers — Improve Every Day",
    description:
      "Products that turn feedback into learning and help people discover, develop and use their superpower.",
    siteName: "Jeroen Sakkers",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Jeroen Sakkers — Build. Learn. Improve.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@victormundi",
    site: "@victormundi",
    title: "Jeroen Sakkers — Improve Every Day",
    description:
      "Products that turn feedback into learning and help people discover, develop and use their superpower.",
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
