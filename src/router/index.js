import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import start from '@/components/start'
import admin from '@/components/admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{index:0},
      component: home
    },
    {
      path: '/about',
      name: 'about',
      meta:{index:1},
      component: about
    },
    {
      path: '/start',
      name: 'start',
      meta:{index:2},
      component: start
    },
    {
      path: '/admin',
      name: 'admin',
      meta:{index:2},
      component: admin
    }
  ]
})
 //   const router = new Router({
 //   mode: 'history',
 //   base: process.env.BASE_URL,
 //   routes
 // })

