import type { Theme } from '@/types'
import styled from 'styled-components'

const LogoStyled = styled.figure<{
  theme?: Theme
  width: number | string
  height: number | string
}>`
  background-image: url(/${(props) => props.theme.appLogo});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  width: ${(props) => `${props.width}rem` || '9rem'};
  height: ${(props) => `${props.height}rem` || '5rem'};
`
export default LogoStyled
