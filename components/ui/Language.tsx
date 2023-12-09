'use client'

import { MdOutlineLanguage } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import { useLocale } from "next-intl";

const locales = ['en', 'de', 'ru']

export const Language = () => {
	const locale = useLocale();
	const languages = locales.filter(l => l !== locale)

	return (
		<div className="relative group/lang items-center gap-[5px] text-base cursor-pointer hidden lg:flex">
			<MdOutlineLanguage className="text-xl text-primary" />
			<span className="hover:text-primary capitalize">{locale}</span>
			<div className="absolute transition-all duration-500 invisible top-[32px] right-0 group-hover/lang:visible">
				<ul className="flex flex-col gap-2">
					{languages?.map(language => (
						<li
							key={language}
							className="transition-all duration-500 hover:text-primary capitalize"
							onClick={() => window.open(`/${language}`, '_self')}
						>
							{language}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
