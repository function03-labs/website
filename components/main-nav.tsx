import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Icons } from "@/components/ui/icons"

export function MainNav() {
  return (
    <div className="mr-4">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo
          width={25}
          height={25}
          className="text-primary fill-current"
        />{" "}
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
    </div>
  )
}
