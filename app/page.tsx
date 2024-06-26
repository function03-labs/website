import Link from "next/link"

import { trustedBy } from "@/config/consts"

import { Hero } from "@/components/hero"
import { Marquee } from "@/components/ui/marque"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <div className="max-w-2xl px-2 pb-8 text-center text-6xl">
        <TextGenerateEffect words="We are data aficionados. Engineers. Analysts. Researchers. Web3 advocates. We experiment with on-chain data to develop research and exploration tools for decentralized networks. We develop our own ideas and partner with ambitious founders and protocols." />
      </div>
      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-xl">
          <Marquee pauseOnHover className="[--duration:20s]">
            {trustedBy.map((company) => (
              <Link target="_blank" href={company.url} key={company.url}>
                <span className={`${company.className} px-2 `}>
                  {company.name}
                </span>
              </Link>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
        </div>
      </div>
    </main>
  )
}
