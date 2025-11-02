
/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
"./index.html",
"./src/**/*.{js,jsx,ts,tsx}"
],
theme: {
extend: {
colors: {
winagreen: '#06b07a',
winablue: '#0b2b6b',
winatext: '#0f1724'
},
fontFamily: {
sans: ['Inter', 'ui-sans-serif', 'system-ui']
}
},
},
plugins: [],
}
