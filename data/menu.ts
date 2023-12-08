export interface MenuItem {
	id: string
	title: string
	path: string
}

export const menu = [
	{
		id: 1,
		title: {
			en: 'Projects',
			de: 'Proekte',
			ru: 'Проекты',
		},
		path: '#projects'
	},
	{
		id: 2,
		title: {
			en: 'Services',
			de: 'Leistungen',
			ru: 'Услуги',
		},
		path: '#services'
	},
	{
		id: 3,
		title: {
			en: 'About us',
			de: 'Über uns',
			ru: 'О нас',
		},
		path: '#about'
	},
	{
		id: 4,
		title: {
			en: 'Contacts',
			de: 'Kontakte',
			ru: 'Контакты',
		},
		path: '#contacts'
	}
]