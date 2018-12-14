import asyncComponent from '@/global/AsyncComponent'

export default [
  {
    path: '/list',
    component: asyncComponent(() => import('./list'))
  }]

