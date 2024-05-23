import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function MainLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
