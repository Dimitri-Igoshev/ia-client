'use client'

import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import cn from 'classnames'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	register: any
}


export const Input = ({ className, register, ...props }: InputProps) => {
	return (
		<div className="w-full relative">
			<input
				className={cn('bg-transparent text-lg md:text-xl font-light w-full border-b border-white pb-[5px] outline-none rounded-none', className)}
				{...register}
				{...props}
			/>
		</div>
	)
}
