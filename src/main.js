import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource' // modulo para requisições ajax
import VueRouter from 'vue-router'
import { routes } from './routes'
import './directives/Transform'
import VeeValidate from 'vee-validate';
import pt_BR from './pt_BR';

Vue.use(VueResource) //registra o módulo importado
Vue.http.options.root = 'http://localhost:3000'
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: pt_BR
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
