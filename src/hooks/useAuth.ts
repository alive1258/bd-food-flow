// import { useContext, useDebugValue, useEffect, useState } from 'react'
// import { AuthContext, AuthContextType } from '../context' // Assuming AuthContextType is the type of your context value

// export const useAuth = () => {
//   const { auth, setAuth } = useContext(AuthContext) as AuthContextType // Adjust AuthContextType accordingly
//   const [initialized, setInitialized] = useState(false)

//   useEffect(() => {
//     // Retrieve token from local storage
//     const token = localStorage.getItem('token')

//     // If token is present, set authentication context
//     if (token) {
//       setAuth({ authToken: token })
//     } else {
//       // If token is not present, clear authentication context
//       setAuth(null)
//     }

//     // Set initialized to true after setting authentication context
//     setInitialized(true)
//   }, [setAuth])

//   useDebugValue(
//     initialized
//       ? auth
//         ? 'User logged In'
//         : 'User logged Out'
//       : 'Initializing...'
//   )

//   return { auth, initialized, setAuth }
// }

import { useContext, useDebugValue, useEffect, useState } from 'react'
import { AuthContext, AuthContextType } from '../context'

export const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext) as AuthContextType
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    // Retrieve token from local storage
    const token = localStorage.getItem('token')

    // If token is present, set authentication context
    if (token) {
      setAuth({ authToken: token })
    } else {
      // If token is not present, clear authentication context
      setAuth(null)
    }

    // Set initialized to true after setting authentication context
    setInitialized(true)
  }, [setAuth])

  useDebugValue(
    initialized
      ? auth
        ? 'User logged In'
        : 'User logged Out'
      : 'Initializing...'
  )

  return { auth, initialized, setAuth }
}
