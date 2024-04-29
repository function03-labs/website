import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Dock, DockIcon } from "@/components/ui/dock"
import { Icons } from "@/components/ui/icons"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 ">
        <div className="flex flex-col items-center gap-4 px-8 ">
          <Dock>
            <DockIcon>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="size-6" />
              </Link>
            </DockIcon>

            <DockIcon>
              <Link href={siteConfig.links.twitter} target="_blank">
                <Icons.twitter className="size-7" />
              </Link>
            </DockIcon>
            <DockIcon>
              <Link href={siteConfig.links.linkedin} target="_blank">
                <Icons.linkedin className="size-7" />
              </Link>
            </DockIcon>
            <DockIcon>
              <Link href={`mailto:${siteConfig.links.email}`}>
                <Icons.mail className="size-6" />
              </Link>
            </DockIcon>
          </Dock>
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
