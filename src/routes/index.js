import { Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'

const routes = [
   {
      path: '/',
      element: <HomePage />,
   },
   {
      path: '/*',
      element: <NotFoundPage />,
   },
]

const renderRoutes = routes =>
   routes.map(r => <Route path={r.path} element={r.element} key={r.path} />)

export default renderRoutes(routes)
