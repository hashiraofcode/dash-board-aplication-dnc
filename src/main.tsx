import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle, lightTheme } from './styles/index.ts'
import { ThemeProvider } from 'styled-components'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
