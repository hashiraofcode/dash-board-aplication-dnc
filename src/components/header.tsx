import styled from 'styled-components'
import { Avatar, Box, Container } from '@mui/material'
import { Logo } from '@/components/index'
import { Link } from 'react-router-dom'
import { type Theme } from '@/types/index.ts'

const HeaderContainer = styled.header<{ theme?: Theme }>`
  background-color: ${(props) => props.theme.appBackground};
  border-bottom: 1px solid ${(props) => props.theme.appDefaultStroke};
  width: 100%;
  margin-bottom: 3.7rem;
`

const HeaderComponents = () => {
  return (
    <HeaderContainer>
      <Container maxWidth={'lg'}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            height: '6.4rem',
          }}
        >
          <Link to="/home">
            <Logo width={9} height={5} />
          </Link>
          <Link to="/perfil">
            <Avatar
              alt="Dnc avatar"
              src="/logo-pixel.svg"
              sx={{ width: '4rem', height: '4rem' }}
            />
          </Link>
        </Box>
      </Container>
    </HeaderContainer>
  )
}

export default HeaderComponents
