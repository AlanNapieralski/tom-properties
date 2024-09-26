import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { homeLink, mainLinks, secondaryLinks } from "@/models/navigation-links"
import { title } from "@/models/site-metadata"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import React from "react"

type SideNavProps = {
  triggerButton: React.ReactNode
}

export default function SideNav({ triggerButton }: SideNavProps) {

  const links = homeLink.concat(mainLinks, secondaryLinks)

  return (
    <Sheet>
      <SheetTrigger asChild>
        {triggerButton}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl">{title}</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col py-8">
          {links.map((item, index) => item.url ? (
            <React.Fragment key={index}>
              <Separator className="border" />
              <SheetClose asChild>
                <Link
                  href={item.url}
                  className="text-xl font-bold rounded hover:bg-primary hover:text-secondary p-4 transition-colors duration-300 ease-out"
                >
                  {item.name}
                </Link>
              </SheetClose>
            </React.Fragment>
          ) : null)}
        </div>
      </SheetContent>

    </Sheet >
  )
}
