import Vue from 'vue'
import Router from 'vue-router'
import IssueList from '@/views/IssueList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/top',
      name: 'IssueList',
      component: IssueList
    },
    { path: '/', redirect: '/top' }
  ]
})
