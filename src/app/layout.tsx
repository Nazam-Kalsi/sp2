import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/themeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bakhtawar Mechanical Works",
  description: "We build tractor parts that refuse to quit.",
  keywords: [
    "tractor parts",
    "agricultural machinery",
    "Gobind Rai Engineering Works",
    "tractor spares",
    "farm equipment",
    "industrial manufacturing"
  ],
  authors: [{ name: "Bakhtawar Mechanical Works" }],
  creator: "Bakhtawar Mechanical Works",
  publisher: "Bakhtawar Mechanical Works",
  metadataBase: new URL((process.env.PROD_URL as string)), //change in production

  // OpenGraph (for WhatsApp, LinkedIn, FB)
  openGraph: {
    title: "Bakhtawar Mechanical Works",
    description: "We build tractor parts that refuse to quit.",
    url: (process.env.PROD_URL as string),
    siteName: "Bakhtawar Mechanical Works",
    images: [
      {
        url: "https://placehold.co/600x400",
        width: 1200,
        height: 630,
        alt: "Bakhtawar Mechanical Works"
      }
    ],
    locale: "en_IN",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Bakhtawar Mechanical Works",
    description: "We build tractor parts that refuse to quit.",
    images: ["https://placehold.co/600x400"],
  },

  // Icons
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1
    }
  },

  // App manifest (PWA compatible)
  manifest: "/site.webmanifest",

  // Category
  category: "manufacturing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
