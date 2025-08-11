import { Header, AvatarComponent } from '@/components/index.ts'
import { CardComponent } from '@/styles'
import { Container } from '@mui/material'
import { type ListDataProps } from '@/types'
import { currencyConverter } from '@/utils/index.ts'
function Home() {
  const ExempleArray: ListDataProps[] = [
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
  return (
    <>
      <Header />
      <h1>Home</h1>
      <Container maxWidth="lg">
        <CardComponent className="">card</CardComponent>
        <CardComponent>
          <AvatarComponent people={ExempleArray} />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
