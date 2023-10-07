<template>
  <div>
    <section class="banner">
      <div class="container">
        <Swiper
          class="swiper"
          :modules="modules"
          :loop="true"
          :slidesPerView="1"
          :spaceBetween="10"
          :navigation="true"
          :centeredSlides="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
        >
          <SwiperSlide class="swiper-slide" v-for="(slide, i) in 3" :key="i">
            <div class="img">
              <img src="../assets/images/uzbtarixi.png" alt="" />
            </div>
            <div class="text">
              <h1>O'zbekiston tarixi</h1>
              <p>23.02.2022</p>
              <button id="banner-btn">Batafsil</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const modules = [Navigation, Autoplay];
</script>

<style lang="scss" scoped>
</style>