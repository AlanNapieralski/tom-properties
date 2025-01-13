'use client'

import Image from 'next/image'
import { valuePropertyImage } from '@/models/content/valueProperty-content'
import ValuePropertyForm from '@/components/ui/ValuePropertyForm'
import { useComponentHeight } from '@/hooks/useComponentHeight'
import { useRef } from 'react'

export default function ValueMyProperty() {

    const { src, alt, width, height } = valuePropertyImage

    const formRef = useRef<HTMLFormElement>(null)
    const divHeight = useComponentHeight(formRef)


    return (
        <section style={{ height: divHeight }} className='relative'>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{ height: divHeight }}
                className='sticky inset-0 object-cover'
                priority
            />
            <div className='absolute inset-0 bg-black opacity-80'></div>
            <ValuePropertyForm ref={formRef} className='absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-auto sm:w-2/3 px-8 py-20 z-10 mx-auto max-w-[650px]' />
        </section>
    )
} 
