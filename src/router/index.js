import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './modules' // 引入业务逻辑模块
import CommonRouters from './common' // 引入通用模块
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: RouterConfig.concat(CommonRouters)
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {

})

export default router
