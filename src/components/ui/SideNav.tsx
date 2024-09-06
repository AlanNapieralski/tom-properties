'use client'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import navigationLinks from "@/models/navigationLinks"
import { title } from "@/models/metadata"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import React from "react"

type SideNavProps = {
  triggerButton: React.ReactNode
}

export default function SideNav({ triggerButton }: SideNavProps) {
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
          {navigationLinks.map((item, index) => (
            <React.Fragment key={index}>
              <Separator className="border" />
              <Link
                href={item.url}
                className="text-xl font-bold rounded hover:bg-primary hover:text-secondary p-4 transition-colors duration-300 ease-out"
              >
                {item.name}
              </Link>
            </React.Fragment>
          ))}
        </div>
        <SheetFooter>
          <SheetClose>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet >
  )
}
