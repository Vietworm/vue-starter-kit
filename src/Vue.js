import Vue from 'vue'
import VueResource from 'vue-resource'
import VueLazyLoad from 'vue-lazyload'

// add filters
import filter from './filters'
filter(Vue)

Vue.use(VueResource)
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  attempt: 1
})

export default Vue
