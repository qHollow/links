/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.tsx',
		'./src/widgets/**/*.tsx',
		'./src/shared/ui/**/*.tsx',
		'./pages/**/*.tsx',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
