'use client'
import type { RefObject } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navLinks from '../../models/navigationLinks'
import Image from 'next/image'
import Link from 'next/link'
import SideNav from '../SideNav'

export type NavProps = {
  drawerRef: RefObject<HTMLInputElement>
}

export default function Nav() {

  return (
    <header className="h-28 flex items-center justify-between p-4 bg-secondary shadow-bottom z-50">
      <div className="w-64">
        <Image
          src='/assets/logo.png'
          alt='logo'
          width={360}
          height={360}
        />
      </div>
      <div className='flex flex-row gap-12'>
        <div className="flex-grow flex justify-center items-center space-x-4">
          {navLinks.map((item, index) => {
            return <Link key={index} className={`btn shadow-md  p-2 px-6 rounded border-none ${item.color === 'primary' ? 'bg-primary text-secondary hover:bg-secondary hover:text-primary' : 'bg-secondary text-primary hover:bg-primary hover:text-secondary'}`}
              href={item.url}
            >
              {item.name}
            </Link>
          })}
        </div>
        <SideNav triggerButton={
          <button className='group aspect-square h-full bg-secondary p-2 rounded border-none'>
            <FontAwesomeIcon icon={faBars} width={48} className='h-full' />
          </button>
        } />
      </div>
    </header >
  )
}

