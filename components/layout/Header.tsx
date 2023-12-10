'use client'

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motion'

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	text: string
}

export const Header = ({ text, className, ...props }: HeaderProps) => {
	const textArr = text.split(' ')
	const firstWord = textArr.shift()

	return (
		<motion.div variants={textVariant()}>
			<h2
				className={cn('text-white inline-block text-xl sm:text-2xl font-bold', className)}
				{...props}
			>
				{/* {firstWord} */}
				<span className='text-primary font-bold uppercase'> {textArr.join(' ')}</span>
			</h2>
		</motion.div>
	)
}
