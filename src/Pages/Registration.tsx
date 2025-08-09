import { Box, Grid, Container } from '@mui/material'
import { LoginImage, Logo } from '@/components'
import { TitleH1, StyledP, StyledUl } from '@/styles'

function Registration() {
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
                padding: '0 2.4rem',
              }}
            >
              <TitleH1 typographieProps={{}}>Faça seu cadastro</TitleH1>
              <StyledP typographieProps={{}}>
                Primeiro, diga-nos quem você é.
              </StyledP>
            </Box>
            <Box
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: '600px',
                padding: '0 2.4rem',
                marginBottom: '2rem',
              }}
            >
              <StyledP typographieProps={{}}>
                Sua senha deve ter:Sua senha deve ter:
              </StyledP>
              <StyledUl typographieProps={{}}>
                <li>Entre 8 e 16 caracteres;</li>
                <li>Pelo menos uma letra maiúscula;</li>
                <li>Pelo menos um caractere especial.</li>
                <li>Pelo menos um número</li>
              </StyledUl>
            </Box>
            <Container maxWidth={'sm'}></Container>
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

export default Registration
