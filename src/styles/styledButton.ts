import styled from 'styled-components'
import { type ButtonAtt, type Theme } from '@/types'

const StyledButton = styled.button<ButtonAtt & { theme?: Theme }>`
  border-radius: 0.8rem;
  border: none;
  cursor: pointer;
  font-size: clamp(0.9rem, 4vw, 1.6rem);
  font-weight: bold;
  height: 5rem;
  padding: 0 clamp(0.9rem, 4vw, 1.6rem);
  transition: background-color 0.3s;
  width: 100%;

  &.primary {
    background-color: ${(props) => props.theme.buttons.primary};
    color: ${(props) => props.theme.buttons.primaryColor};
    &:hover {
      background-color: ${(props) => props.theme.buttons.primaryHover};
    }

    &.alert {
      background-color: ${(props) => props.theme.buttons.alert};
      color: ${(props) => props.theme.buttons.primaryColor};
      &:hover {
        background-color: ${(props) => props.theme.buttons.alertHover};
      }
    }

    &.bordeless-alert {
      background-color: none;
      color: ${(props) => props.theme.buttons.alert};
      height: 0;
      padding: 0;

      &:hover {
        color: ${(props) => props.theme.buttons.alertHover};
      }
    }
  }

  &:disabled {
    background-color: ${(props) => props.theme.buttons.disabled};
    color: ${(props) => props.theme.buttons.disabledColor};
    cursor: not-allowed;
    &:hover {
      background-color: ${(props) => props.theme.buttons.primaryHover};
    }
  }
`

export default StyledButton
