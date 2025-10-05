import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import Login from './views/Auth/Login'


function App() {
 
  return (
    <AuthProvider>
      <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route element={<ProtectedRoute />}>
      <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      </Routes> 
    </AuthProvider>
  )
}

export default App
