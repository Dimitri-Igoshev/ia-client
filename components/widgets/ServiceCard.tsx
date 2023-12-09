'use client'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useTranslations } from 'use-intl'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { Button } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	service: any
	index: number
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
	const t = useTranslations('Services')

	return (
		<motion.div
			className="card relative perspective xs:w-full xs:h-[40rem] sm:w-[34rem]"
			variants={fadeIn('right', 'spring', 0.5 * index, 0.5)}
		>
			<div
				className="absolute card-front top-0 left-0 w-full h-full rounded-[2.5rem] bg-gray">
				<div
					className="bg-black-violet h-full w-full flex flex-col items-center justify-between rounded-[2.5rem] p-[3rem] back"
				>
					<div className="flex items-center justify-center h-full w-full">
						<Image src={`/icons/${service.img}`} alt={service.title} width={service.size} height={service.size} />
					</div>
					<div className="flex text-xl font-semibold text-center min-h-[8rem]">{service.title}</div>
				</div>
			</div>

			<div
				className="absolute card-back top-0 left-0 w-full h-full rounded-[2.5rem] primary-gradient p-1 overflow-hidden">
				<div
					className="bg-gray h-full w-full flex flex-col items-center justify-between rounded-[2.5rem] p-[3rem] back"
				>
					<div className="text-[2.2rem] text-primary font-bold flex justify-start w-full">{`0${index + 1}.`}</div>
					<div className="text-[2.2rem] font-bold flex justify-start w-full">{service.title}</div>
					<div className="text-[2.2rem] font-light flex justify-start w-full">{service.desc}</div>
					<div className="mt-[1rem] flex justify-between items-center w-full">
						<div className="text-base font-light">
							{t('from')}
							<span className="text-xl font-bold text-[22px]"> {service.price}</span>
						</div>
						<Link href={service.path}>
							<Button size="s">{t('button')}</Button>
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	)
}
