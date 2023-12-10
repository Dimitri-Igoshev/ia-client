'use client'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import Image from 'next/image'
import { slideIn, staggerContainer } from '@/utils/motion'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import Link from 'next/link'
import { useLocale } from "next-intl";

export interface Project {
	id: number
	title: string
	desc: string,
	tags: string[]
	video?: string
	img?: string,
	link: string,
	path: string
}

interface ProjectCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	project: any
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
	const locale = useLocale();

	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer()}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
		>
			<motion.div key={project.id} variants={slideIn('down', 'tween', 0.2, 0.75)}>
				<div className="flex flex-col w-[70rem]">
					<div className="relative rounded-[2.5rem] cursor-pointer group/img">
						{/*<div className="absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center bg-black-violet/20" />*/}
						{project.video ? (
							<Tilt
								options={{
									max: 15,
									scale: 1.1,
									speed: 1000
								}}
								className="rounded-[2.5rem] transition-all duration-500 ease-in bg-gray"
							>
								<Link href={project.link} target="_blank">
									<div className="rounded-[2.5rem]">
										<video
											src={`https://api.igoshev.de/${project.video}`}
											width="700"
											height="530"
											// @ts-ignore
											onMouseOver={event => event.target.play()}
											// @ts-ignore
											onMouseOut={event => event.target.pause()}
											loop
											muted
											playsInline
											className="rounded-[2.5rem]"
										>
										</video>
									</div>
								</Link>
							</Tilt>
						) : (
							<Tilt
								options={{
									max: 15,
									scale: 1.1,
									speed: 1000
								}}
								className="rounded-[2.5rem] transition-all duration-500 ease-in bg-gray"
							>
								<Link href={project.link} target="_blank">
									<div className="overflow-hidden rounded-[2.5rem]">
										<Image
											src={`https://api.igoshev.de/${project.img}`}
											alt={project.title[locale]}
											width={700}
											height={392}
											className="group-hover/img:scale-150 group-hover/img:rotate-12 transition-all duration-1000 ease-out"
										/>
									</div>
								</Link>
							</Tilt>
						)}
					</div>
					<div className="mt-[3rem] ">
				<span className="text-xl font-bold text-primary">
				{project.title[locale]}
			</span>
					</div>
					<span className="mt-[2rem] text-xl font-light">{project.desc[locale]}</span>
					<div className="flex gap-[2rem] mt-[2.2rem]">
						{project.tags[locale].map((tag: any) => (
							<span key={tag} className="text-base font-light">#{tag}</span>
						))}
					</div>
				</div>
			</motion.div>
		</motion.div>
	)
}
