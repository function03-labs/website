import React from "react"

import { Globe } from "@/components/ui/globe"
import { RetroGrid } from "@/components/ui/retro-grid"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"

export function Hero() {
  const words = [
    {
      text: "Builders.",
      className:
        "text-sky-500 dark:text-sky-500 md:text-[9rem] sm:text-[7rem] text-7xl",
    },
  ]

  return (
    <div className="relative flex h-screen w-full flex-row items-center justify-center py-16 md:h-auto">
      <div className="relative mx-auto size-full max-w-7xl overflow-hidden md:h-[40rem]">
        <div className="flex h-[40rem] flex-col items-center px-4 py-8">
          <span className="text-md font-bold text-neutral-900 md:text-2xl dark:text-neutral-100">
            An independent collective of
          </span>
          <h2 className="-mt-8 text-9xl font-bold text-neutral-900 dark:text-neutral-100">
            <TypewriterEffectSmooth words={words} />
          </h2>
          <p className="z-50 mx-auto -mt-5 max-w-lg text-center text-base font-medium text-neutral-700 md:text-lg dark:text-neutral-200">
            Committed to open source and public goods. Leading the way in web3
            exploration, one data point at a time.
          </p>
        </div>

        <Globe className="top-28" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-black" />
      </div>
      <RetroGrid />
    </div>
  )
}
