import type { Metadata } from "next";
import { Geist, Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

const ogImage = `${defaultUrl}/JanSampark.png`;

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title:
    "JanSampark - Crowdsourced Civic Issue Reporting & Resolution Platform",
  description:
    "JanSampark is a crowdsourced civic issue reporting and resolution platform. Report local issues, track progress, and collaborate with officials to improve your community. Join thousands of citizens making a difference.",
  keywords: [
    "civic issues",
    "community reporting",
    "local government",
    "public issues",
    "citizen engagement",
    "issue tracking",
    "civic engagement",
    "community improvement",
  ],
  authors: [{ name: "Shoaib Malik" }],
  creator: "Shoaib Malik",
  publisher: "Shoaib Malik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "JanSampark - Crowdsourced Civic Issue Reporting & Resolution",
    description:
      "Report local civic issues, track progress, and collaborate with officials to improve your community. Join thousands of citizens making a difference.",
    url: defaultUrl,
    siteName: "JanSampark",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "JanSampark - Civic Issue Reporting Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JanSampark - Crowdsourced Civic Issue Reporting",
    description:
      "Report local civic issues, track progress, and improve your community.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: defaultUrl,
  },
  icons: {
    icon: [
      { url: "/JanSampark.png" },
      {
        url: "https://i.postimg.cc/d1hG5p43/Jan-Samvaad.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://i.postimg.cc/d1hG5p43/Jan-Samvaad.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://i.postimg.cc/d1hG5p43/Jan-Samvaad.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});
const manrope = Manrope({
  variable: "--font-manrope",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} antialiased`}>
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
