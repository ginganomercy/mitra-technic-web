/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				mitra: {
					blue: '#1d4ed8', // Royal Blue (Identik dengan warna logo asli)
					red: '#dc2626',  // Solid Red (Identik dengan warna logo asli)
					yellow: '#ffcc00', // Warna kuning asli sebagai aksen sekunder
					whatsapp: '#25D366'
				}
			},
			animation: {
				'floating': 'floating 2s infinite',
				'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
				'glow-pulse': 'glowPulse 3s infinite',
				'fade-in': 'fadeIn 1s ease-out both',
			},
			keyframes: {
				floating: {
					'0%, 100%': { transform: 'translateY(0)', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' },
					'50%': { transform: 'translateY(-6px)', boxShadow: '0 8px 20px rgba(0,0,0,0.35)' },
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				glowPulse: {
					'0%, 100%': { boxShadow: '0 0 15px rgba(225, 29, 72, 0.3)' },
					'50%': { boxShadow: '0 0 30px rgba(225, 29, 72, 0.7)' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				}
			}
		},
	},
	plugins: [],
}
// Force tailwind rebuild
