<template>
  <div class="video">
    <h1 class="title2">
      <slot></slot>
    </h1>
    <div class="video__content">
      <video :controls="controls" width="100%" height="100%">
        <source src="/mov.mp4" type="video/mp4" />
      </video>
      <div class="play-button" v-show="!controls">
        <div class="play-button__item" @click="playVideo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <rect width="50" height="50" fill="white" />
            <path
              d="M34.8633 25.8657C35.5299 25.4808 35.5299 24.5185 34.8633 24.1336L20.8178 16.0245C20.1512 15.6396 19.3178 16.1207 19.3178 16.8905L19.3178 33.1088C19.3178 33.8786 20.1512 34.3597 20.8178 33.9748L34.8633 25.8657Z"
              fill="#A20025"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const controls = ref(false);

function playVideo() {
  controls.value = true;
}
</script>

<style lang="scss" scoped>
</style>