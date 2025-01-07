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
import React, { CSSProperties, useEffect, useState } from "react"

type SideNavProps = {
  triggerButton: React.ReactNode,
  position: "top" | "bottom" | "left" | "right"
}

export default function SideNav({ triggerButton, position }: SideNavProps) {

  const [pointerEvent, setPointerEvent] = useState<CSSProperties["pointerEvents"]>("auto")
  const [allowStart, setAllowStart] = useState(true)

  const links = homeLink.concat(secondaryLinks, mainLinks)

  const handleAnimationStart = () => {
    if (allowStart)
      setPointerEvent('none')

    setAllowStart(prev => prev === false ? true : false)
  }

  const handleAnimationEnd = () => {
    setPointerEvent('auto')
    console.log('auto')
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        {triggerButton}
      </SheetTrigger>
      <SheetContent onAnimationStart={handleAnimationStart} onAnimationEnd={handleAnimationEnd} side={position} style={{ pointerEvents: pointerEvent }}>
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
