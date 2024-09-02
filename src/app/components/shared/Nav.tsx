'use client'
import type { RefObject } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navLinks from '../../models/navigationLinks'

export type NavProps = {
  drawerRef: RefObject<HTMLInputElement>
}

export default function Nav({ drawerRef }: NavProps) {

  return (
    <header className="h-28 flex flex-row items-center p-4 bg-gray-100">
      <div className="flex-grow">
        <div className="text-xl font-bold">Logo</div>
      </div>

      <div className="flex-grow flex justify-center space-x-4">
        {navLinks.map(item => {
          return <button className="btn hover:bg-gray-200 p-2 rounded">{item.name}</button>
        })}
      </div>

      <div>
        <button className='btn hover:bg-gray-200 p-2 rounded' onClick={() => drawerRef.current?.click()}>
          <FontAwesomeIcon icon={faBars} width={16} height={16} />
        </button>
      </div>
    </header>
  )
}

