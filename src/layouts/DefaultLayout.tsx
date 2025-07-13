import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { DefaultFooter, DefaultHeader } from 'src/components'
import { ROUTE_PATHS } from 'src/config/Routes/routes'

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()

  const isHome = location.pathname === ROUTE_PATHS.HOME

  return (
    <Box display='flex' flexDirection='column' minHeight='100vh'>
      <DefaultHeader />
      <Box component='main' flex={1}>
        {children}
      </Box>
      <DefaultFooter hasDivider={!isHome} />
    </Box>
  )
}

export default DefaultLayout
