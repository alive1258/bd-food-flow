import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const PrivetRoute = ({ children }) => {
  const { auth, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return <p>Loading...</p>
  }
  if (auth) {
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
  //   if (!auth) {
  //     return <Navigate to="/login" state={{ from: location }} replace />
  //   }
}

export default PrivetRoute
