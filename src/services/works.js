import works from '@bbdd/works.json'

export const getWorks = async () => {
	try {
		const response = works
		return response
	} catch (e) {
		return null
	}
}