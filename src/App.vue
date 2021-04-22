<template>
  <div>
    <h1>{{ titulo }}</h1>
    <img
      :src="foto.url"
      :alt="foto.title"
      :title="foto.title"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Alurapic",
      foto: {
        url: "https://www.petz.com.br/blog/wp-content/uploads/2021/03/piercing-para-cachorro-2.jpg",
        title: "Cachorro"
      }
    }
  }
}
</script>

<style>
</style>
