import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource' // modulo para requisições ajax
import VueRouter from 'vue-router'
import { routes } from './routes'
import './directives/Transform'

Vue.use(VueResource) //registra o módulo importado
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
