/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['ui-sans-serif', 'system-ui'],
                'serif': ['ui-serif', 'Georgia'],
                'mono': ['ui-monospace', 'SFMono-Regular'],
                'display': ['Oswald'],
                'body': ['"Open Sans"'],
            },
            fontSize: {
                'xxs': ['0.60rem', '0.60rem'],
            },
            backgroundImage: {
                bc: "url('../images/businessCard.png')",
                bc1: "url('../images/bg-1.png')",
                bg2: "url('../images/bg2.png')",
                bg3: "url('../images/bg3.png')",
                bg4: "url('../images/bg4.png')",
                bg5: "url('../images/bg5.png')",
            },
        },
        colors: {
            'primary': '#2B2B2B',
            'black': '#000000',
            'white': '#FFFFFF',
            'line-grey': '#E6E6E6',
            'icon-box-border': '#2B2B2B',
            'font-grey': '#999999',
            'font-dark-grey': '#2B2B2B',
            'green': '#39B54A',
            'selected': '#F2F2F2',
            'red': '#f63a3a',
            'charcoal': '#555554',
            'cream': '#dbdbd9'
        },
        fontFamily: {
            roboto: ["Roboto"]
        }
    },
    plugins: [],
}

