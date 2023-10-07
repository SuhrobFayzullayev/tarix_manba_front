<template>
    <div class="all-resurs-page parent">
      <div class="container main">
        <div class="sidebar">
            <h1 class="title3">Arxiv hujjatlar</h1>
            <div class="sidebar__dropdown">
                <Dropdown v-for="dr in 7" :key="dr"/>
            </div>
        </div>
        <div class="content">
          <div class="content__items">
            <Product v-for="pr in 6" :key="pr" />
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