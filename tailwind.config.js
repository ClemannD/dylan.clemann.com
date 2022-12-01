/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
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
                'blue-gradient':
                    'linear-gradient(90deg, hsla(179, 67%, 66%, 1) 0%, hsla(238, 74%, 61%, 1) 100%)',
                'blue-gradient2':
                    'linear-gradient(90deg, hsla(232, 73%, 65%, 1) 0%, hsla(279, 33%, 48%, 1) 100%)',
            },
            colors: {
                blackish: '#000f14',
                'deep-blue': '#2b50aa',
                indigo: '#6576e7',
            },
            fontSize: {
                '1.5xl': '1.375rem',
            },
        },
    },
    plugins: [],
};
