"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
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
import PhoneInput from "react-phone-number-input"

const FormSchema = z.object({
  name: z.string()
    .min(2, {
      message: "Name must be at least 2 characters",
    })
    .max(100, {
      message: "Name is too long"
    }),
  email: z.string()
    .email({ message: "Must be email format: example@email.com" }),
  tel: z.string()
    .min(7, { message: "Phone number must be at least 7 digits." })
    .max(15, { message: "Phone number must be no more than 15 digits." })
    .regex(/^\d+$/, { message: "Phone number must contain only digits." }),
  message: z.string()
    .min(1, { message: "Message is required and cannot be empty." })
    .max(999, {
      message: "Message must not be longer than a few hundred words.",
    }),
})

export default function InputForm({ className = '', submitStyle = '' }: { className?: string, submitStyle?: string }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "dupa",
      email: "",
      tel: "",
      message: "",
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`flex flex-col justify-between items-center h-full `} noValidate>
        <div className={`flex flex-col space-y-4 w-full ` + className}>
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

        <Button type='button' buttonType="submit" action={(() => null)} className={`w-1/4 bg-primary text-secondary hover:bg-secondary hover:text-primary border border-primary ` + submitStyle}>Submit</Button>
      </form>
    </Form >
  )
}
