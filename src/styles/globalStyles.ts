import { createGlobalStyle } from 'styled-components'
import type { Theme } from '@/types/index.ts'

export const GlobalStyle = createGlobalStyle<{ theme?: Theme }>`
* {
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    box-sizing: border-box;
}
html {
    font-size: 62.5%;
}
body {
    max-width: 100%;
    min-height: 100dvh;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    background-color: ${(props) => props.theme.appBackground}
}
`
