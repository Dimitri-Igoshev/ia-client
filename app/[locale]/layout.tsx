import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import {notFound} from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

const locales = ['en', 'de', 'ru'];

export const metadata: Metadata = {
  title: 'IGOSHEV AGENCY',
	description: 'Full-Service Digital Agency'
}

export default function RootLayout({children, params: {locale}}: any) {
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
