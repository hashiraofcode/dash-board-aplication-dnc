import {
  Header,
  AvatarComponent,
  CustomTable,
  CustomChart,
} from '@/components/index.ts'
import { CardComponent } from '@/styles'
import { Container } from '@mui/material'
import { type ListDataProps, type CustomTableProps } from '@/types'
import { currencyConverter } from '@/utils/index.ts'
function Home() {
  const ExempleEmployeeData: ListDataProps[] = [
    {
      avatar: '/logo-pixel.svg',
      name: 'João da Silva',
      subtitle: `${currencyConverter(11345.56)}`,
    },
    {
      avatar: '/logo-pixel.svg',
      name: 'João da Silva',
      subtitle: `${currencyConverter(11345.56)}`,
    },
    {
      avatar: '/logo-pixel.svg',
      name: 'João da Silva',
      subtitle: `${currencyConverter(11345.56)}`,
    },
    {
      avatar: '/logo-pixel.svg',
      name: 'João da Silva',
      subtitle: `${currencyConverter(11345.56)}`,
    },
  ]
  const ExempleLeadsData: CustomTableProps = {
    header: ['Nome', 'E-mail', 'Action'],
    rows: [
      [
        <span>João da Silva</span>,
        <span>joãozinho2@gmail.com</span>,
        <button>Action</button>,
      ],
      [
        <span>João da Silva</span>,
        <span>joãozinho2@gmail.com</span>,
        <button>Action</button>,
      ],
      [
        <span>João da Silva</span>,
        <span>joãozinho2@gmail.com</span>,
        <button>Action</button>,
      ],
      [
        <span>João da Silva</span>,
        <span>joãozinho2@gmail.com</span>,
        <button>Action</button>,
      ],
      [
        <span>João da Silva</span>,
        <span>joãozinho2@gmail.com</span>,
        <button>Action</button>,
      ],
      [
        <span>João da Silva</span>,
        <span>joãozinho2@gmail.com</span>,
        <button>Action</button>,
      ],
    ],
  }
  const data = [12, 19, 8, 15, 22, 10]
  const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho']
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent className="">
          <CustomTable
            header={ExempleLeadsData.header}
            rows={ExempleLeadsData.rows}
          />
        </CardComponent>
        <CardComponent>
          <AvatarComponent people={ExempleEmployeeData} />
        </CardComponent>
        <CardComponent>
          <CustomChart labels={labels} data={data} type="bar" />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
