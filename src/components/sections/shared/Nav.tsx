'use client'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navLinks from '@/models/navigation-links'
import Image from 'next/image'
import SideNav from '@/components/ui/SideNav'
import Button from '@/components/ui/CustomButton'

import { FC } from 'react'

const Nav: FC = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY >= 96) {
        setIsSticky(true)
      } else if (window.scrollY < 96) {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <header className={`fixed inset-0 w-screen flex items-center justify-between pr-12 bg-secondary shadow-bottom z-50 transition-all duration-200 ease-in-out ${isSticky ? 'h-16 p-2 opacity-95' : 'h-24 p-4 opacity-100 '} `}>
      <div className="h-full">
        <Image
          src='/assets/logo.png'
          alt='logo'
          width={360}
          height={360}
          className={`h-full w-auto`}
        />
      </div>
      <nav className='flex flex-row gap-12 items-center h-full'>
        <div className="flex-grow flex justify-center items-center gap-x-4 h-full">
          {navLinks.map((item, index) => {
            return <Button key={index} buttonType='link' action={item.url} theme={item.theme} className='h-full'>{item.name}</Button>
          })}
        </div>

        <SideNav triggerButton={
          <button className='group aspect-square h-full bg-secondary rounded border-none'>
            <FontAwesomeIcon icon={faBars} width={48} className='h-full' />
          </button>
        } />
      </nav>
    </header >
  )
}

export default Nav
