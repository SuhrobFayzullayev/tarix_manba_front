<template>
  <div class="pagination">
    <div class="prev disabled">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14 7L9 12L14 17"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <ul class="page">
      <li class="page__item">1</li>
      <li class="page__item active">2</li>
      <li class="page__item">3</li>
    </ul>
    <div class="next">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
      >
        <path
          d="M1 1L6 6L1 11"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>