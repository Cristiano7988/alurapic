<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos">
        <img
          :src="foto.url"
          :alt="foto.title"
          :title="foto.title"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Alurapic",
      fotos: [
        {
          url: "https://www.petz.com.br/blog/wp-content/uploads/2021/03/piercing-para-cachorro-2.jpg",
          title: "Cachorro"
        },
        {
          url: "https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png",
          title: "Cachorro triste"
        }
      ]
    }
  }
}
</script>

<style>
</style>
