<template>
  <div class="cart" v-if="product">
    <div class="cart__img">
      <img class="cart__img-item" v-if="product.img" :src="product.img" alt="" />
    </div>
    <p v-if="product.description" class="cart__text">{{product.description}}</p>
    <div class="cart__icons">
      <div class="icon">
       <img src="../assets/icons/silver-eye.svg" alt="">
        <span>334</span>
      </div>
      <div class="icon">
        <img src="../assets/icons/start.svg" alt="" />
        <span>4</span>
      </div>
      <div class="icon">
        <img src="../assets/icons/message.svg" alt="" />
        <span>2</span>
      </div>
    </div>
    <NextButton />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  product: {}
});
</script>