'use client'

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'
import cn from 'classnames'

interface SectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode
	hash?: string
	full?: boolean
}

export const Section = ({ children, hash, full = false, className }: SectionProps) => {
	return (
		<motion.section
			variants={staggerContainer()}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.1 }}
			className={cn('p-5 w-full sm:w-screen', {
				['sm:container sm:mx-auto']: !full
			}, className)}
		>
			{hash &&<div id={hash}/>}
			{children}
		</motion.section>
	)
}
