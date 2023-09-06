import { readFile } from 'node:fs/promises'
import path from 'node:path'

const DB_PATH = path.join(process.cwd(), './bbdd/')

export function readDBFile (dbName) {
	return readFile(`${DB_PATH}/${dbName}.json`, 'utf-8').then(JSON.parse)
}

export const PROJECTS = await readDBFile('projects')
export const WORKS = await readDBFile('works')