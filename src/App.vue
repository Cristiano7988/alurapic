<template>
  <div>
    <meu-menu :rotas="routes" />
    <div class="container">
      <transition name="pagina">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
  import { routes } from "./routes";
  import Menu from './componentes/shared/menu/Menu';
  export default {
    components: {
      'meu-menu': Menu
    },
    data() {
      return {
        routes
      }
    }
  }
</script>
<style>
  .container {
    text-align: center;
    font-family: -webkit-pictograph;
  }
  .pagina-enter, .pagina-leave-active {
      opacity: 0;
  }
  .pagina-enter-active {
      transition: opacity 1.5s;
  }
</style>