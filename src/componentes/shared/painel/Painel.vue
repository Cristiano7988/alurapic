<template>
    <div class="painel">
        <h3 class="painel-titulo" @dblclick="visivel = !visivel">
            {{ titulo }}
        </h3>
        <transition name="painel-fade">
            <div class="painel-conteudo" v-show="visivel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: ['titulo'],
        data() {
            return {
                visivel: true
            }
        }
    }
</script>

<style scoped>
  *:not(h3) {
      box-shadow: 0px 0px 10px silver;
  }
  .painel {
    display: flex;
    flex-direction: column;
  }
  .painel {
    width: 200px;
  }
  .painel-titulo {
      cursor: pointer;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }
  .painel-fade-enter, .painel-fade-leave-active {
      opacity: 0;
  }
  .painel-fade-enter-active, .painel-fade-leave-active {
      transition: opacity .5s;
  }
</style>
