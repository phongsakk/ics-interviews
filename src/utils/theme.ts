import { createTheme } from "@mui/material"

export const colors = {
  default: '#134B8A',
  deepBlue: '#0F1E56',
  grey: '#C3BEBB',
  fadeBlue: '#C4D3E9',
  background: '#F6F7F8'
}

export const text = {
  white: '#FFFFFF',
  black: '#000000',
  grey: {
    '200': '#E0E0E0',
    '400': '#9E9E9E',
    '600': '#605C5C',
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "'Kanit', sans-serif",
    fontSize: 16
  }, palette: {
    primary: {
      main: colors.default,
    },
    error: {
      main: '#F7685B'
    },
    background: {
      default: colors.background,
      paper: '#FFFFFF'
    }
  }
})