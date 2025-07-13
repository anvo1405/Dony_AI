import { Navigate } from 'react-router-dom'
import { useAuth } from 'src/hooks'
import { ROUTE_PATHS } from './routes'

interface PrivateRouteProps {
  children: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate
      to={
        // ROUTE_PATHS.LOGIN !!!
        ROUTE_PATHS.HOME
      }
    />
  )
}

export default PrivateRoute
