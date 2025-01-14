"use client"
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormLabel, FormMessage, FormField, FormItem } from '@/components/ui/form'

import Button from '@/components/ui/CustomButton'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Combobox } from './Combobox'
import { valuationTypes, propertyTypes, noOfBeds } from '@/models/content/valueProperty-content'
import { forwardRef, useEffect, useRef, useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'

type ValuePropertyFormProps = {
    className: string
}

const ValuePropertyForm = forwardRef<HTMLFormElement, ValuePropertyFormProps>(({ className }, formRef) => {

    const router = useRouter()

    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isClicked, setIsClicked] = useState(false)
    const [addresses, setAddresses] = useState<{ label: string, value: string }[]>([{
        label: '',
        value: '',
    }])
    const inputRef = useRef<HTMLInputElement | null>(null)
    const changeInputValue = (newVal: string) => {
        if (inputRef.current) {
            inputRef.current.value = newVal
        }
    }

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
        inputAddress: z.string({
            required_error: "Please select the address.",
        }),
        address: z.string({
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
        defaultValues: {
            email: '',
            postcode: '',
            inputAddress: '',
            address: '',
            bedsNo: '',
            propertyType: '',
            valType: '',
        },
    })

    const { handleSubmit, trigger, reset, getValues, setValue } = form;

    const { toast } = useToast()

    async function onEnterPostcode() {
        try {
            const response: Response = await fetch('/api/getAddresses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    textQuery: getValues("postcode"),
                }),
            })

            const body: string[] = await response.json()
            const formattedAddresses: { label: string, value: string }[] = body.map(addr => ({ label: addr, value: addr })) // label and value
            setAddresses(formattedAddresses)

            setValue('address', body[0])

            if (!response.ok) {
                toast({
                    title: 'Too many tries',
                    description: 'Please put the address manually',
                    variant: 'destructive',
                })
            }

        } catch (error) {
            toast({
                title: 'Too many tries',
                description: 'Please put the address manually',
                variant: 'destructive',
            })
        }
    }

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

            const body = await response.json()

            if (!response.ok) {
                toast({
                    title: body.title,
                    description: body.error.errorBody,
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

            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className={`flex flex-col justify-center items-center ` + className} noValidate>
                <h1 className='text-center text-4xl sm:text-5xl text-secondary font-bold mb-4 sm:mb-8'>Let us valuate your property</h1>

                <div className='grid grid-cols-4 gap-y-2 sm:gap-y-4 gap-x-12 items-start w-full'>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem className="col-span-full pb-[14px]">
                                <FormLabel className="font-bold text-secondary m-2 flex items-end">Email</FormLabel>
                                <FormControl>
                                    <Input className="p-4 border-2 border-primary " type="email" {...field} />
                                </FormControl>
                                <FormMessage className="font-bold pt-1 text-xs sm:text-sm" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="postcode"
                        render={({ field }) => (
                            <FormItem className='col-span-full lg:col-span-2'>
                                <FormControl>
                                    <Input className="p-4 border-2 border-primary " placeholder='Enter your postcode here' type="text" {...field} />
                                </FormControl>
                                <FormMessage className="font-bold pt-1 text-xs sm:text-sm" />
                            </FormItem>
                        )}
                    />
                    <Button disabled={isLoading} buttonType='button' theme='dark' action={(e) => {
                        e.preventDefault()
                        trigger('postcode').then(val => val ? setIsClicked(true) : null)
                        onEnterPostcode()
                    }} className="col-start-1 sm:col-start-2 lg:col-start-3 col-span-full sm:col-span-2">Find address</Button>

                    {isClicked ?
                        <div className='flex flex-col col-span-full items-center gap-4'>
                            <FormField
                                control={form.control}
                                name="inputAddress"
                                render={({ field }) => (
                                    <FormItem className='w-auto items-center min-w-[200px]'>
                                        <FormLabel className="font-bold text-secondary m-2 flex justify-center items-end">House Number / Name</FormLabel>
                                        <FormControl>
                                            <Input className='text-center' type='text' {...field} />
                                        </FormControl>
                                        <FormMessage className="font-bold pt-1 text-xs sm:text-sm" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem className='w-full col-span-full truncate'>
                                        <FormLabel className="font-bold text-secondary m-2 flex justify-center items-end">Property Address</FormLabel>
                                        <FormControl>
                                            <Input className='text-center' type='text' {...field} />
                                        </FormControl>
                                        <FormMessage className="font-bold pt-1 text-xs sm:text-sm" />
                                    </FormItem>
                                )}
                            />
                        </div>
                        : null}

                    <FormField
                        control={form.control}
                        name="bedsNo"
                        render={({ field }) => (
                            <FormItem className='col-span-full lg:col-span-2'>
                                <FormLabel className="font-bold text-secondary m-2 flex justify-center items-end">Number of Bedrooms</FormLabel>
                                <FormControl>
                                    <Combobox label='Select number of beds' items={noOfBeds} className='w-full' field={field} />
                                </FormControl>
                                <FormMessage className="font-bold pt-1 text-xs sm:text-sm" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="propertyType"
                        render={({ field }) => (
                            <FormItem className='col-span-full lg:col-span-2'>
                                <FormLabel className="font-bold text-secondary m-2 flex justify-center items-end">Property Type</FormLabel>
                                <FormControl>
                                    <Combobox label='Select the property type' items={propertyTypes} className='w-full' field={field} />
                                </FormControl>
                                <FormMessage className="font-bold pt-1 text-xs sm:text-sm" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="valType"
                        render={({ field }) => (
                            <FormItem className='col-span-full lg:col-start-2 lg:col-span-2'>
                                <FormLabel className="font-bold text-secondary m-2 flex justify-center items-end">Valuation Type</FormLabel>
                                <FormControl>
                                    <Combobox label='Select the valuation type' items={valuationTypes} className='w-full' field={field} />
                                </FormControl>
                                <FormMessage className="font-bold pt-1 text-xs sm:text-sm" />
                            </FormItem>
                        )}
                    />
                </div>
                <Button disabled={isLoading || isSubmitting} buttonType='button' type="submit" theme='dark' className="min-h-fit my-8 sm:my-12 w-1/2 sm:w-1/3 xl:w-1/4">
                    {isLoading || isSubmitting ? <span className="loading loading-spinner"></span> : null}
                    {isSubmitting ? 'Submitting' : null}
                    {isLoading ? 'Loading' : null}
                    {!isLoading && !isSubmitting ? 'Submit' : null}
                </Button>
            </form>
        </Form >
    )
})

ValuePropertyForm.displayName = "ValuePropertyForm"; // the forwardRef wrapped react component doesn't have a name set explicitly which might be annoying in dev tools

export default ValuePropertyForm
