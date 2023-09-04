import projects from '@bbdd/projects.json'

export const getProjects = async () => {
	try {
		const response = projects
		return response
	} catch (e) {
		return null
	}
}