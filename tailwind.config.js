/** @type {import('tailwindcss').Config} */
import tailwindAnimated from 'tailwindcss-animated';
import { nextui } from '@nextui-org/react'
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    tailwindAnimated,
    nextui({
      themes: {
        'yellow-light': {
          extend: 'light',
          colors: {
            background: '#fffffe',
            foreground: '#000',
            primary: {
              50: '#fefce8',
              100: '#fef9c3',
              200: '#fef08a',
              300: '#fde047',
              400: '#facc15',
              500: '#eab308',
              600: '#ca8a04',
              700: '#a16207',
              800: '#854d0e',
              900: '#713f12',
              DEFAULT: '#eab308',
              foreground: '#fff',
            },
            secondary: {
              DEFAULT: '#64748b',
              foreground: '#000',
            },
            focus: '#ca8a04',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '4px',
              medium: '6px',
              large: '8px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
        'yellow-dark': {
          extend: 'dark',
          colors: {
            background: '#000',
            foreground: '#fff',
            primary: {
              50: '#fefce8',
              100: '#fef9c3',
              200: '#fef08a',
              300: '#fde047',
              400: '#facc15',
              500: '#eab308',
              600: '#ca8a04',
              700: '#a16207',
              800: '#854d0e',
              900: '#713f12',
              DEFAULT: '#eab308',
              foreground: '#fff',
            },
            secondary: {
              DEFAULT: '#18181b',
              foreground: '#fff',
            },
            focus: '#ca8a04',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '4px',
              medium: '6px',
              large: '8px',
            },
            borderWidth: {
              small: '2px',
              medium: '2px',
              large: '3px',
            },
          },
        },
      },
    }),
  ],
}
