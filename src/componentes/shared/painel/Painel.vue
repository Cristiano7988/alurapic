<template>
    <div class="painel">
        <h3 class="painel-titulo">
            {{ titulo }}
        </h3>
        <div class="painel-conteudo">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['titulo']
    }
</script>

<style scoped>
  *:not(h3) {
      box-shadow: 0px 0px 10px silver;
  }
  .painel {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .painel-conteudo img {
    max-width: 200px;
  }
</style>
