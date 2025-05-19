/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'project-red': '#e74c3c',
                'project-blue': '#3498db',
                'project-green': '#2ecc71',
                'project-purple': '#9b59b6',
                'project-orange': '#f39c12',
                'project-teal': '#1abc9c'
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            boxShadow: {
                'glow': '0 0 15px rgba(255, 255, 255, 0.3)',
            },
            animation: {
                'bounce-slow': 'bounce 3s infinite',
            }
        },
    },
    plugins: [],
}