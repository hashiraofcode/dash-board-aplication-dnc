//HOOKS
import { useAxios, useFormValidation } from '@/hooks'
import { useNavigate } from 'react-router-dom'
import { useEffect, type ChangeEvent } from 'react'

//TYPES
import type { LoginData, LoginPostData, mensage, DecodedJwt } from '@/types'

// COMPONENTS
import { Box, Grid, Container } from '@mui/material'
import { LoginImage, FormApp, Logo } from '@/components/index.ts'
import { TitleH1, StyledP } from '@/styles/index.ts'

// UTILS
import { jwtExpCalcConverter } from '@/utils/jwtDecodeExpCalc'

// login
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

function Login() {
  // Hook de redirecionamento
  const navigate = useNavigate()
  // inputs do form da página
  const inputs = [
    { type: 'email', placeHolder: 'Email' },
    { type: 'password', placeHolder: 'Senha' },
  ]
  // em caso de dúvida no fluxo de login, olhar a estrutura em hooks/
  const { error, data, loading, postData } = useAxios<LoginData, LoginPostData>(
    'login',
  )
  const { formIsValid, handleChange, form } = useFormValidation(inputs)

  // retorna uma menssagem em caso de erro Login ou senha errados ou impossibilidade de válidar a informção com o Back
  const handlerMesage = (): mensage => {
    if (!error) return { content: '', cod: 'sucsses' }

    switch (error) {
      case 401:
        return {
          cod: 'error',
          content: 'E-mail e/ou Senha inválidos. Tente novamente.',
        }
        break
      default:
        return {
          cod: 'error',
          content: 'Erro: Por Favor entre em contato com nosso suporte',
        }
    }
  }

  //   envia as informações com a requisição
  const handleSubmite = async () => {
    await postData({
      email: String(form[0]),
      password: String(form[1]),
    })
  }
  useEffect(() => {
    if (data?.jwt_token) {
      const decoded: DecodedJwt = jwtDecode(data?.jwt_token)
      Cookies.set('Authorization', data?.jwt_token, {
        expires: jwtExpCalcConverter(decoded?.exp),
        secure: true,
      })
    }
    if (Cookies.get('Authorization')) navigate('/home')
  }, [data, navigate])

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
              <TitleH1>Bem-vindo</TitleH1>
              <StyledP>Digite sua senha e email para logar</StyledP>
            </Box>
            <Container maxWidth={'sm'}>
              <FormApp
                inputs={inputs.map((input, index) => {
                  return {
                    type: input.type,
                    placeholder: input.placeHolder,
                    key: index,
                    value: form[index] || '',
                    onChange: (e: ChangeEvent<HTMLInputElement>): void =>
                      handleChange(index, e.target.value),
                  }
                })}
                buttons={[
                  {
                    type: 'button',
                    className: 'primary',
                    disabled: !formIsValid || loading,
                    onClick: (): Promise<void> => handleSubmite(),
                  },
                ]}
                mensage={error ? handlerMesage() : undefined}
                textButton={loading ? 'Aguarde...' : 'Login'}
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
