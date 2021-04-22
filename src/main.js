import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource' // modulo para requisições ajax

Vue.use(VueResource) //registra o módulo importado

new Vue({
  el: '#app',
  render: h => h(App)
})
