<template>
  <div class="content-product">
    <div class="container">
      <h1>Содержание</h1>
      <ul class="content-product__list">
        <li v-for="(li, i) in 3" :key="i">{{i+1}}. Sed ut perspiciatis</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>