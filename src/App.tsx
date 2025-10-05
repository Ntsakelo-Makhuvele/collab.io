
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import Login from './views/Auth/Login'
import Home from './views/Home'


function App() {
 
  return (
    <AuthProvider>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route element={<ProtectedRoute />}>
      <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      </Routes> 
    </AuthProvider>
  )
}

export default App
