'use client'

import { useTranslations } from 'use-intl'
import { Section } from '@/components/sections/Section'
import { Header } from '@/components/layout'
import { services } from '@/data/services'
import { ServiceCard } from '../widgets'

export const Services = () => {
	const t = useTranslations('Services')

	return (
		<Section hash='services' className='mx-2.5'>
			<Header text={t('header')} />

			<div className="mt-6 xl:mt-8 2xl:mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8 2xl:gap-[40px]">
				{services && services.map((service, index: number) => (
					<ServiceCard key={service.id} service={service} index={index} />
				))}
			</div>
		</Section>
	)
}
