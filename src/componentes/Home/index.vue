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
          <router-link :to="{ name: 'altera', params: { id: foto._id } }">
            <Botao
              tipo="buttom"
              rotulo="ALTERAR"
            />
          </router-link>
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
  import FotoService from "../../domain/Foto/FotoService";

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
      this.service = new FotoService(this.$resource);
      
      this.service
        .lista()
        .then(fotos=>this.fotos = fotos, err=> this.mensagem = err.message)
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
        return this.service
          .apaga(foto._id)
          .then(
            () => {
              const indice = this.fotos.indexOf(foto);
              this.fotos.splice(indice, 1);
              this.mensagem = 'Foto removida com sucesso!';
            }, err => {
              this.mensagem = err.message;
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
