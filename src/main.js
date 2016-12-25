import Vue from 'vue'
import App from './App'
import About from './components/Aboutme'
import Profile from './components/Profile'
import Contact from './Contact'
import Products from './components/ProductList'
import NotFoundComponent from './NotFoundComponent'
import store from './store'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueLazyLoad from 'vue-lazyload'
import { currency } from './filters/currency'

const router = new VueRouter({
  history: true,
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

Vue.config.debug = true
Vue.filter('currency', currency)

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})
