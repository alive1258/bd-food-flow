// import { ReactNode, useState } from 'react'
// import { AuthContext } from '../context'

// interface AuthProviderProps {
//   children: ReactNode
// }

// const AuthProvider = ({ children }: AuthProviderProps) => {
//   const [auth, setAuth] = useState({})

//   return (
//     <AuthContext.Provider value={{ auth, setAuth }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthProvider

import { ReactNode, useState } from 'react'
import { AuthContext, AuthContextType } from '../context'

interface AuthProviderProps {
  children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<AuthContextType>({
    auth: null, // Setting auth to null initially
    setAuth: () => {},
  })

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
