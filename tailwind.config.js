/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        spring: "#00ED64",
        forest: "#00684A",
        evergreen: "#023430",
        slateblue: "#001E2B"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

