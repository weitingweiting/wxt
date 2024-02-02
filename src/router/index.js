import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home', name: 'root' },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/home/index.vue'),
    meta: {
      auth: false,
      keepAlive: false,
      needBack: false,
      title: '首页'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "Products" */ '@/views/products/index.vue'),
    meta: {
      auth: false,
      keepAlive: false,
      needBack: false,
      title: '产品中心'
    }
  },
  {
    path: '/product-detail',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "Products" */ '@/views/product-detail/index.vue'),
    meta: {
      auth: false,
      keepAlive: false,
      needBack: false,
      title: '产品详情'
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'Notfound',
    component: () => import(/* webpackChunkName: "Notfound" */ '@/views/404/index.vue'),
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
  // console.log(to, from)
  next()
})

// 全局解析守卫
router.beforeResolve(async (to) => {})

// 全局后置钩子
router.afterEach((to, from, failure) => {})

export default router
