"use client"
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormLabel, FormMessage, FormField, FormItem } from '@/components/ui/form'

import Button from '@/components/ui/CustomButton'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Combobox } from './Combobox'
import { valuationTypes, propertyTypes, noOfBeds, addresses } from '@/models/valueProperty-content'
import { useEffect, useState } from 'react'

export default function ValuePropertyForm({ className = '' }) {

  const FormSchema = z.object({
    postcode: z.string()
      .min(6, { message: "Enter your postcode and select from the dropdown below" })
      .max(8, { message: "Enter your postcode and select from the dropdown below" }),
    selAddress: z.string({
      required_error: "Please select the address.",
    }),
    bedsNo: z.string({
      required_error: "Please select the number of beds.",
    }),
    propertyType: z.string({
      required_error: "Please select the property type.",
    }),
    valType: z.string({
      required_error: "Please select the valuation type.",
    }),
  }).required()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const { register, handleSubmit, watch, formState: { errors }, trigger } = form;

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('submitted')
  }

  const [isClicked, setIsClicked] = useState(false)

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
  }, [])


  return (
    <Form {...form} >

      <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col justify-center items-center ` + className} noValidate>
        <h1 className='flex justify-center items-center text-5xl text-secondary font-bold mb-8'>Let us valuate your property</h1>

        <div className='grid grid-cols-4 gap-y-4 gap-x-12 items-start w-full'>
          <FormField
            control={form.control}
            name="postcode"
            render={({ field }) => (
              <FormItem className='col-span-2'>
                <FormControl>
                  <Input className="p-4 border-2 border-primary " placeholder='Enter your postcode here' type="text" {...field} />
                </FormControl>
                <FormMessage className="font-bold pt-1" />
              </FormItem>
            )}
          />
          <Button disabled={!isLoading} buttonType='button' theme='dark' action={(e) => {
            e.preventDefault()
            trigger('postcode').then(val => val ? setIsClicked(true) : null)
          }} className="col-span-2">Find address</Button>

          {isClicked ? <FormField
            control={form.control}
            name="selAddress"
            render={({ field }) => (
              <FormItem className='col-span-4'>
                <FormLabel className="font-bold text-secondary m-2 flex justify-center items-end">Property Address</FormLabel>
                <FormControl>
                  <Combobox label='Select Addresses' searchPlaceholder='Search for addresses' itemIdentifier='addresses' items={addresses} className='w-full' field={field} />
                </FormControl>
                <FormMessage className="font-bold pt-1" />
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
                  <Combobox label='Select number of beds' items={noOfBeds} className='w-full' field={field} />
                </FormControl>
                <FormMessage className="font-bold pt-1" />
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
                  <Combobox label='Select the property type' items={propertyTypes} className='w-full' field={field} />
                </FormControl>
                <FormMessage className="font-bold pt-1" />
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
                  <Combobox label='Select the valuation type' items={valuationTypes} className='w-full' field={field} />
                </FormControl>
                <FormMessage className="font-bold pt-1" />
              </FormItem>
            )}
          />
        </div>
        <Button disabled={!isLoading} buttonType='button' type="submit" theme='dark' action={(() => null)} className="my-12 w-1/4">Submit</Button>
      </form>
    </Form >
  )
}
