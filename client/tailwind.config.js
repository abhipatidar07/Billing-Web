/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      // Configure your color palette here
      white: "#fff",
      black: "#000",
      nav:'#6E6C6C',
      white: '#ffffff',
      orange:"#f97316",
      purpule:'#a855f7',
      yellow:"#fde047",
      blue:"#2563eb",
      pink: {
        50:'#F8ECEC',
        100:'#695555',
        200:'#E7CFCF',
        300:'#9C7A7A',
        400:'#7F6E6A',
        500:'#F0D4D4'
      },
      brown: {
        50: '#fdf8f6',
        100: '#f2e8e5',
        200: '#eaddd7',
        300: '#e0cec7',
        400: '#d2bab0',
        500: '#bfa094',
        600: '#a18072',
        700: '#977669',
        800: '#846358',
        900: '#43302b',
      },
      rose :{
        50:'#fff1f2',
        100:'#ffe4e6',
        200:'#fecdd3',
        300:'#fda4af',
        400:'#fb7185',
        500:'#f43f5e',
        600:'#e11d48'
      },
      gray:{
        50:'#f9fafb',
        100:'#f3f4f6',
        200:'#e5e7eb',
        300:'#d1d5db',
        400:'#94a3b8',
        500:'#64748b',
        600:'#475569',
        700:'#334155',
        800:'#1e293b',
        900:'#0f172a'
      }
    },
  },
  plugins: [],
}