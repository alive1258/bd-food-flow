import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './providers/AuthProvider'
import { store } from './redux/store'
import router from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <div className="bg-[#ffffff]">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
)
