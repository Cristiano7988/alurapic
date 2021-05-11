<template>
    <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">{{ foto.titulo }}</h2>

    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <!-- V-MODEL executa: -->
        <!-- @input="foto.titulo = $event.target.value"
        :value="foto.titulo" -->
        <input
            id="titulo"
            autocomplete="off"
            v-model="foto.titulo"
        />
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input
            id="url"
            autocomplete="off"
            v-model.lazy="foto.url"
        />
        <ImagemResponsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo" />
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea
            id="descricao"
            autocomplete="off"
            v-model="foto.descricao"
        />
      </div>

      <div class="centralizado">
        <Botao rotulo="GRAVAR" tipo="submit"/>
        <router-link to="/"><Botao rotulo="VOLTAR" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImagemResponsiva from '../shared/ImagemResponsiva'
import Botao from '../shared/Botao';
import Foto from '../../domain/Foto';
import FotoService from '../../domain/Foto/FotoService';

export default {
  components: { ImagemResponsiva, Botao },
  data () {
    return {
      foto: new Foto()
    }
  },
  created () {
    this.service = new FotoService(this.$resource);
  },
  methods: {
    grava() {
      return this.service
        .cadastra(this.foto)
        .then(
            ()=> this.foto = new Foto(),
            (err) => console.log(err)
        )
    }
  }
}

</script>

<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

</style>