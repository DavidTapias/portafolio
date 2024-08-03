/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		// screens: {
			// 'tablet': '640px',
			// => @media (min-width: 640px) { ... }
	  
			// 'laptop': '1024px',
			// // => @media (min-width: 1024px) { ... }
	  
			// 'desktop': '1280px',
			// // => @media (min-width: 1280px) { ... }
		//   },
		colors:{
			'c-dark-gray':'#193f4a',
			'c-dark-yellow':'#f4af2d',
			'c-white':'#fffffe',
			'c-ligth-cyan':'#2f8ca3',
			'c-black':'#030504'
		}
	},
	plugins: [],
}
