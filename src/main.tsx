import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/index.ts'
import ThemeAppProvider from './contexts/appThemeContext.tsx'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeAppProvider>
      <GlobalStyle />
      <App />
    </ThemeAppProvider>
  </StrictMode>,
)
