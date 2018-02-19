import Vue from 'vue'
import Router from 'vue-router'
import THEME from '@/components/THEMEContainer'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'THEME',
      component: THEME
    }
  ]
})
