/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/pages/**/*.{ts,tsx}', './src/shared/ui/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
