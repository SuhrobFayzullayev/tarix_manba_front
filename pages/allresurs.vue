<template>
  <div class="all-resurs-page parent">
    <div class="container main">
      <div class="sidebar">
        <div class="all-resurs-page__dropdown">
          <h1 class="dropdown-item" v-for="item in 3" :key="item">
            <div
              class="cat"
              @click="openList = !openList"
              :class="{ active: openList }"
            >
              Manbalar
              <div class="sel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                >
                  <path
                    d="M11 1L6 6L1 1"
                    :stroke="openList ? '#A20025' : '#313131'"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <ul class="dropdown-list" v-show="openList">
              <li class="dropdown-list__item" v-for="li in 4" :key="li">
                <span :class="{ active: value }">Arxeologik yodgorliklar </span>
                <input type="checkbox" v-model="value" />
              </li>
            </ul>
          </h1>
          <button class="btn filter-btn">Filtr</button>
        </div>
        <ul class="all-resurs-page__sidebar-num-datas">
          <li v-for="list in 5" :key="list">Arxeologik yodgorliklar (23)</li>
        </ul>
      </div>
      <div class="all-resurs-page__main content">
        <div class="all-resurs-page__search">
          <h1>Qidiruv natijasi</h1>
          <div class="set">
            <SearchInput />
            <p>Qidiruv natijalari “arab” (24 ta yozuv topildi)</p>
          </div>
        </div>
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