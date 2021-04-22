<template>
  <div class="container">
    <h1>{{ titulo }}</h1>
    <ul class="painel-container">
      <li v-for="foto of fotos">
        <div class="painel">
          <div class="painel-titulo">
            {{ foto.titulo }}
          </div>
          <div class="painel-conteudo">
            <img
              :src="foto.url"
              :alt="foto.title"
              :title="foto.title"
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
  .painel {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .painel-conteudo img {
    max-width: 200px;
  }
</style>
