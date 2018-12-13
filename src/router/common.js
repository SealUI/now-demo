// import Home from '@/views/Home.vue'
export default [
  // 默认页面
  {
    path: '/',
    redirect: '/emojis',
    hidden: true
  },
  {
    path: '*',
    name: 'lost',
    component: () => import('@/views/404')
  }
]
