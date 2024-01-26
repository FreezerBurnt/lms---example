'use client'

import axios from 'axios'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'

import { cn } from '@/lib/utils'
import { Textarea } from '@/components/ui/textarea'
import { Course } from '@prisma/client'

interface DescriptionFormProps {
  initialData: Course
  courseId: string
}

const formSchema = z.object({
  description: z.string().min(1, {
    message: 'description is required'
  })
})

export const DescriptionForm = ({ initialData, courseId }: DescriptionFormProps) => {
  const [isEditing, setIsEditing] = useState(false)

  const toggleEdit = () => setIsEditing(current => !current)

  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: initialData?.description || ''
    }
  })

  const { isSubmitting, isValid } = form.formState

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // console.log(values)
    try {
      await axios.patch(`/api/courses/${courseId}`, values)
      toast.success('Course created successfully.')
      toggleEdit()
      router.refresh()
    } catch {
      toast.error('Something went wrong. Please try again.')
    }
  }

  return (
    <div className='mt-6 border bg-slate-100 rounded-md p-4'>
      <div className='font-medium flex items-center justify-between'>
        Course Description
        <Button onClick={toggleEdit} variant={'ghost'} size='sm'>
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className='h-4 w-4 mr-2' />
              Edit description
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p className={cn('text-sm mt-2', !initialData.description && 'text-slate-600 italic')}>
          {initialData.description || 'No description provided'}
        </p>
      )}
      {isEditing && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 mt-4'>
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea disabled={isSubmitting} placeholder="e.g. 'This course is about ...'" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex items-center gap-x-2'>
              <Button type='submit' disabled={!isValid || isSubmitting}>
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  )
}
