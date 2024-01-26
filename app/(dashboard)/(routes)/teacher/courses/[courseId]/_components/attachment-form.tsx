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
  imageUrl: z.string().min(1, {
    message: 'Image is required'
  })
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
      {!isEditing &&
        (!initialData.imageUrl ? (
          <div className='flex items-center justify-center h-60 bg-slate-200 rounded-md'>
            <ImageIcon className='w-10 h-10 text-slate-500' />
          </div>
        ) : (
          <div className='relative aspect-video mt-2'>
            <Image alt='Upload' fill className='object-cover rounded-md' src={initialData.imageUrl} />
          </div>
        ))}
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
