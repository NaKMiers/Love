import { createTheme } from '@mui/material/styles'

const theme = createTheme({
   palette: {
      primary: {
         main: '#f44336',
         light: '#ccc',
         dark: '#000',
         contrastText: '#333',
      },
      secondary: {
         main: '#2196f3',
         light: '#eee',
         dark: '#000',
         contrastText: '#fff',
      },
   },
   typography: {
      fontFamily: [
         '-apple-system',
         'BlinkMacSystemFont',
         '"Segoe UI"',
         'Roboto',
         '"Helvetica Neue"',
         'Arial',
         'sans-serif',
         '"Apple Color Emoji"',
         '"Segoe UI Emoji"',
         '"Segoe UI Symbol"',
      ].join(','),
   },
   components: {
      // Name of the component
      MuiButtonBase: {
         defaultProps: {
            // The props to change the default for.
            disableRipple: false, // No more ripple, on the whole application 💣!
         },
      },
   },
   spacing: 4,
})

export default theme
