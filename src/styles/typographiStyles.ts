import styled from 'styled-components'
import { type Theme, type StyledComponent } from '@/types'

export const TitleH1 = styled.h1<{
  theme?: Theme
  typographieProps: StyledComponent
}>`
  color: ${(props) => props.typographieProps.color || 'inherit'};
  font-size: ${(props) =>
    props.typographieProps.fontSize || 'clamp(1.5rem, 4vw, 2.4rem)'};
  font-weight: ${(props) => props.typographieProps.weight || '600'};
  letter-spacing: -1;
  line-height: ${(props) => props.typographieProps.lineHeigth || '1.5'};
`

export const TitleH2 = styled.h2<{
  theme?: Theme
  typographieProps: StyledComponent
}>`
  color: ${(props) => props.typographieProps.color || 'inherit'};
  font-size: ${(props) =>
    props.typographieProps.fontSize || 'clamp(1.3rem, 3vw, 1.6rem)'};
  font-weight: ${(props) => props.typographieProps.weight || '600'};
  letter-spacing: -1;
  line-height: ${(props) => props.typographieProps.lineHeigth || '1.5'};
`

export const StyledP = styled.p<{
  theme?: Theme
  typographieProps: StyledComponent
}>`
  color: ${(props) => props.typographieProps.color || 'inherit'};
  font-size: ${(props) =>
    props.typographieProps.fontSize || 'clamp(1.3rem, 3vw, 1.6rem)'};
  font-weight: ${(props) => props.typographieProps.weight || '400'};
  letter-spacing: -1;
  line-height: ${(props) => props.typographieProps.lineHeigth || '1.5'};
`
export const StyledSpan = styled.span<{
  theme?: Theme
  typographieProps: StyledComponent
}>`
  color: ${(props) => props.typographieProps.color || 'inherit'};
  font-size: ${(props) =>
    props.typographieProps.fontSize || 'clamp(1.3rem, 3vw, 1.6rem)'};
  font-weight: ${(props) => props.typographieProps.weight || '400'};
  letter-spacing: -1;
  line-height: ${(props) => props.typographieProps.lineHeigth || '1.5'};
`

export const StyledUl = styled.span<{
  theme?: Theme
  typographieProps: StyledComponent
}>`
  color: ${(props) => props.typographieProps.color || 'inherit'};
  font-size: ${(props) =>
    props.typographieProps.fontSize || 'clamp(1.3rem, 3vw, 1.6rem)'};
  font-weight: ${(props) => props.typographieProps.weight || '400'};
  letter-spacing: -1;
  line-height: ${(props) => props.typographieProps.lineHeigth || '1.5'};
  list-style-position: inside;
  list-style: disc;
  & li {
    margin-left: 1.5rem;
  }
`
