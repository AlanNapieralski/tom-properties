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
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'

export default function ValuePropertyForm({ className = '' }) {

  const router = useRouter()

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const FormSchema = z.object({
    postcode: z.string()
      .min(6, { message: "Enter your postcode and select from the dropdown below" })
      .max(8, { message: "Enter your postcode and select from the dropdown below" }),
    email: z.string()
      .min(1, { message: "Email is required" })
      .email({ message: "Must be email format: example@email.com" }),
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

  const { handleSubmit, formState: { errors }, trigger, reset } = form;

  const { toast } = useToast()

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true)

    try {
      const response: Response = await fetch('/api/sendValueForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        toast({
          title: 'There has been issues submitting the form.',
          description: "Please try again later",
          variant: 'destructive',
        })

        reset()
        router.refresh()
        return
      }

      reset()
      toast({
        title: 'Thank you!',
        description: "We've received your inquiry"
      })

    } catch (error) {
      console.error('Error submitting form:', error);

      reset()
      toast({
        title: 'The form is not been submitted due to internal errors.',
        description: "Please try again later",
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }

    router.push('/')
  }

  return (
    <Form {...form} >

      <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col justify-center items-center ` + className} noValidate>
        <h1 className='flex justify-center items-center text-5xl text-secondary font-bold mb-8'>Let us valuate your property</h1>

        <div className='grid grid-cols-4 gap-y-4 gap-x-12 items-start w-full'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className="col-span-full pb-[14px]">
                <FormLabel className="font-bold text-secondary m-2 flex items-end">Email</FormLabel>
                <FormControl>
                  <Input className="p-4 border-2 border-primary " type="email" {...field} />
                </FormControl>
                <FormMessage className="font-bold pt-1" />
              </FormItem>
            )}
          />

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
          <Button disabled={isLoading} buttonType='button' theme='dark' action={(e) => {
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
        <Button disabled={isLoading || isSubmitting} buttonType='button' type="submit" theme='dark' className="my-12 w-1/4">
          {isLoading || isSubmitting ? <span className="loading loading-spinner"></span> : null}
          {isSubmitting ? 'Submitting' : null}
          {isLoading ? 'Loading' : null}
          {!isLoading && !isSubmitting ? 'Submit' : null}
        </Button>
      </form>
    </Form >
  )
}
