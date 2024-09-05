'use client'
import type { NavProps } from './shared/Nav'
import React, { useRef } from 'react'
import navLinks from '../models/navigationLinks'
import Link from 'next/link'

type DrawerProps = {
  Trigger: React.ElementType<NavProps>
  children: React.ReactNode
}

export default function Drawer({ Trigger, children }: DrawerProps) {

  const drawerRef = useRef(null)
  // FIX: drawer side is not disappearing after using tab. might  want to change to shadcn one
  return (
    <>
      <div className="drawer drawer-end">
        <input ref={drawerRef} id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Trigger drawerRef={drawerRef} />
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-300 text-base-content min-h-full w-96 p-4">
            {navLinks.map((item, index) => {
              return (
                <div key={index}>
                  <li ><Link href={item.url} className='text-xl'>{item.name}</Link></li>
                  <div className="divider"></div>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
