<template>
  <div class="news-item">
    <div class="text" v-if="item">
      <p v-if="item.title">{{ item.title }}</p>
      <div v-if="item.created_at" class="date">
        {{ item.created_at.slice(0, 10) }}
      </div>
      <NextButton @click="$emit('next')"></NextButton>
    </div>
    <div class="img">
      <img v-if="item.image" :src="baseURL + imgStoreUrl + item.image" alt="" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { imgStoreUrl, baseURL } from "@/constants/index";
const props = defineProps(["item"]);
</script>
