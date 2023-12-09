'use client'

import { useTranslations } from 'use-intl'
import { Section } from '@/components/sections/Section'
import { Header } from '@/components/layout'
import { services } from '@/data/services'
import { ServiceCard } from '../widgets'
import tc from '@/utils/translateColleclion'
import { useLocale } from "next-intl";

export const Services = () => {
	const t = useTranslations('Services')
	const locale = useLocale();
	const data = tc(services, locale || 'de')

	return (
		<Section hash='services'>
			<Header text={t('header')} />

			<div className="mt-[10rem] flex flex-wrap gap-[4rem]">
				{services && services.map((service, index: number) => (
					<ServiceCard key={service.id} service={service} index={index} />
				))}
			</div>
		</Section>
	)
}
