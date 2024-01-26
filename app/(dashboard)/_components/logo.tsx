import Image from 'next/image'
import React from 'react'

export const Logo = () => {
  return <Image src='/logo.svg' alt='logo' width={80} height={80} />
}
