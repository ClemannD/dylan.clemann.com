/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                blink: {
                    '0%, 100%': {
                        opacity: 0,
                    },
                    '50%': {
                        opacity: 1,
                    },
                },
            },
            animation: {
                blink: 'blink 1s infinite',
            },
            backgroundImage: {
                'plus-pattern': "url('/PlusPattern8x8.svg')",
            },
        },
    },
    plugins: [],
};
