import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {CssBaseline} from "@mui/material"
import {HeadProvider} from 'react-head'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HeadProvider>
        <CssBaseline/>
      <div >
        <App />
      </div>
      </HeadProvider>
  </StrictMode>,
)
