//  COMPONENTS AND STYLES
import { Header } from '@/components'
import { CardComponent, StyledButton, TitleH2 } from '@/styles'
import { useContext } from 'react'
import { Box, Container, Grid } from '@mui/material'
import { ThemeAppContext } from '@/contexts'

// SERVICES
import { logoutAction } from '@/services'

function Profile() {
  const appThemeConsumer = useContext(ThemeAppContext)
  return (
    <>
      <Header />
      <Container maxWidth={'lg'}>
        <Grid container sx={{ width: '100%' }} spacing={4}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <CardComponent>
              <Box sx={{ minWidth: '100%' }}>
                <TitleH2>Work in progress...</TitleH2>
              </Box>
            </CardComponent>
          </Grid>
          {/*logout and toggle theme */}
          <Grid size={{ xs: 12, sm: 6 }}>
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
                <StyledButton
                  className="alert"
                  onClick={() => {
                    logoutAction()
                  }}
                >
                  Fazer logout
                </StyledButton>
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
