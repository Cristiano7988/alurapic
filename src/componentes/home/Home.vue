<template>
  <div>
    <h1>{{ titulo }}</h1>
    <input
      type="text"
      placeholder="Filtrar"
      class="filtro"
      @input="filtro = $event.target.value"
    />
    <ul class="painel-container">
      <li v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
          <minha-imagem :url="foto.url" :titulo="foto.titulo"></minha-imagem>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
  import Painel from "../shared/painel/Painel.vue";
  import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
  
  export default {
    components: {
      'meu-painel': Painel,
      'minha-imagem': ImagemResponsiva
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
