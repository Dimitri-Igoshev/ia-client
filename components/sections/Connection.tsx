'use client'

import { useTranslations } from 'use-intl'
import { Section } from '@/components/sections/Section'
import Image from 'next/image'
import { Form } from '@/components/widgets'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'
import { API_URL } from '@/config/env'
import useIsMobile from '@/hooks/useIsMobile'

export const Connection = () => {
	const t = useTranslations('Connection')
	const isMobile = useIsMobile();

	return (
		<Section hash="connection" full={true} className="relative overflow-hidden">
			<div className="mt-0 sm:mt-[50px] md:container md:mx-auto">
				<div className="mt-6 xl:mt-8 2xl:mt-[40px] grid grid-cols-1 md:grid-cols-2">
					<motion.div
						variants={slideIn('left', 'tween', 0.2, 0.75)}
						className="w-full flex justify-center items-center group"
					>
						<Image
							src={`${API_URL}/images/falcon9.png`} alt="rocket" width={isMobile ? 50 : 150} height={isMobile ? 233 : 700}
							className="md:-mt-[80px] md:-ml-[100px] group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000"
						/>
					</motion.div>

					<motion.div variants={slideIn('right', 'tween', 0.2, 0.75)} className="w-full mt-[60px] md:mt-0">
						<Form hasTitle/>
					</motion.div>
				</div>
			</div>
			<video
				src={`${API_URL}/videos/stars.mov`}
				loop
				muted
				autoPlay
				className="hidden sm:flex w-screen h-full absolute top-0 left-0 -z-10"
			/>
			<div className="-z-10 flex sm:hidden absolute top-0 left-0 object-cover h-full w-screen bg-[url('https://api.igoshev.de/images/stars.png')]" />
			{/*<StarsCanvas/>*/}
		</Section>
	)
}
