import { Box, Grid, Container } from '@mui/material'
import { LoginImage, FormApp, Logo } from '@/components/index.ts'
import { TitleH1, StyledP } from '@/styles/index.ts'

function Login() {
  return (
    <>
      <Box sx={{ minHeight: '100dvh', width: '100%' }}>
        <Grid container sx={{ width: '100%', minHeight: '100dvh' }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100dvh',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: '600px',
                marginBottom: '2rem',
                padding: '0 2.4rem',
              }}
            >
              <Logo width={9} height={5} />
            </Box>
            <Box
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: '600px',
                marginBottom: '2rem',
                padding: '0 2.4rem',
              }}
            >
              <TitleH1 typographieProps={{}}>Bem-vindo</TitleH1>
              <StyledP typographieProps={{}}>
                Digite sua senha e email para logar
              </StyledP>
            </Box>
            <Container maxWidth={'sm'}>
              <FormApp
                inputs={[
                  {
                    type: 'text',
                    placeholder: 'Insira seu E-mail',
                  },
                  { type: 'password', placeholder: 'Insira a sua senha' },
                ]}
                buttons={[{ type: 'button', className: 'primary' }]}
                mensage={{ cod: 'error' }}
                textButton={'login'}
              />
            </Container>
          </Grid>
          <Grid
            size={6}
            sx={{
              minHeight: '100dvh',
              display: { xs: 'none', md: 'block', lg: 'block', xl: 'block' },
            }}
          >
            <LoginImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login
