/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["work-sans", "sans-serif"],
			},
			colors: {
				White: "hsl(0, 0%, 100%)",
				"light-pink": "hsl(275, 100%, 97%)",
				"grayish-purple": "hsl(292, 16%, 49%)",
				"dark-purple": "hsl(292, 42%, 14%)",
        'pink': 'hsl(281, 83%, 54%)'
			},
      content: {
        'plus': 'url("/assets/images/icon-plus.svg")',
        'minus': 'url("/assets/images/icon-minus.svg")'
      }
		},
	},
	plugins: [],
};
