'use client'

import { useTranslations } from 'use-intl'
import { Section } from '@/components/sections/Section'
import { Header } from '@/components/layout'
import { ProjectCard } from '@/components/widgets'
import { projects } from '@/data/projects'

export const Projects = ({ full = false }: { full?: boolean }) => {
	const t = useTranslations('Projects')

	return (
		<Section hash='projects' className='mt-[50px]'>
			<Header text={t('header')} />

			<div className="mt-3 sm:mt-6 xl:mt-8 2xl:mt-[40px] grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</Section>
	)
}
