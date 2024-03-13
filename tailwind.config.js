/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      dropShadow: {
        sm: '0px 0px 31px #ffffff33'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
