'use client'

import { useState } from 'react'
import cn from 'classnames'
import { TbSelect } from 'react-icons/tb'
import { motion } from 'framer-motion'

export interface Option {
	title: string
	value: string
}

interface InputProps {
	value: Option
	setValue: (value: Option) => void
	options: Option[]
	className?: string
}

const variants = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 }
}

export const Select = ({ value, setValue, options, className }: InputProps) => {
	const [opened, setOpened] = useState(false)

	return (
		<div className="w-full relative">
			<input
				className={cn('bg-transparent text-lg md:text-xl font-light w-full border-b border-white pb-[5px] outline-none', className)}
				value={value.title}
				defaultValue={value.title}
			/>
			<div
				className="absolute w-full h-[40px] flex justify-end top-0 md:top-[5px] right-0 text-base cursor-pointer"
				onClick={() => setOpened(state => !state)}
			>
				<div className="pl-[10px] bg-gray h-[30px] flex items-center">
					<TbSelect />
				</div>
			</div>
			{opened &&
				<motion.div
					initial="hidden"
					animate="visible"
					variants={variants}
					className="absolute w-full z-10 bg-black text-white mt-[1rem] text-lg md:text-xl font-light rounded-[5px] overflow-hidden"
				>
					<div className="flex flex-col py-2">
						{options.map((option: Option) => (
							<span
								key={option.value}
								className="px-[20px] py-[3px] pt-[5px] transition-all duration-500 hover:bg-primary cursor-pointer text-[20px]"
								onClick={() => {
									setValue(option)
									setOpened(false)
								}}
							>
			          {option.title}
							</span>
						))}
					</div>
				</motion.div>
			}
		</div>
	)
}
