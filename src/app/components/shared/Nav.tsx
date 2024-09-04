'use client'
import type { RefObject } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navLinks from '../../models/navigationLinks'
import Image from 'next/image'
import Link from 'next/link'

export type NavProps = {
  drawerRef: RefObject<HTMLInputElement>
}

export default function Nav({ drawerRef }: NavProps) {

  return (
    <header className="h-32 flex items-center justify-between p-4 bg-secondary-content shadow-bottom z-50">
      <div className="w-64">
        <Image
          src='/assets/logo.png'
          alt='logo'
          width={360}
          height={360}
        />
      </div>
      <div className='flex flex-row gap-12'>
        <div className="flex-grow flex justify-center space-x-4">
          {navLinks.map((item, index) => {
            return <button key={index} className="btn shadow-md bg-secondary-content hover:bg-secondary p-2 px-6 rounded border-none">
              <Link
                href={item.url}
              >
                {item.name}
              </Link>
            </button>
          })}
        </div>

        <div className=''>
          <button className='aspect-square h-full bg-secondary-content hover:bg-secondary p-2 rounded border-none' onClick={() => drawerRef.current?.click()}>
            <FontAwesomeIcon icon={faBars} width={32} className='h-full' />
          </button>
        </div>
      </div>
    </header >
  )
}

