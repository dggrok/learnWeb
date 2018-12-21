import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/list.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/list',
      // name: '',
      meta: {
        title: '商品列表'
      },
      component: Home
    },
    {
      path: '/product/:id',
      meta: {
        title: '商品列表'
      },
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/product.vue')
    },
    {
      path: '/cart',
      meta: {
          title: '购物车'
      },
      component:() => import(/* webpackChunkName: "about" */ './views/cart.vue')
    },
    {
        path: '*',
        redirect: '/list'
    }
  ]
})
