import { Header } from '@/components'
import { CardComponent, StyledButton, TitleH2 } from '@/styles'
import { useContext } from 'react'
import { Box, Container, Grid } from '@mui/material'
import { ThemeAppContext } from '@/contexts'
function Profile() {
  const appThemeConsumer = useContext(ThemeAppContext)
  return (
    <>
      <Header />
      <Container maxWidth={'lg'}>
        <Grid container sx={{ width: '100%' }}>
          <Grid size={5}>
            <CardComponent>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.6rem',
                }}
              >
                <TitleH2>Definições de conta</TitleH2>
                <StyledButton className="alert">Fazer logout</StyledButton>
                <StyledButton
                  className="primary"
                  onClick={() => {
                    appThemeConsumer?.toggleTheme()
                  }}
                >
                  Trocar para tema
                  {appThemeConsumer?.appTheme === 'lightTheme'
                    ? ' escuro'
                    : ' claro'}
                </StyledButton>
              </Box>
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Profile
