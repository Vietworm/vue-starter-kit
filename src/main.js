import Vue from 'vue'
import App from './App'
import About from './components/Aboutme'
import Profile from './components/Profile'
import Contact from './Contact'
import NotFoundComponent from './NotFoundComponent'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

const router = new VueRouter({
  history: true,
  root: '/',
  routes: [
    {path: '/contact', component: Contact},
    {path: '/about', component: About},
    {path: '/profile/:username', component: Profile},
    {path: '/', redirect: '/about'},
    {path: '*', component: NotFoundComponent}
  ]
})

Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
