/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                blueish: "#000C21",
                redish: "#EA001E",
                "blueish-2": "#161829",
            },
            animation: {},
            keyframes: {
                "end-left": {},
            },
        },
    },
    plugins: [],
};
