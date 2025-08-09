import type { type } from 'os'
import type { HtmlHTMLAttributes } from 'react'

export type InputAtt = React.InputHTMLAttributes<HtmlHTMLAttributes>
export type ButtonAtt = React.ButtonHTMLAttributes<HtmlHTMLAttributes>
type textButton = string

type mensage = {
  content?: String
  cod: 'error' | 'sucsses'
}

export interface FormProps {
  inputs: InputAtt[]
  buttons: ButtonAtt[]
  mensage?: mensage
  textButton: textButton
}
