import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Sidebar from './sidebar'

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden pr-4 hover:opacity-75 transition'>
        <div className='flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md'>
          <Menu size={24} className='text-slate-500' />
        </div>
      </SheetTrigger>
      <SheetContent side={'left'} className='p-0 bg-white'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
