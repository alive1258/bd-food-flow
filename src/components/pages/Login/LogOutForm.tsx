import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'

// Logout component for user logout functionality
const Logout = () => {
  const navigate = useNavigate()
  const { setAuth } = useAuth()

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem('token')
    setAuth(null) // Clear authentication state

    navigate('/login') // Redirect to login page after logout
  }

  return (
    <button
      className=" bg-[#023e8a] cursor-pointer text-white md:ml-8 font-semibold px-4 py-2 rounded duration-500 md:static"
      onClick={handleLogout}
    >
      LogOut
    </button>
  )
}

export default Logout
