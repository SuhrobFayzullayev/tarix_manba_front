<template>
  <div class="video images">
    <h1 class="title2">
      <slot></slot>
    </h1>
    <div class="images__content swiper-container">
      <swiper 
      :navigation="true" 
      :modules="modules" 
      class="mySwiper swiper">
        <swiper-slide class="swiper-slide" v-for="(image, i) in 4" :key="i">
          <img :src="`https://picsum.photos/1240/620?random=${i}`" alt=""
        /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>


<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {  Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const modules = [Navigation];
</script>