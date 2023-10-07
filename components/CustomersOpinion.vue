<template>
  <div class="container">
    <div class="customers-opinion">
      <ClientComponent v-for="item in 2" :key="item" />
      <div class="document__bottom">
        <textarea
          placeholder="Вы не авторизованны. Войдите на сайт чтобы оставлять комментарии"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button class="btn">Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>