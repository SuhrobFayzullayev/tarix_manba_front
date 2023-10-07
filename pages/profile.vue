<template>
  <div class="profile">
    <ul class="profile__sidebar">
      <li>
        <NuxtLink to="/profile" class="active">
            <img src="../assets/icons/enterance.svg" alt="">
            <span>Информация для входа</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/profile/favorites">
            <img src="../assets/icons/heart.svg" alt="">
            <span>Избранное
              <div class="count">2</div>
            </span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">
            <img src="../assets/icons/exit.svg" alt="">
            <span>Выход</span>
        </NuxtLink>
      </li>
    </ul>
    <NuxtPage page-key="child" />
    <!-- <NuxtChild page-key="child" /> -->
  </div>
</template>
  
  <script lang="ts" setup>
</script>

<style lang="scss">

</style>