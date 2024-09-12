"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState, useEffect } from "react"

import Button from "@/components/ui/CustomButton"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import { NextResponse } from "next/server"

const FormSchema = z.object({
  name: z.string()
    .min(2, { message: "Name is required" })
    .max(100, {
      message: "Name is too long"
    }),
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be email format: example@email.com" }),
  tel: z.string()
    .max(15, { message: "Phone number is too long" })
    .regex(/^\d*$/, { message: "Phone number must contain only digits." })
    .optional(),
  message: z.string()
    .min(10, { message: "Message is required" })
    .max(999, {
      message: "Message must not be longer than a few hundred words.",
    }),
})

export default function InputForm({ className = '', submitStyle = '' }: { className?: string, submitStyle?: string }) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      tel: "",
      message: "",
    },
  })

  const { reset } = form

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true)

    try {
      const response: Response = await fetch('/api/sendForm', {
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
        title: 'The form is not been submitted due to unknown issues.',
        description: "Please try again later",
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form action='/api/sendForm' method="POST" onSubmit={form.handleSubmit(onSubmit)} className={`flex flex-col justify-between items-center h-full `} noValidate>
        <div className={cn(`flex flex-col space-y-4 w-full ` + className)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold">Full Name</FormLabel>
                <FormControl>
                  <Input className="p-4 border-2 border-primary w-1/3" type="text" {...field} />
                </FormControl>
                <FormMessage className="font-bold pt-1" />
              </FormItem>
            )}
          />
          <div className="flex justify-between gap-12">

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-xl font-bold">Email</FormLabel>
                  <FormControl>
                    <Input className="p-4 border-2 border-primary" type="email" {...field} />
                  </FormControl>
                  <FormMessage className="font-bold pt-1" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='tel'
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-xl font-bold">Phone Number</FormLabel>
                  <FormControl>
                    <Input className="p-4 border-2 border-primary" type="tel" {...field} />
                  </FormControl>
                  <FormMessage className="font-bold pt-1" />
                </FormItem>
              )}
            />

          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us how can we help"
                    className="p-4 h-32 border-2 border-primary resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="font-bold pt-1" />
              </FormItem>
            )}
          />
        </div>

        <Button disabled={isLoading} type="submit" action={form.handleSubmit(onSubmit)} className={`w-1/4 bg-primary text-secondary hover:bg-secondary hover:text-primary border border-primary ` + submitStyle}>Submit</Button>
      </form>
    </Form >
  )
}
