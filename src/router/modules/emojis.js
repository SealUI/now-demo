export default [
  {
    path: '/emojis',
    name: 'Emojis',
    meta: {

    },
    component: () => import(/* webpackChunkName: "emojis" */ '@/views/emojis/index')
  }
]
