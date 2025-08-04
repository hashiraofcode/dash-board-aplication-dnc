import styled from 'styled-components'

const LoginArea = styled.div`
  background: #777;
`
const LoginImage = styled.div`
  background-image: url(/background-login-area.svg);
  min-height: 100dvh;
  background-size: cover;
  max-width: 50%;
  background-repeat: no-repeat;
`

function Login() {
  return (
    <>
      <LoginArea>
        <h1>Div-dnc</h1>
      </LoginArea>
      <LoginImage />
    </>
  )
}

export default Login
