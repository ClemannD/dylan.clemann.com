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
                    'linear-gradient(135deg,hsla(238, 74%, 61%, 1) 0%,  hsla(179, 67%, 66%, 1) 100%)',
                'light-blue-gradient':
                    'linear-gradient(135deg, hsla(212, 57%, 73%, 1) 0%, hsla(210, 29%, 56%, 1) 100%)',
                'blue-gradient2':
                    'linear-gradient(135deg, hsla(232, 73%, 65%, 1) 0%, hsla(279, 33%, 48%, 1) 100%)',
                'blue-gradient3':
                    'linear-gradient(135deg, hsla(212, 81%, 84%, 1) 0%, hsla(240, 30%, 69%, 1) 99%)',
            },
            colors: {
                almostBlack: '#151e21',
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
