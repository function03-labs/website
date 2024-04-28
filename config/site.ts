import { SiteConfig } from "types"

export const siteConfig: SiteConfig = {
  name: "Function03 Labs",
  description:
    "Function03 Labs is a decentralized public goods lab building web3 tools and infrastructure.",
  url: "https://www.fn03.xyz/",
  ogImage: "https://www.fn03.xyz/opengraph/web.png",
  links: {
    twitter: "https://twitter.com/function03labs",
    github: "https://github.com/function03-labs",
  },
}

export const notFoundMetadata = {
  title: `${siteConfig.name} | ${siteConfig.name}`,
  openGraph: {
    images: [
      {
        url: `${siteConfig.url}/opengraph/not-found.png`,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.name}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph/not-found.png`],
    creator: "@function03labs",
  },
}
