import type { Theme } from '@/types'
import styled from 'styled-components'

const Card = styled.div<{ theme?: Theme }>`
  background-color: ${(props) => props.theme.card.background};
  border: 1px solid ${(props) => props.theme.card.border};
  border-radius: 0.8rem;
  padding: 2.4rem;
  width: 100%;
  &.alert {
    background-color: ${(props) => props.theme.card.alert};
    border-color: ${(props) => props.theme.card.alert};

    &.succsses {
      background-color: ${(props) => props.theme.card.success};
      border-color: ${(props) => props.theme.card.success};
    }

    &.warning {
      background-color: ${(props) => props.theme.card.warning};
      border-color: ${(props) => props.theme.card.warning};
    }
    ¨& a {
      color: inherit;
      text-decoration: none;
    }
  }
`
export default Card
