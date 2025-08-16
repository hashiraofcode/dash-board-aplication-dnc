import { useState, useEffect, createContext, type ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '@/styles'
import type { AppThemeContextProps } from '@/types'

export const ThemeAppContext = createContext<AppThemeContextProps | undefined>(
  undefined,
)

const ThemeAppProvider = ({ children }: { children: ReactNode }) => {
  const savedTheme = localStorage.getItem('Theme')
  const [appTheme, setAppTheme] = useState<string>(savedTheme ?? 'lightTheme')

  const toggleTheme = (): void => {
    setAppTheme((prevTheme) =>
      prevTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme',
    )
  }

  useEffect(() => {
    localStorage.setItem('Theme', appTheme) // este código "?? 'lightTheme'" utilizado apenas para satisfazer o TS;
  }, [appTheme])

  return (
    <ThemeAppContext.Provider value={{ appTheme, toggleTheme }}>
      <ThemeProvider theme={appTheme === 'lightTheme' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeAppContext.Provider>
  )
}

export default ThemeAppProvider
