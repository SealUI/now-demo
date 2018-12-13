export default [
  {
    path: '/demo',
    name: 'Demo',
    meta: {

    },
    component: () => import(/* webpackChunkName: "demo" */ '@/views/demo/index')
  }
]
