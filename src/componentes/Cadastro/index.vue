<template>
    <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">
      <span v-if="this.id">Alterando</span>
      <span v-else>Incluindo</span>
      <span>{{ foto.titulo }}</span>
    </h2>

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
            name="titulo"
            data-vv-as="título"
            v-validate
            data-vv-rules="required|min:3|max:30"
        />
        <span class="erro" v-show="errors.has('titulo')">{{ errors.first('titulo') }}</span>
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input
            id="url"
            autocomplete="off"
            v-model.lazy="foto.url"
            name="url"
            v-validate
            data-vv-rules="required"
        />
        <span class="erro" v-show="errors.has('url')">{{ errors.first('url') }}</span>
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
        <router-link :to="{ name: 'home' }"><Botao rotulo="VOLTAR" tipo="button"/></router-link>
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
      foto: new Foto(),
      id: this.$route.params.id
    }
  },
  created () {
    this.service = new FotoService(this.$resource);
    if(this.id) {
      this.service
        .busca(this.id)
        .then(foto=> this.foto = foto)
    }
  },
  methods: {
    grava() {
      this.$validator
        .validateAll()
        .then(success=>{
          if(success) {

            this.service
              .cadastra(this.foto)
              .then(
                  ()=> {
                    if(this.id) this.$router.push({ name: 'home' })
                    this.foto = new Foto()
                  },
                  (err) => console.log(err)
              )

          }
        });
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

  .erro {
    color: red;
  }

</style>