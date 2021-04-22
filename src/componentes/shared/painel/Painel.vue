<template>
    <div class="painel">
        <h3 class="painel-titulo" @dblclick="visivel = !visivel">
            {{ titulo }}
        </h3>
        <div class="painel-conteudo" v-show="visivel">
            <slot></slot>
        </div>
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
  .painel-conteudo img {
    width: 100%
  }
</style>
