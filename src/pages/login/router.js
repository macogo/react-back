import asyncComponent from '@/global/AsyncComponent'

export default
  [
    {
      path: '/login',
      exact: true,
      component: asyncComponent(() => import('./login'))
    }
  ]
