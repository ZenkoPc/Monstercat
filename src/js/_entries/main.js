import { mkStore } from '../stores/mkStore'
import { registerComponents } from '../components/+core'
import music from '../components/music'
import forms from '../components/forms'
import menu from '../components/menu'

document.addEventListener('DOMContentLoaded', () => {
	/**
	 * Components
	 */
	registerComponents([
		music,
		forms,
		menu,
	])

	/**
	 * Store example
	 */
	const { getMkData, getMode, isDevelopment, isProduction } = mkStore()
	
	console.log({ mode: getMode(), mkdata: getMkData() })
	console.log({ isProduction: isProduction(), isDevelopment: isDevelopment() })
})
