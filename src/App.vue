<template>
  <div class="container">
    <h1>{{ titulo }}</h1>
    <input
      type="text"
      placeholder="Filtrar"
      class="filtro"
      v-on:input="filtro = $event.target.value"
    />
    <ul class="painel-container">
      <li v-for="foto of fotosComFiltro">
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
        fotos: [],
        filtro: ''
      }
    },
    created() {
      this.$http.get("http://localhost:3000/v1/fotos")
        .then(r=>r.json())
        .then(fotos=>this.fotos = fotos, err=>console.log(err))
    },
    computed: {
      fotosComFiltro() {
        if(this.filtro) {
          const exp = new RegExp(this.filtro.trim(), 'i');
          return this.fotos.filter(foto=> exp.test(foto.titulo));
        } else {
          return this.fotos;
        }
      }
    }
  }
</script>

<style>
  .container {
    text-align: center;
    font-family: -webkit-pictograph;
  }
  .filtro {
    padding: 7px;
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
    display: table;
    border: 1px solid gray;
    border-radius: 5px;
  }
</style>
