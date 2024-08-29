'use client'
import { useEffect, useState } from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import isMobilePhone from 'validator/lib/isMobilePhone'
import { useToast } from '@/components/ui/use-toast'
import { useForm } from 'react-hook-form'
import { validatePhoneNumber } from '@/lib/validation'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  secondName: z.string().min(1, { message: 'Second name is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  phoneNumber: z
    .string()
    .optional()
    .refine(
      (value) => !value || isMobilePhone(value, 'any', { strictMode: true }),
      {
        message:
          'Invalid phone number. Make sure to add the proper country code.',
      },
    ),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
  preferredContact: z.enum(['email', 'phone']).optional(),
})
const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
const userId = process.env.NEXT_PUBLIC_EMAIL_ID
const ContactForm = () => {
  const { toast } = useToast()
  const [isRadioDisabled, setIsRadioDisabled] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      secondName: '',
      email: '',
      phoneNumber: '',
      message: '',
      preferredContact: 'email',
    },
  })
  useEffect(() => {
    const subscription = form.watch((values) => {
      const { email, phoneNumber, preferredContact } = values
      const isPhoneNumberValid = phoneNumber && validatePhoneNumber(phoneNumber)
      setIsRadioDisabled(!(email && isPhoneNumberValid))

      if (!isPhoneNumberValid && preferredContact === 'phone') {
        form.setValue('preferredContact', 'email')
      }
    })
    return () => subscription.unsubscribe()
  }, [form, form.watch])

  const onSubmit = async (data: any) => {
    const params = {
      firstName: data.firstName,
      secondName: data.secondName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      message: data.message,
      preferredContact: data.preferredContact,
    }
    setIsSubmitting(true)
    const result = await emailjs.send(serviceId!, templateId!, params, userId)
    setIsSubmitting(false)
    if (result.status === 200) {
      toast({
        title: 'Success',
        description:
          'Your message has been sent succesfully. We will get back to you shortly.',
        variant: 'default',
      })
    } else {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      })
    }
    form.reset()
  }

  return (
    <div className="p-2 md:p-8 flex justify-center place-items-center mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            <FormField
              control={form.control}
              disabled={isSubmitting}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input className="text-md" placeholder="John " {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500 opacity-70" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              disabled={isSubmitting}
              name="secondName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Second Name</FormLabel>
                  <FormControl>
                    <Input className="text-md" placeholder=" Doe" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500 opacity-70" />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            <FormField
              control={form.control}
              disabled={isSubmitting}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="text-md"
                      placeholder="johndoe@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 opacity-70" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              disabled={isSubmitting}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      className="text-md"
                      placeholder="+911234567890"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 opacity-70" />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            disabled={isSubmitting}
            name="preferredContact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Mode of Communication</FormLabel>
                <FormControl>
                  <RadioGroup
                    {...field}
                    className="flex flex-row space-x-4"
                    disabled={isRadioDisabled}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          value="email"
                          className="text-slate-800 border-slate-800"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">Email</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          value="phone"
                          className="text-slate-800 border-slate-800"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Phone Number
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage className="text-red-500 opacity-70" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            disabled={isSubmitting}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How can we help you?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your message here"
                    rows={10}
                    className="resize-none text-md"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 opacity-70" />
              </FormItem>
            )}
          />

          <button
            className={`w-full px-6 py-3 border-2 font-bold rounded-lg shadow-md transition duration-300 ${
              isSubmitting
                ? 'bg-gray-300 border-gray-300 text-gray-700 cursor-not-allowed'
                : 'bg-primary border-primary text-white hover:bg-white hover:text-primary'
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </Form>
    </div>
  )
}

export default ContactForm
