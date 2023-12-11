'use client'

import { Header } from '@/components/layout'
import { Section } from '@/components/sections/Section'
import { useTranslations } from 'use-intl'
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { slideIn } from '@/utils/motion'
import { useEffect, useRef } from 'react'
import { info } from '@/data/info'
import { useLocale } from "next-intl";
import loc from '@/utils/localType'

// export interface Info {
// 	id: number
// 	title: string
// 	value: number
// 	text: string
// }

export const About = () => {
	const t = useTranslations('About')
	const ref = useRef(null)
	const isInView = useInView(ref)
	const locale = useLocale();

	const year = useMotionValue(new Date().getFullYear())
	const roundedYear = useTransform(year, latest => Math.round(latest))

	const office = useMotionValue(0)
	const roundedOffice = useTransform(office, latest => Math.round(latest))

	const project = useMotionValue(0)
	const roundedProject = useTransform(project, latest => Math.round(latest))

	const employee = useMotionValue(0)
	const roundedEmployee = useTransform(employee, latest => Math.round(latest))

	useEffect(() => {
		if (isInView) {
			const controls = animate(year, info[0].value, { duration: 3 })
			return controls.stop
		}
	}, [isInView, year])

	useEffect(() => {
		if (isInView) {
			const controls = animate(office, info[1].value, { duration: 3 })
			return controls.stop
		}
	}, [isInView, office])

	useEffect(() => {
		if (isInView) {
			const controls = animate(project, info[2].value, { duration: 3 })
			return controls.stop
		}
	}, [isInView, project])

	useEffect(() => {
		if (isInView) {
			const controls = animate(employee, info[3].value, { duration: 3 })
			return controls.stop
		}
	}, [isInView, employee])

	return (
		<div ref={ref}>
			<Section hash="about" className="mt-0 sm:mt-[50px]">
				<Header text={t('header')}/>

				<motion.div variants={slideIn('down', 'tween', 0.2, 0.75)} className="mt-6 xl:mt-8 2xl:mt-[40px] grid grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto_auto] gap-5 md:gap-10">
					<div className="flex flex-col justify-between text-sm md:text-xl font-light">
						<div>{info[0].title[loc(locale)]}</div>
						<div><motion.span className="text-2xl md:text-3xl font-bold text-primary mr-1 md:mr-2.5 xl:mr-5">{roundedYear}</motion.span>{info[0].text[loc(locale)]}</div>
					</div>

					<div className="flex flex-col justify-between text-sm md:text-xl font-light">
						<div>{info[1].title[loc(locale)]}</div>
						<div><motion.span className="text-2xl md:text-3xl font-bold text-primary mr-1 md:mr-2.5 xl:mr-5">{roundedOffice}</motion.span>{info[1].text[loc(locale)]}</div>
					</div>

					<div className="flex flex-col justify-between text-sm md:text-xl font-light">
						<div>{info[2].title[loc(locale)]}</div>
						<div><motion.span className="text-2xl md:text-3xl font-bold text-primary mr-1 md:mr-2.5 xl:mr-5">{roundedProject}</motion.span>{info[2].text[loc(locale)]}</div>
					</div>

					<div className="flex flex-col justify-between text-sm md:text-xl font-light">
						<div>{info[3].title[loc(locale)]}</div>
						<div><motion.span className="text-2xl md:text-3xl font-bold text-primary mr-1 md:mr-2.5 xl:mr-5">{roundedEmployee}</motion.span>{info[3].text[loc(locale)]}</div>
					</div>
				</motion.div>
			</Section>
		</div>
	)
}
