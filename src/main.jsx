import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
// import "aos/dist/aos.css";

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }}
        />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)