import Vue from './Vue'
import App from './App'
import About from './components/Aboutme'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Products from './components/ProductList'
import NotFoundComponent from './NotFound'
import store from './store'
import VueRouter from 'vue-router'

const router = new VueRouter({
  mode: 'history',
  root: '/',
  routes: [
    {path: '/contact', component: Contact},
    {path: '/about', component: About},
    {path: '/profile/:username', component: Profile},
    {path: '/products', component: Products},
    {path: '/', redirect: '/about'},
    {path: '*', component: NotFoundComponent}
  ]
})

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})
