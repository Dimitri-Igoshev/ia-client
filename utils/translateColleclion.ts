const tc = (collection: any, lang: string) => {
	const newCollection = [...collection]

	newCollection.forEach(item => {
		if (item.title) item.title = item.title[lang] ? item.title[lang] : item.title['de']
		if (item.text) item.text = item.text[lang] ? item.text[lang] : item.text['de']
		if (item.desc) item.desc = item.desc[lang] ? item.desc[lang] : item.desc['de']
		if (item.price) item.price = item.price[lang] ? item.price[lang] : item.price['de']
		if (item.descArr) item.descArr = item.descArr[lang] ? item.descArr[lang] : item.descArr['de']
		if (item.tags) item.tags = item.tags[lang] ? item.tags[lang] : item.tags['de']
	})

	return newCollection
}

export default tc