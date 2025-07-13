import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './config'
import { CssBaseline } from '@mui/material'

const App: FC = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
