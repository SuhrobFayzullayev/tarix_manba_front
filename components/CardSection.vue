<template>
  <div class="archaeological-monument">
    <div class="container">
      <div class="archaeological-monument__header">
        <h1 class="title"><slot></slot></h1>
        <NuxtLink
          to="/archaeologicalmonuments"
          tag="button"
          class="btn-transparent"
          >Barchasi</NuxtLink
        >
      </div>
      <div class="swiper-container">
        <Swiper
          :modules="modules2"
          class="swiper"
          :breakpoints="breakpoints"
          :slidesPerView="'auto'"
          :navigation="true"
          v-if="products"
        >
          <SwiperSlide
            class="swiper-slide"
            v-for="(product, i) in products"
            :key="i"
          >
            <div data-aos="zoom-in" :data-aos-delay="`${i + 200}`">
              <CartComponent
                v-if="product"
                :product="product"
                class="cart"
              ></CartComponent>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {  Navigation } from "swiper/modules";
import { ref } from "vue";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
const modules2 = [Navigation];
// Products Swiper Slide
let breakpoints = {
  320: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  800: {
    slidesPerView: 3,
    spaceBetween: 10,
  },

  1300: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};
import { defineProps } from "vue";
defineProps({
  products: [],
});
</script>

<style lang="scss" scoped>
</style>