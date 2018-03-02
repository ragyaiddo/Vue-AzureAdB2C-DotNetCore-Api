import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'
import Category from '@/components/Category'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    { path: '/login', name: 'Login', component: Login },
    { path: '/category/:id', name: 'category', component: Category },
    { path: '/', name: 'Home', component: Home },
    { path: '*', component: NotFound }
  ]
})
