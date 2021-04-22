<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/cadastro">Cadastro</router-link></li>
      </ul>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
</template>
<script></script>
<style>
  .container {
    text-align: center;
    font-family: -webkit-pictograph;
  }
</style>