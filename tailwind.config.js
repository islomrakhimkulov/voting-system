module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				sm: '480px',
				md: '768px',
				lg: '976px',
				xl: '1440px',
			},
			spacing: {
				p: '1.5rem', // 24px
				sm: '1.5rem', // 24px
			},
			fontFamily: {
				sans: ['Open Sans'],
			},
			// fontSize: {},
			backgroundImage: {
				logo: "url('./src/assets/logo.png')",
				presentation: "url('./src/assets/presentation.svg')",
				tablet: "url('./src/assets/tablet.svg')",
				admin: "url('./src/assets/admin.svg')",
			},
			colors: {
				// Main colors
				primary: {
					50: '#ecf5fe',
					75: '#b0d6f9',
					100: '#8fc5f6',
					200: '#5facf3',
					300: '#3e9bf0',
					400: '#2b6da8',
					500: '#265f92',
				},
				secondary: {
					50: '#fdedf5',
					75: '#f7b4d5',
					100: '#f495c4',
					200: '#ef67aa',
					300: '#ec4899',
					400: '#a5326b',
					500: '#902c5d',
				},
				gray: {
					0: '#ffffff',
					10: '#fbfbfb',
					20: '#f6f6f6',
					30: '#eeeeee',
					40: '#e3e3e3',
					50: '#c9c9c9',
					60: '#bcbcbc',
					70: '#b1b1b1',
					80: '#a4a4a4',
					90: '#979797',
					100: '#8a8a8a',
					200: '#7d7d7d',
					300: '#707070',
					400: '#656565',
					500: '#585858',
					600: '#4d4d4d',
					700: '#3e3e3e',
					800: '#313131',
					900: '#262626',
				},
				darkBlue: {
					50: '#eeeefc',
					75: '#b9b8f3',
					100: '#9c9bee',
					200: '#7270e7',
					300: '#5553e2',
					400: '#3b3a9e',
					500: '#34338a',
				},
				// Special colors
				success: {
					50: '#e9f8f1',
					75: '#a4e2c4',
					100: '#7fd6ac',
					200: '#48c488',
					300: '#22b870',
					400: '#18814e',
					500: '#157044',
				},
				warning: {
					50: '#fffaef',
					75: '#fee9bc',
					100: '#fee0a0',
					200: '#fdd277',
					300: '#fdc95b',
					400: '#b18d40',
					500: '#9a7b38',
				},
				danger: {
					50: '#ffeded',
					75: '#ffb4b4',
					100: '#ff9595',
					200: '#ff6868',
					300: '#ff4949',
					400: '#b33333',
					500: '#9c2d2d',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
	],
};
