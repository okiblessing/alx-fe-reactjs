module.exports = {
  content: [
    "./public/index.html",       // Ensure this is included if you have a public/index.html file
    "./src/**/*.{js,jsx,ts,tsx}", // This tells Tailwind to look inside all JS, JSX, TS, and TSX files in the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

