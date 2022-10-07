import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Routes } from 'react-router-dom'
import theme from './common/MuiTheme'
import routes from './routes'

function App() {
   return (
      <ThemeProvider theme={theme}>
         {/* Reset CSS */}
         <CssBaseline />

         {/* Router */}
         <Routes>{routes}</Routes>
      </ThemeProvider>
   )
}

export default App
