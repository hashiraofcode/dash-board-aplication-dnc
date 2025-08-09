import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle, darkTheme } from './styles/index.ts'
import { ThemeProvider } from 'styled-components'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
