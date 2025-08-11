import { Header } from '@/components/index.ts'
import { CardComponent } from '@/styles'
import { Container } from '@mui/material'
function Home() {
  return (
    <>
      <Header />
      <h1>Home</h1>
      <Container maxWidth="lg">
        <CardComponent className="">card</CardComponent>
      </Container>
    </>
  )
}

export default Home
