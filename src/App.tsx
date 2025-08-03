import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>Login</>} />
        <Route path="/home" element={<>home</>} />
        <Route path="/leads" element={<>leads</>} />
        <Route path="/perfil" element={<>perfil</>} />
      </Routes>
    </Router>
  )
}

export default App
