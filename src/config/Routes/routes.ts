import DefaultLayout from 'src/layouts/DefaultLayout'
import NotFoundLayout from 'src/layouts/NotFoundLayout'
import { HomePage, NotFoundPage } from 'src/pages'

export const ROUTE_PATHS = {
  HOME: '/'
}

export const guestOnlyPaths = []

export const ROUTES = [
  {
    path: ROUTE_PATHS.HOME,
    element: HomePage,
    layout: DefaultLayout,
    isProtected: false
  },
  {
    path: '*',
    element: NotFoundPage,
    layout: NotFoundLayout,
    isProtected: false
  }
]
