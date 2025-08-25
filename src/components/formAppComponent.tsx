import type { FormProps, mensage } from '@/types/index.ts'
import { StyledButton, StyledInput } from '@/styles/index.ts'
import { type Theme } from '@/types/index.ts'
import type React from 'react'
import styled from 'styled-components'
import { useEffect, useState, type ReactNode } from 'react'

const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
`
const MensageComponent = styled.p<{ children: string }>`
  font-size: clamp(1.3rem, 3vw, 1.5rem);
`

export const FormsApp = (atributsProps: FormProps) => {
  const { inputs, buttons, mensage, textButton } = atributsProps
  const [mensageElement, setMensageElement] = useState<ReactNode | null>(null)

  const IsError = (mensage: mensage | undefined): void => {
    if (mensage) {
      const element =
        mensage?.cod === 'sucsses' ? (
          <MensageComponent
            style={{
              color: `${(props: { theme?: Theme }) => props.theme?.typographies.error}`,
            }}
          >
            {String(mensage?.content)}
          </MensageComponent>
        ) : (
          <MensageComponent style={{ color: 'red' }}>
            {String(mensage?.content)}
          </MensageComponent>
        )
      setMensageElement(element)
    }
  }
  useEffect(() => {
    IsError(mensage)
  }, [mensage])

  return (
    <>
      <FormComponent>
        {inputs.map((inputProps, index): React.ReactNode => {
          return <StyledInput key={index} {...inputProps} />
        })}

        {buttons.map(
          ({ ...buttonProps }, index): React.ReactNode => (
            <StyledButton key={index} {...buttonProps}>
              {textButton}
            </StyledButton>
          ),
        )}
        {mensageElement}
      </FormComponent>
    </>
  )
}

export default FormsApp
