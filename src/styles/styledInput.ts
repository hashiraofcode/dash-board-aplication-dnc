import styled from 'styled-components'
import { type InputAtt, type Theme } from '@/types'

const StyledInput = styled.input<InputAtt & { theme?: Theme }>`
  background-color: ${(props) => props.theme.textInput.active};
  color: ${(props) => props.theme.textInput.activeColor};
  border: 0.1rem solid ${(props) => props.theme.textInput.borderColor};
  cursor: pointer;
  height: 5rem;
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  font-weight: 500;
  padding: 0 1.6rem;
  width: 100%;

  &:disabled {
    background-color: ${(props) => props.theme.textInput.disabled};
    color: ${(props) => props.theme.textInput.disabledBorderColor};
    border: 0.1rem solid ${(props) => props.theme.textInput.disabledBorderColor};
    cursor: not-allowed;
  }
  &::placeholder {
    color: ${(props) => props.theme.textInput.placeholderColor};
  }
`

export default StyledInput
