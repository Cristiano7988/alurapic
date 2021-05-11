<template>
  <div>
    <h1>{{ titulo }}</h1>
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    <input
      type="text"
      placeholder="Filtrar"
      class="filtro"
      @input="filtro = $event.target.value"
    />
    <ul class="painel-container">
      <li v-for="(foto, index) of fotosComFiltro" :key="index">
        <Painel :titulo="foto.titulo">
          <ImagemResponsiva :url="foto.url" :titulo="foto.titulo" />
          <Botao
            tipo="button"
            rotulo="REMOVER"
            @botaoAtivado="remove(foto)"
            :confirmacao="true"
            estilo="perigo"
          />
        </Painel>
      </li>
    </ul>
  </div>
</template>

<script>
  import Painel from "../shared/Painel";
  import ImagemResponsiva from "../shared/ImagemResponsiva";
  import Botao from "../shared/Botao";

  export default {
    components: { Painel, ImagemResponsiva, Botao },
    data() {
      return {
        titulo: "Alurapic",
        fotos: [],
        filtro: '',
        mensagem: ''
      }
    },
    created() {
      this.$http.get("http://localhost:3000/v1/fotos")
        .then(r=>r.json())
        .then(fotos=>this.fotos = fotos, err=>console.log(err))
    },
    computed: {
      fotosComFiltro() {
        const exp = new RegExp(this.filtro.trim(), 'i');
        
        return this.filtro
          ? this.fotos.filter(foto=> exp.test(foto.titulo))
          : this.fotos;
        
      }
    },
    methods: {
      remove(foto) {
        return this.$http
          .delete(`http://localhost:3000/v1/fotos/${foto._id}`)
          .then(
            () => this.mensagem = 'Foto removida com sucesso!',
            err => {
              console.log(err)
              this.mensagem = 'Não foi possível remover a foto'
            }
          )
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
