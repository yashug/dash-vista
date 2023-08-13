import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DashVista UI Kit',
  description: 'Kickstart your next dashboard project with the DashVista UI Kit, powered by the latest version of Shadcn-UI ©. A perfect foundation, primed for customization to match your unique style',
  keywords: 'react,shacdcnui,kit,application,dashboard,admin,template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
