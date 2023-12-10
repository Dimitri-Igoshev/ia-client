'use client'

import { useTranslations } from 'use-intl'
import { Section } from '@/components/sections/Section'
import Image from 'next/image'
import { Form } from '@/components/widgets'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'

export const Connection = () => {
	const t = useTranslations('Connection')

	return (
		<Section hash="connection" full={true} className="relative overflow-hidden">
			<div className="mt-[50px] container mx-auto">
				<div className="pt-[100px] flex justify-between">
					<motion.div
						variants={slideIn('left', 'tween', 0.2, 0.75)}
						className="flex justify-center items-center w-1/2 group"
					>
						<Image
							src="/images/falcon9.png" alt="rocket" width={150} height={700}
							className="-mt-[80px] -ml-[100px] group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000"
						/>
					</motion.div>

					<motion.div variants={slideIn('right', 'tween', 0.2, 0.75)} className="w-1/2">
						<Form hasTitle/>
					</motion.div>
				</div>
			</div>
			<video
				src={`/videos/stars.mov`}
				loop
				muted
				autoPlay
				className="w-screen h-full absolute top-0 left-0 -z-10"
			/>
			{/*<StarsCanvas/>*/}
		</Section>
	)
}
