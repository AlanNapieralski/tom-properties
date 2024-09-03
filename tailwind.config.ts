import { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#295f98',
        'primary-content': '#94c5fa',
        secondary: '#CDC2A5',
        'secondary-content': '#EAE4DD',
        accent: '#121481',
        'base-100': '#fdfcfc',
        'base-200': '#f7f4f1',
        'base-300': '#EAE4DD',
      },
    },
  },
  plugins: [
    daisyui,
  ],
}
export default config
