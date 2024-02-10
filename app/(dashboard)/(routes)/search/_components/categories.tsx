'use client'

import { Category } from '@prisma/client'
import { IconType } from 'react-icons/lib'

import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode
} from 'react-icons/fc'
import { CategoryItem } from './ctaegory-item'

interface CategoriesProps {
  items: Category[]
}

const iconMap: Record<Category['name'], IconType> = {
  Music: FcMusic,
  Photography: FcOldTimeCamera,
  Engineering: FcEngineering,
  Fitness: FcSportsMode,
  Accounting: FcSalesPerformance,
  Design: FcMultipleDevices,
  Filming: FcFilmReel
}

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className='flex items-center gap-x-2 overflow-x-auto pb-2'>
      {items.map(item => (
        <CategoryItem key={item.id} label={item.name} icon={iconMap[item.name]} value={item.id} />
      ))}
    </div>
  )
}
