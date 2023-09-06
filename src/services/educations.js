import educations from '@bbdd/educations.json'

export const getEducations = async () => {
	try {
		const response = educations
		return response
	} catch (e) {
		return null
	}
}