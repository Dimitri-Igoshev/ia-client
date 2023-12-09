'use client'

import { useTranslations } from 'use-intl'
import { Section } from '@/components/sections/Section'
import { Header } from '@/components/layout'
import { services } from '@/data/services'
import { ServiceCard } from '../widgets'
import { ServiceCardMobile } from '../widgets/ServiceCardMobile'
import { useEffect, useState } from 'react'

export const Services = () => {
	const t = useTranslations('Services')
	const [opened, setOpened] = useState<number>()
	
	useEffect(() => {
		const timeout = setTimeout(() => {
			setOpened(undefined)
		}, 5000)
	
		return () => {
			clearTimeout(timeout)
		}
	}, [opened])
	

	return (
		<Section hash='services'>
			<Header text={t('header')} />

			<div className="hidden sm:grid mt-3 sm:mt-6 xl:mt-8 2xl:mt-[40px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-8 2xl:gap-[40px]">
				{services && services.map((service, index: number) => (
					<ServiceCard key={service.id} service={service} index={index} />
				))}
			</div>
			<div className='flex flex-col w-full sm:hidden mt-6 gap-5'>
				{services.map((service, index) => (
					<ServiceCardMobile key={service.id} service={service} index={index} opened={index === opened} onOpen={setOpened}/>
				))}
			</div>
		</Section>
	)
}
