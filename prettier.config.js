module.exports = {
    plugins: [require('prettier-plugin-tailwindcss')],
    trailingComma: 'es5',
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    bracketSpacing: true,
    arrowParens: 'always',
    importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
    overrides: [
        {
            files: '*.yml',
            options: {
                tabWidth: 2,
            },
        },
        {
            files: '*.yaml',
            options: {
                tabWidth: 2,
            },
        },
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
