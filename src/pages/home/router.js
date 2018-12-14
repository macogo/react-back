import asyncComponent from '@/global/AsyncComponent'

export default
  [
    {
      path: '/',
      exact: true,
      component: asyncComponent(() => import('./home'))
    }
  ]
