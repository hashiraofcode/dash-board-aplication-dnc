import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Registration, Home, Profile, Leads } from './Pages/index.ts'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/clientes" element={<Leads />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
