/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				retro: {
					DEFAULT: '#7541e4',
					black: 'rgba(0,0,0,0.2)',
					green: '#BFFF0A',
					yellow: '#FFBA0A'
				},
				angelpink: '#7541e4'
			},
			fontFamily: {
				poppins: ['Poppins', 'system-ui', 'sans-serif'],
				poppinsblack: ['PoppinsBlack', 'system-ui', 'sans-serif']
			},
			backgroundImage: {
				'darkmode-bg': 'linear-gradient(90deg, #363636 0%, 42.9447%, #090C25 100%)',
				'angel-gradient': 'linear-gradient(90deg, #13B0F5 0%, 42.9447%, #7541e4 100%)'

			}
		}
	},
	safelist: [
		'darkmode-bg',
		'angelgradient'
	],
	plugins: [],
}
