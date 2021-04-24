import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import start from '@/components/start'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/start',
      name: 'start',
      component: start
    }
  ]
})
 //   const router = new Router({
 //   mode: 'history',
 //   base: process.env.BASE_URL,
 //   routes
 // })

