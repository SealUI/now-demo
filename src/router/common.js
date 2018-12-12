// import Home from '@/views/Home.vue'
export default [
  // 默认页面
  {
    path: '/',
    redirect: '/home',
    hidden: true
  },
  {
    path: '*',
    name: 'lost',
    component: () => import('@/views/404')
  }
]
