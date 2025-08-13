import styled from 'styled-components'
import { TitleH2 } from '@/styles'
import { type Theme, type CustomTableProps } from '@/types/index.ts'

const TableWrapperStyled = styled.div<{ theme?: Theme }>`
  overflow-x: auto;
  width: 100%;
  background-color: none;
  & table {
    width: 100%;
    border-collapse: collapse;
    & td,
    th {
      height: 4.8rem;
      padding: 0 0.8rem 0 0;
      text-align: left;
      &:last-child {
        text-align: right;
        padding: 0;
      }
    }
    & th {
      color: ${(props) => props.theme.typographies.subtitle};
      font-weight: 600;
    }
    & tr {
      border-bottom: 0.08rem solid ${(props) => props.theme.appDefaultStroke};
      &:last-child {
        border-bottom: none;
      }
    }
  }
`

const CustomeTable = (props: CustomTableProps) => {
  const { header, rows } = props
  return (
    <TableWrapperStyled>
      <TitleH2 typographieProps={{}}>Meus Leads</TitleH2>
      <table>
        <thead>
          {header.map((elementHeader, index) => (
            <th key={index}>{elementHeader}</th>
          ))}
        </thead>
        <tbody>
          {rows.map((rowElement, index) => (
            <tr key={index}>
              {rowElement.map((element, index) => (
                <td key={index}>{element}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapperStyled>
  )
}

export default CustomeTable
