/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1E40AF',
                    light: '#3B82F6',
                    dark: '#1E3A8A',
                },
                secondary: {
                    DEFAULT: '#1F2937',
                    light: '#6B7280',
                    dark: '#111827',
                },
                success: '#059669',
                warning: '#D97706',
                error: '#DC2626',
                info: '#0891B2',
                background: {
                    primary: '#F9FAFB',
                    secondary: '#FFFFFF',
                    dark: '#111827',
                },
                text: {
                    primary: '#111827',
                    secondary: '#6B7280',
                    muted: '#9CA3AF',
                },
                border: '#E5E7EB',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
            },
        },
    },
    plugins: [],
};


