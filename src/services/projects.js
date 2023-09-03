import { PROJECTS } from '@bbdd/index.js'

export const getProjects = async () => {
	try {
		const response = PROJECTS
		const projects = await PROJECTS
		return projects
	} catch (e) {
		return null
	}
}