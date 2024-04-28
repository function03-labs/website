import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: false,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} | %s`,
  },
  description: siteConfig.description,
  keywords: [
    "next.js",
    "typescript",
    "tailwindcss",
    "function03labs",
    "function03",
    "blockchain",
    "web3",
    "decentralized",
    "public goods",
  ],
  authors: [
    {
      name: "aiden",
      url: "https://twitter.com/function03labs",
    },
  ],
  creator: "aiden",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@function03labs",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicons/favicon-16x16.png",
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  metadataBase: new URL(siteConfig.url),
}

interface AppLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <LayoutWrapper>
          <SiteHeader />
          {children} <SiteFooter />
        </LayoutWrapper>
      </body>
    </html>
  )
}
