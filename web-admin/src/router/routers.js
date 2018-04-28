import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'
import * as types from '../store/types'
import Index from '../components/index/index.vue'
import Note from '../components/note/index.vue'
import Catalog from '../components/catalog/index.vue'
import Login from '../components/user/login.vue'
import Register from '../components/user/register.vue'

Vue.use(VueRouter)

const routers = [
  {
    path: '/',
    name: '/',
    meta: {
      requireAuth: true
    },
    component: Index
  },
  // {
  //   path: '/index',
  //   name: 'index',
  //   meta: {
  //     requireAuth: true
  //   },
  //   component: Index
  // },
  {
    path: '/note',
    name: 'note',
    meta: {
      requireAuth: true
    },
    component: Note
  },
  {
    path: '/catalog',
    name: 'catalog',
    meta: {
      requireAuth: true
    },
    component: Catalog
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

export default routers
