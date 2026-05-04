import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111F',
        steel: '#142235',
        signal: '#00E5FF',
        vault: '#EAF8FF',
        gold: '#F7C948'
      }
    }
  },
  plugins: []
}
export default config
