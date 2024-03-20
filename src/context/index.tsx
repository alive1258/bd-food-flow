import { createContext } from 'react'

// // Define the type of your context value
// interface AuthContextType {
//   // Define the structure of your context value
//   // For example:
//   user: string | null
//   login: () => void
//   logout: () => void
// }

// // Create the context with the specified type
// const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export { AuthContext, AuthContextType }

export interface AuthContextType {
  authToken?: string | null // Define according to your authentication token structure
}

export interface AuthContextType {
  auth: { authToken: string } | null // Define the structure of auth
  setAuth: React.Dispatch<React.SetStateAction<{ authToken: string } | null>> // Define the structure of setAuth
}

export const AuthContext = createContext<AuthContextType | null>(null)
