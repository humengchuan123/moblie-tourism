import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home'
import City from '@/components/city/city'
import Detail from '@/components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        title: 'Home'
      }
    },{
      path: '/city',
      name: 'City',
      component: City,
      meta:{
        title: 'City'
      }
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      meta:{
        title: 'Detail'
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
