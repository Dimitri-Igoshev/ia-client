'use client'

import { useTranslations } from 'use-intl'
import { Section } from '@/components/sections/Section'
import { Header } from '@/components/layout'
import { Project, ProjectCard } from '@/components/widgets'
import { projects } from '@/data/projects'

export const Projects = () => {
	const t = useTranslations('Projects')

	return (
		<Section hash='projects' className="mt-[150px]">
			<Header text={t('header')} />

			<div className="mt-[100px] flex flex-wrap gap-[100px] flex-row">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</Section>
	)
}
