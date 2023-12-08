import { Hero } from '@/components/sections'
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Navbar');

  return (
    <main>
      <Hero />
    </main>
  )
}
