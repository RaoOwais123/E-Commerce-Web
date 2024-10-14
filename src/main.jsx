import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartContextProvider from './Components/Context/CartContext.jsx'
import { NextUIProvider } from '@nextui-org/react'
import AuthContextProvider from './Components/Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <AuthContextProvider>
    <CartContextProvider>
   <App />
   </CartContextProvider>
   </AuthContextProvider>
    </NextUIProvider>
   
  </StrictMode>,
)
