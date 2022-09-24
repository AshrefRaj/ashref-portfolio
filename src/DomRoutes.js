import Loadable from 'react-loadable'
import Loader from './client/components/Loader'

const Calculator = Loadable({
  loader: () => import('./client/pages/Calculator'),
  loading: Loader,
})

export const PageRoutes = [
  {
    path: '/calculator',
    page: Calculator,
  },
  {
    path: '/loader',
    page: Loader,
  },
]
