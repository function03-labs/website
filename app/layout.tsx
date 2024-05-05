import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { SiteFooter } from "@/components/layout/site-footer"

const font = Montserrat({
  display: "swap",
  subsets: ["latin"],
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
    <html lang="en">
      <head />
      <body
        className={cn(
          font.className,
          "min-h-screen bg-white antialiased dark:bg-black"
        )}
      >
        <LayoutWrapper>
          {children}
          <SiteFooter />
        </LayoutWrapper>
      </body>
    </html>
  )
}
