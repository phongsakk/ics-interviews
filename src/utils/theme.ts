import { createTheme } from "@mui/material"

export const theme = createTheme({
  typography: {
    fontFamily: "'Kanit', sans-serif",
    fontSize: 16
  },palette:{
    error: {
      main: '#F7685B'
    }
  }
})

export const colors = {
  default: '#134B8A',
  deepBlue: '#0F1E56',
  grey: '#C3BEBB',
  fadeBlue: '#C4D3E9',
}

export const text = {
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    '200': '#E0E0E0',
    '400': '#9E9E9E',
    '600': '#605C5C',
  }
}