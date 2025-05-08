import './globals.css'
import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import { Almarai } from 'next/font/google'

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['300', '400', '700', '800'],
  variable: '--font-almarai',
})
export const metadata: Metadata = {
  title: 'زين للتطوير | Zain Developmental',
  description: 'المتجر الإلكتروني زين للتطوير - خدمات تقنية متكاملة',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ar' dir='rtl' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
      </head>
      <body className={`${almarai.variable} font-almarai`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
