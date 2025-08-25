import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom'
import { Login, Registration, Home, Profile, Leads } from './Pages/index.ts'
import Cookies from 'js-cookie'

function App() {
  const ProtectionRoutes = () => {
    if (!Cookies.get('Authorization')) {
      alert('Insira suas credenciais para acessar a plataforma')
      return <Navigate to="/" replace />
    }
    return <Outlet />
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route element={<ProtectionRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/clientes" element={<Leads />} />
          <Route path="/perfil" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
