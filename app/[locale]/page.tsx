import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Navbar');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className='text-2xl'>{t('button')}</h1>
    </main>
  )
}
