import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/home/index.vue'),
    meta: {
      auth: false,
      keepAlive: false,
      needBack: false,
      title: '首页'
    }
  },
  {
    path: '/notfound',
    name: 'Notfound',
    component: () => import(/* webpackChunkName: "Notfound" */ '../views/404/index.vue'),
    meta: {
      auth: false,
      keepAlive: false,
      needBack: false,
      title: '404'
    }
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  next()
})

// 全局解析守卫
router.beforeResolve(async (to) => {})

// 全局后置钩子
router.afterEach((to, from, failure) => {})

export default router
