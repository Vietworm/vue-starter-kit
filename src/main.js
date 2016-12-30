import Vue from './Vue'
import App from './App'
import store from './store'
import VueRouter from 'vue-router'

// Component split lazy loading
const About = resolve => {
  // require.ensure is Webpack's special syntax for a code-split point.
  require.ensure(['./components/Aboutme.vue'], () => {
    resolve(require('./components/Aboutme.vue'))
  })
}

const Profile = resolve => require(['./components/Profile.vue'], resolve)
const Contact = resolve => require(['./components/Contact.vue'], resolve)
const Products = resolve => require(['./components/ProductList.vue'], resolve)
const NotFound = resolve => require(['./NotFound.vue'], resolve)

const router = new VueRouter({
  mode: 'history',
  root: '/',
  routes: [
    {path: '/contact', component: Contact},
    {path: '/about', component: About},
    {path: '/profile/:username', component: Profile},
    {path: '/products', component: Products},
    {path: '/', redirect: '/about'},
    {path: '*', component: NotFound}
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
