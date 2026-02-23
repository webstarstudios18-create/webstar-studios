import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#0A0A0A',
                surface: '#111827',
                accent: {
                    DEFAULT: '#2A7FBF',
                    hover: '#1E6FA8',
                },
                text: {
                    primary: '#F9FAFB',
                    muted: '#8A9BB0',
                    body: '#D1D5DB',
                },
                border: '#1F2937',
            },
        },
    },
    plugins: [],
}
export default config
