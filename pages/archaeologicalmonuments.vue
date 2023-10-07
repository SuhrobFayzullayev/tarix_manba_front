<template>
  <div class="all-resurs-page parent">
    <div class="container main">
      <div class="sidebar">
        <h1 class="title3">Arxeologik yodgorliklar</h1>
        <div class="sidebar__dropdown">
          <Dropdown v-for="dr in 7" :key="dr" />
        </div>
        <!-- mobile version -->
        <button type="button" class="sidebar__mobile__btn">Saralash</button>
      </div>
      <div class="content">
        <div class="content__maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9229.275111001723!2d69.18609334874458!3d41.26294124513024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89f442cd08c3%3A0x35b1ac4cfb69304d!2z0KfQuNC70LDQvdC30LDRgC0xOSwg0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1694973602715!5m2!1sru!2s"
            width="100%"
            height="309"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="content__items">
          <Product v-for="pr in 6" :key="pr" isHeading url="/api/popularBuilding" />
        </div>
        <Pagination />
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
const openList = ref(false);
const value = ref(false);
</script>
  
  <style lang="scss">
</style>