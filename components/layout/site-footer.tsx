import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "@/components/ui/icons"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 ">
        <div className="flex flex-col items-center gap-4 px-8 ">
          <Icons.logo
            width={30}
            height={30}
            className="text-primary fill-current"
          />
          <p className="text-center text-sm leading-loose">
            Built by{" "}
            <Link
              href={siteConfig.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {siteConfig.name}
            </Link>
            . Hosted on{" "}
            <Link
              href="https://vercel.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </Link>
            . The source code is available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <ModeToggle />
      </div>
    </footer>
  )
}
