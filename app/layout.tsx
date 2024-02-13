import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ToastProvider } from '@/components/providers/toast-provider'
import { ConfettiProvider } from '@/components/providers/confetti-provider'
import Footer from '@/components/footer'
// import Header from '@/components/header'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LMS Template',
  description: 'Developed and Designed by Pictured Designs'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>        
          <ConfettiProvider />
          <ToastProvider />
          {children}
        <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
