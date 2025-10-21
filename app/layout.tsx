import { ReactNode } from 'react'
import localFont from 'next/font/local'
import './globals.css'

const mirante = localFont({
  src: [
    {
      path: '../public/Mirante-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/Mirante-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/Mirante-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/Mirante-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/Mirante-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-mirante',
})

const carlaSans = localFont({
  src: [
    {
      path: '../public/CarlaSansLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/CarlaSansRegular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/CarlaSans-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/CarlaSansBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-carla-sans',
})

const newBlack = localFont({
  src: [
    {
      path: '../public/NewBlackTypeface-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/NewBlackTypeface-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/NewBlackTypeface-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-new-black',
})

interface RootLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: 'N8 - Next.js App',
  description: 'A modern Next.js application with Tailwind CSS',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={`${mirante.variable} ${carlaSans.variable} ${newBlack.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}

