'use client'

import axios from 'axios'
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import { ImageIcon, Pencil, PlusCircle } from 'lucide-react'
import { useState } from 'react'

import { Attachment, Course } from '@prisma/client'
import Image from 'next/image'
import { FileUpload } from '@/components/file-upload'

interface AttachmentFormProps {
  initialData: Course & { atachments: Attachment[] }
  courseId: string
}

const formSchema = z.object({
  url: z.string().min(1)
})

export const AttachmentForm = ({ initialData, courseId }: AttachmentFormProps) => {
  const [isEditing, setIsEditing] = useState(false)

  const toggleEdit = () => setIsEditing(current => !current)

  const router = useRouter()

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     imageUrl: initialData?.imageUrl || ''
  //   }
  // })

  // const { isSubmitting, isValid } = form.formState

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
        Course Attachments
        <Button onClick={toggleEdit} variant={'ghost'} size='sm'>
          {isEditing && <>Cancel</>}
          {!isEditing && (
            <>
              <PlusCircle className='h-4 w-4 mr-2' />
              Add a file
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <>
          {initialData.attachments.length === 0 && (
            <p className='text-sm mt-2 text-slate-500 italic'>No attachments found.</p>
          )}
        </>
      )}
      {isEditing && (
        <div>
          <FileUpload
            endpoint='courseImage'
            onChange={url => {
              if (url) {
                onSubmit({ imageUrl: url })
              }
            }}
          />
          <div className='text-xs text-muted-foreground mt-4'>16:9 aspect ratio recommended. Max size 5MB.</div>
        </div>
      )}
    </div>
  )
}
