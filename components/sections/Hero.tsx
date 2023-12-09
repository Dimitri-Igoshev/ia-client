'use client'

import { Section } from '@/components/sections/Section'
import { useTranslations } from 'use-intl'
import { Button } from '@/components/ui'
import { EarthCanvas } from '../canvas'

export const Hero = async () => {
	const t = useTranslations('Hero')

	return (
		<Section hash="hero" full={true} className="relative h-screen w-screen">
			<div className="sm:container sm:mx-auto h-full w-full flex justify-between relative ">
				<div
					className="absolute top-0 left-0 xs:mt-[100px] sm:mt-0 px-[20px] h-screen xs:w-full lg:w-[60%] xl:w-[65%] 2xl:w-[60%] flex flex-col justify-center z-10">
					<h1 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-semibold xs:text-center sm:text-left">{t('usp')}</h1>
					<div className="flex flex-row xs:justify-center sm:justify-start">
						<div className='flex sm:hidden'>
							<Button size="m" className="mt-[40px]">{t('button')}</Button>
						</div>
						<div className='hidden sm:flex'>
							<Button size="l" className="mt-[40px]">{t('button')}</Button>
						</div>
					</div>
				</div>

				<div className="flex justify-center lg:justify-end items-center h-full w-full">
					<div
						className="cursor-pointer -mt-[100px] sm:mt-0 w-[400px] h-[400px] md:w-[700px] md:h-[700px] lg:w-[550px] lg:h-[550px] xl:w-[700px] xl:h-[700px] 2xl:h-[800px] 2xl:w-[800px]">
						<EarthCanvas/>
					</div>
				</div>
			</div>
			<video
				src={`/videos/stars.mov`}
				loop
				muted
				autoPlay
				className="w-screen h-screen absolute top-0 left-0 object-cover -z-10"
			/>
		</Section>
	)
}
