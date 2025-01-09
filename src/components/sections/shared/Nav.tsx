'use client'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { homeLink, mainLinks, secondaryLinks } from '@/models/navigation-links'
import Image from 'next/image'
import SideNav from '@/components/ui/SideNav'
import Button from '@/components/ui/CustomButton'
import { Separator } from '@/components/ui/separator'
import { useMediaQuery } from 'react-responsive'

import { FC } from 'react'

const Nav: FC = () => {
  const [isSticky, setIsSticky] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 640 })

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
    <header className={`sticky p-2 sm:fixed h-16 inset-0 w-screen flex items-center justify-between pr-6 sm:pr-12 bg-secondary shadow-bottom z-50 transition-all duration-200 ease-in-out ${isSticky ? 'sm:h-16 sm:p-2 sm:opacity-95' : 'sm:h-24 sm:p-4 sm:opacity-100 '} `}>
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
        <div className="flex justify-center items-center gap-x-4 h-full">
          <div className="hidden md:flex justify-center items-center gap-x-4 h-full">
            {homeLink.map((item, index) => {
              return item.name === 'divi' ? <Separator key={index} orientation='vertical' className='border-[1px] rounded-md border-primary'></Separator> : <Button key={index} buttonType='link' action={item.url} theme={item.theme} className='h-full'>{item.name}</Button>
            })}
          </div>
          <div className="hidden flex-grow 2xl:flex justify-center items-center gap-x-4 h-full">
            {secondaryLinks.map((item, index) => {
              return item.name === 'divi' ? <Separator key={index} orientation='vertical' className='border-[1px] rounded-md border-primary'></Separator> : <Button key={index} buttonType='link' action={item.url} theme={item.theme} className='h-full'>{item.name}</Button>
            })}
          </div>
          <div className="hidden flex-grow md:flex justify-center items-center gap-x-4 h-full">
            {mainLinks.map((item, index) => {
              return item.name === 'divi' ? <Separator key={index} orientation='vertical' className='border-[1px] rounded-md border-primary'></Separator> : <Button key={index} buttonType='link' action={item.url} theme={item.theme} className='h-full'>{item.name}</Button>
            })}
          </div>
        </div>

        <SideNav position={`${isMobile ? 'bottom' : 'right'}`} triggerButton={
          <button className='2xl:hidden group aspect-square h-full bg-secondary rounded border-none'>
            <FontAwesomeIcon icon={faBars} width={48} className='h-full' />
          </button>
        }
        />
      </nav>
    </header >
  )
}

export default Nav
