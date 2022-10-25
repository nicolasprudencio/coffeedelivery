import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { ShoppingCartContextProvider } from './contexts/ShoppingCartContext'
import { Router } from './Router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer closeOnClick />
      <BrowserRouter>
        <ShoppingCartContextProvider>
          <Router />
        </ShoppingCartContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
