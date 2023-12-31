/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');

export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
		addDynamicIconSelectors(),
	],
};
