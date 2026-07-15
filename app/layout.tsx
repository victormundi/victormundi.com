import type { Metadata } from "next";
import { headers } from "next/headers";
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

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host =
    headerStore.get("x-forwarded-host") ??
    headerStore.get("host") ??
    "victormundi.com";
  const protocol =
    headerStore.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title: "Jeroen Sakkers — Founder & Product Builder",
    description:
      "Selected work by Jeroen Sakkers: HireData, Sol with Rafa and Hans, First Names, yet., and Eva Keller.",
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
      title: "Jeroen Sakkers — Better systems. More human work.",
      description:
        "Five selected products across AI, automation, learning, memory and personal wellbeing.",
      siteName: "Jeroen Sakkers",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "Jeroen Sakkers — Better systems. More human work.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Jeroen Sakkers — Better systems. More human work.",
      description:
        "Five selected products across AI, automation, learning, memory and personal wellbeing.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
