/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				mitra: {
					blue: '#07178f',
					yellow: '#ffcc00',
					whatsapp: '#25D366'
				}
			},
			animation: {
				'floating': 'floating 2s infinite',
			},
			keyframes: {
				floating: {
					'0%, 100%': { transform: 'translateY(0)', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' },
					'50%': { transform: 'translateY(-6px)', boxShadow: '0 8px 20px rgba(0,0,0,0.35)' },
				}
			}
		},
	},
	plugins: [],
}
