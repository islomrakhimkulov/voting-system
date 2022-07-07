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
			// spacing: {
			// 	1: '0.06rem', // 1px
			// 	2: '0.13rem', // 2px
			// 	3: '0.19rem', // 3px
			// 	4: '0.3rem', // 4px
			// 	5: '0.3rem', // 5px
			// 	6: '0.4rem', // 6px
			// 	8: '0.5rem', // 8px
			// 	10: '0.625rem', // 10px
			// 	12: '0.75rem', // 12px
			// 	13: '0.8125rem', // 13px
			// 	14: '0.875rem', // 14px
			// 	15: '0.9375rem', // 15px
			// 	16: '1rem', // 16px
			// 	18: '1.125rem', // 18px
			// 	20: '1.25rem', // 20px
			// 	24: '1.5rem', // 24px
			// 	25: '1.5625rem', // 25px
			// 	28: '1.75rem', // 28px
			// 	32: '2rem', // 32px
			// 	36: '2.25rem', // 36px
			// 	40: '2.5rem', // 40px
			// 	44: '2.75rem', // 44px
			// 	48: '3rem', // 48px
			// 	50: '3rem', // 50px
			// 	56: '3.5rem', // 56px
			// 	64: '4rem', // 64px
			// 	72: '4.5rem', // 72px
			// },
			fontFamily: {
				sans: ['Open Sans'],
			},
			fontSize: {
				xs: '.75rem', // 12px
				sm: '.875rem', // 14px
				base: '1rem', // 16px
				lg: '1.125rem', // 18px
				xl: '1.25rem', // 20px
				'2xl': '1.5rem', // 24px
				'3xl': '1.875rem', // 30px
				'4xl': '2.25rem', // 36px
				'5xl': '3rem', // 48px
				'6xl': '4rem', // 64px
				'7xl': '5rem', // 80px
			},
			backgroundImage: {
				logo: "url('./src/assets/logo.png')",
				presentation: "url('./src/assets/presentation.svg')",
				tablet: "url('./src/assets/tablet.svg')",
				admin: "url('./src/assets/admin.svg')",
				adminBg: "url('./src/assets/pattern.png')",
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
					5: '#333333',
					10: '#fbfbfb',
					15: '#8F8F8F',
					20: '#f6f6f6',
					25: '#747474',
					30: '#eeeeee',
					35: '#6F7482',
					40: '#e3e3e3',
					45: '#B8BCCA',
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
					1000: '#606060',
					1500: '#BFBFBF',
					2000: '#DDDDDD',
					2500: '#FAFAFA',
					3000: '#F9F9F9',
				},
				accent: {
					50: '#eeeefc',
					60: '#d6d6f8',
					75: '#b9b8f3',
					100: '#9c9bee',
					200: '#7270e7',
					300: '#5553e2',
					400: '#3b3a9e',
					500: '#34338a',
					600: '#4D46DE',
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
					600: '#F84D4D',
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
