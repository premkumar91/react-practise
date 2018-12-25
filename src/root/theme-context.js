import React from 'react'
export const Themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };
export const ThemeContext = React.createContext({
    theme:Themes.dark,
    toggleTheme:()=>{}
}) 