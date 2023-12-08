'use client'

import { Section } from '@/components/sections/Section'
import { useTranslations } from 'use-intl'
import { Button } from '@/components/ui'

export const Hero = async () => {
	const t = useTranslations('Hero')

	return (
		<Section hash="hero" full={true} className="relative h-screen w-screen full">
			<div className="sm:container mx-auto h-full w-full flex justify-between relative ">
				<div
					className="absolute top-0 left-0 xs:mt-[10rem] sm:mt-0 px-[2rem] h-screen xs:w-full lg:w-[60%] xl:w-[65%] 2xl:w-[60%] flex flex-col justify-center z-10">
					<h1 className="text-2xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold xs:text-center sm:text-left">{t('usp')}</h1>
					<div className="flex flex-row xs:justify-center sm:justify-start">
						<Button size="l" className="mt-[4rem]">{t('button')}</Button>
					</div>
				</div>

				<div className="flex justify-center lg:justify-end items-center h-full w-full">
					{/* <div
						className="cursor-pointer xs:-mt-[10rem] sm:mt-0 xs:w-[50rem] xs:h-[50rem] md:w-[70rem] md:h-[70rem] mr-[.1rem] lg:w-[55rem] lg:h-[55rem] xl:w-[70rem] xl:h-[70rem] 2xl:h-[80rem] 2xl:w-[80rem] -mr-[7rem]">
						<EarthCanvas/>
					</div> */}
				</div>
			</div>
			{/* <video
				src={`/videos/stars.mov`}
				loop
				muted
				autoPlay
				className="w-screen h-screen absolute top-0 left-0 -z-10 object-cover"
			/> */}
		</Section>
	)
}
