import Vue from 'vue'

import App from './App.vue'
import store from './store'
// import router from './router'

import '@/style/main.scss'
import '@/assets/main.css'
import { createHead, HeadVuePlugin } from '@vueuse/head'
// Vue Router with auto imports
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import VueRouter from 'vue-router'
const routes = setupLayouts(generatedRoutes)
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes,
  base: import.meta.env.BASE_URL
})

// @vueuse/head
const head = createHead()
Vue.use(HeadVuePlugin, head)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
