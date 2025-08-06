import { Box, Grid, Container } from '@mui/material'
import { LoginImage } from '@/components'

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
            }}
          >
            <Container maxWidth={'sm'}>
              <h1>Cadastro</h1>
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

export default Registration
