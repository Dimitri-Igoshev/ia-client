'use client'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import Image from 'next/image'
import { slideIn, staggerContainer } from '@/utils/motion'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import Link from 'next/link'
import { useLocale } from "next-intl";

// export interface Project {
// 	id: number
// 	title: string
// 	desc: string,
// 	tags: string[]
// 	video?: string
// 	img?: string,
// 	link: string,
// 	path: string
// }

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
				<div className="flex flex-col w-full">
					<div className="relative rounded-[25px] cursor-pointer group/img">
						{/*<div className="absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center bg-black-violet/20" />*/}
						{project.video ? (
							<Tilt
								options={{
									max: 15,
									scale: 1.1,
									speed: 1000
								}}
								className="rounded-[25px] transition-all duration-500 ease-in bg-gray"
							>
								<Link href={project.link} target="_blank">
									<div className="rounded-[25px]">
										<video
											src={`https://api.igoshev.de/${project.video}`}
											width="100%"
											height="530"
											// @ts-ignore
											onMouseOver={event => event.target.play()}
											// @ts-ignore
											onMouseOut={event => event.target.pause()}
											loop
											muted
											playsInline
											className="rounded-[25px]"
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
								className="rounded-[25px] transition-all duration-500 ease-in bg-gray"
							>
								<Link href={project.link} target="_blank">
									<div className="overflow-hidden rounded-[25px] w-full h-[200px] sm:h-[338px] md:h-[410px] lg:h-[260px] xl:h-[333px] 2xl:h-[404px] relative">
										<Image
											src={`https://api.igoshev.de/${project.img}`}
											alt={project.title[locale]}
											fill
											className="group-hover/img:scale-150 group-hover/img:rotate-12 transition-all duration-1000 ease-out"
										/>
									</div>
								</Link>
							</Tilt>
						)}
					</div>
					<div className="mt-[30px] ">
				<span className="text-xl font-bold text-primary">
				{project.title[locale]}
			</span>
					</div>
					<span className="mt-[20px] text-xl font-light">{project.desc[locale]}</span>
					<div className="flex gap-[20px] mt-[22px]">
						{project.tags[locale].map((tag: any) => (
							<span key={tag} className="text-base font-light"><span className='text-primary'>#</span>{tag}</span>
						))}
					</div>
				</div>
			</motion.div>
		</motion.div>
	)
}