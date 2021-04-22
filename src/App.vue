<template>
  <div class="container">
    <h1>{{ titulo }}</h1>
    <ul class="painel-container">
      <li v-for="foto of fotos">
        <meu-painel :titulo="foto.titulo">
          <img
            :src="foto.url"
            :alt="foto.titulo"
            :title="foto.titulo"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
  import Painel from "./componentes/shared/painel/Painel.vue";
  
  export default {
    components: {
      'meu-painel': Painel
    },
    data() {
      return {
        titulo: "Alurapic",
        fotos: []
      }
    },
    created() {
      this.$http.get("http://localhost:3000/v1/fotos")
        .then(r=>r.json())
        .then(fotos=>this.fotos = fotos, err=>console.log(err))
    }
  }
</script>

<style>
  .container {
    text-align: center;
    font-family: -webkit-pictograph;
  }
  .painel-container {
    display: flex;
    list-style: none;
    flex-flow: wrap;
    justify-content: center;
    padding: unset;
  }
  .painel-container li {
    margin: 5px;
    display: flex;
    border: 1px solid gray;
    border-radius: 5px;
  }
</style>
