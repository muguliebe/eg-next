const config = {
    singleQuote: true,
    jsxSingleQuote: true,
    semi: false,
    trailingComma: 'es5',
    bracketSpacing: true,
    tabWidth: 2,
    overrides: [
        {files: '*.ts', options: {tabWidth: 4}},
        {files: '*.js', options: {tabWidth: 4}},
        {files: '*.jsx', options: {tabWidth: 2}},
        {files: '*.tsx', options: {tabWidth: 2}}
    ],
    endOfLine: 'lf',
    arrowParens: 'avoid',
    printWidth: 120,
}

export default config
