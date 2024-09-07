'use client'
import { useEffect, useRef, useState, type RefObject } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navLinks from '@/models/navigationLinks'
import Image from 'next/image'
import SideNav from '@/components/ui/SideNav'
import Button from '@/components/ui/CustomButton'

export type NavProps = {
  drawerRef: RefObject<HTMLInputElement>
}

export default function Nav({ className = "" }) {
  const [isSticky, setIsSticky] = useState(false)
  const navbarRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return

      if (window.scrollY > 80) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])



  return (
    <header ref={navbarRef} className={`inset-0 flex items-center justify-between p-4 bg-secondary shadow-bottom z-50 transition-all duration-200 ease-in-out ${isSticky ? 'h-16 opacity-95' : 'h-24 opacity-100'} ` + className} >

      <div className="h-full">
        <Image
          src='/assets/logo.png'
          alt='logo'
          width={360}
          height={360}
          className='h-full w-auto'
        />
      </div>

      <div className='flex flex-row gap-12'>
        <div className="flex-grow flex justify-center items-center gap-4 py-2">
          {navLinks.map((item, index) => {
            return <Button key={index} type='link' action={item.url} theme={item.theme} className='px-8 h-full min-h-10'>{item.name}</Button>
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

