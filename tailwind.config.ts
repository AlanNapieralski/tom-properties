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
        secondary: '#EBEDF0',
        'secondary-content': '#EBEEF2',
        accent: '#121481',
        'base-100': '#EBEEF2',
      },
    },
  },
  plugins: [
    daisyui,
  ],
}
export default config
