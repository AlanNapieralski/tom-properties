'use client'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormLabel, FormField, FormItem } from '@/components/ui/form'

import Button from '@/components/ui/CustomButton'
import { toast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Combobox } from './Combobox'
import { valuationTypes, propertyTypes, noOfBeds, addresses } from '@/models/valueProperty-content'
import { useEffect, useState } from 'react'

export default function ValuePropertyForm({ className = '' }) {


  const FormSchema = z.object({
    postcode: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    selAddress: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    bedsNo: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    propertyType: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    valType: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      postcode: '',
      selAddress: '',
      bedsNo: '',
      propertyType: '',
      valType: '',

    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  const [isClicked, setIsClicked] = useState(false)



  return (
    <Form {...form} >

      <form action="" className={`flex flex-col justify-center items-center ` + className}>
        <h1 className='flex justify-center items-center text-5xl text-secondary font-bold mb-8'>Let us valuate your property</h1>

        <div className='grid grid-cols-4 gap-y-4 gap-x-12 items-end w-full'>
          <FormField
            control={form.control}
            name="postcode"
            render={({ field }) => (
              <FormItem className='col-span-2'>
                <FormControl>
                  <Input className="p-4 border-2 border-primary " placeholder='Enter your postcode here' type="text" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type='button' theme='dark' action={(e) => {
            e.preventDefault()
            setIsClicked(true)
          }} className="col-span-2">Find address</Button>

          {isClicked ? <FormField
            control={form.control}
            name="selAddress"
            render={({ field }) => (
              <FormItem className='col-span-4'>
                <FormLabel className="font-bold text-secondary m-2 flex justify-center items-end">Property Address</FormLabel>
                <FormControl>
                  <Combobox label='Select Addresses' searchPlaceholder='Search for addresses' itemIdentifier='addresses' items={addresses} className='w-full' {...field} />
                </FormControl>
              </FormItem>
            )}
          /> : null}

          <FormField
            control={form.control}
            name="bedsNo"
            render={({ field }) => (
              <FormItem className='col-span-2'>
                <FormLabel className="font-bold text-secondary m-2 flex justify-center items-end">Number of Bedrooms</FormLabel>
                <FormControl>
                  <Combobox label='Select number of beds' items={noOfBeds} className='w-full' {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem className='col-span-2'>
                <FormLabel className="font-bold text-secondary m-2 flex justify-center items-end">Property Type</FormLabel>
                <FormControl>
                  <Combobox label='Select the property type' items={propertyTypes} className='w-full' {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="valType"
            render={({ field }) => (
              <FormItem className='col-start-2 col-span-2'>
                <FormLabel className="font-bold text-secondary m-2 flex justify-center items-end">Valuation Type</FormLabel>
                <FormControl>
                  <Combobox label='Select the valuation type' items={valuationTypes} className='w-full' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type='button' buttonType="submit" theme='dark' action={(() => null)} className="my-12 w-1/4">Submit</Button>
      </form>
    </Form >
  )
}
