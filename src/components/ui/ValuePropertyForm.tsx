'use client'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormLabel, FormField, FormItem } from '@/components/ui/form'

import Button from '@/components/ui/CustomButton'
import { toast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Combobox } from './Combobox'
import { valuationTypes, propertyTypes } from '@/models/valueProperty-content'

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

  const searchItems = [
    {
      label: 'exampleLabel',
      value: 'exampleValue'
    }
  ]

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


  return (
    <Form {...form} >

      <form action="" className={`flex-col ` + className}>
        <h1 className='flex justify-center text-5xl text-secondary font-bold mb-8'>Let us valuate your property</h1>

        <div className='grid grid-cols-3 w-[720px] gap-y-8 gap-x-4 items-end'>
          <FormField
            control={form.control}
            name="postcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-secondary mx-2">Postcode</FormLabel>
                <FormControl>
                  <Input className="p-4 border-2 border-primary border-none" type="text" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type='button' theme='light' action={(() => null)} className="grid grid-cols-subgrid col-span-2">Find address</Button>

          <FormField
            control={form.control}
            name="selAddress"
            render={({ field }) => (
              <FormItem className='grid grid-cols-subgrid col-span-3'>
                <FormControl>
                  <Combobox label='Select Addresses' searchPlaceholder='Search for addresses' itemIdentifier='addresses' items={searchItems} className='col-span-3' {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bedsNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-secondary mx-2">Number of Bedrooms</FormLabel>
                <FormControl>
                  <Input className="p-4 border-2 border-primary border-none" type="number" min={1} max={10} {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Combobox label='Select the property type' searchPlaceholder='Search for property types' itemIdentifier='property types' items={propertyTypes} className='w-full' {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="valType"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Combobox label='Select the valuation type' searchPlaceholder='Search for valuation types' itemIdentifier='valuation types' items={valuationTypes} className='w-full' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="grid grid-cols-subgrid col-span-full">
            <Button type='button' buttonType="submit" theme='light' action={(() => null)} className="col-start-2">Submit</Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
