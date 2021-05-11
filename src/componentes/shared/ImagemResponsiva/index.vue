<template>
    <div class="container-img">
        <img
            v-meu-transform:rotate.animate.reverse="1.5"
            class="image"
            :src="url"
            :alt="titulo"
            :title="titulo"
        />
    </div>
</template>

<script>
    export default {
        props: ['url', 'titulo']
    }
</script>

<style scoped>
    .container-img {
        overflow: hidden;
    }
    .image {
        width: 100%;
    }
</style>