'use client'
import type { NavProps } from './shared/Nav'
import React, { useRef } from 'react'
import navLinks from '../models/navigationLinks'

type DrawerProps = {
  children: React.ReactNode
  Nav: React.ComponentType<NavProps>
}

export default function Drawer({ children, Nav }: DrawerProps) {

  const drawerRef = useRef(null)

  return (
    <>
      <div className="drawer drawer-end">
        <input ref={drawerRef} id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          { /* FIX: This is probably not the way to go */}
          <Nav drawerRef={drawerRef} />
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {navLinks.map(item => {
              return <li><a>{item.name}</a></li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
