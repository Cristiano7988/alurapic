<template>
  <div>
    <nav>
      <ul>
        <li v-for="route in routes">
          <router-link :to="route.path">{{ route.titulo }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="container">
      <transition name="pagina">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
  import { routes } from "./routes";
  export default {
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