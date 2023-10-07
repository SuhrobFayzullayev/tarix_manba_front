<template>
  <div class="nav" :class="{ nav2: tekshir }">
    <div class="nav__content">
      <div class="nav__left">
        <NuxtLink to="/" tag="div" class="logo">
          <h1>Tarixmanba<span>.uz</span></h1>
        </NuxtLink>
        <div
          class="catalog btn"
          @click="openCategoryModal = !openCategoryModal"
        >
          <span>Manbalar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="17"
            fill="none"
          >
            <rect width="20" height="3" fill="#fff" rx="1.5" />
            <path
              fill="#fff"
              d="M0 8.5A1.5 1.5 0 0 1 1.5 7h21a1.5 1.5 0 0 1 0 3h-21A1.5 1.5 0 0 1 0 8.5ZM0 15.5A1.5 1.5 0 0 1 1.5 14h25a1.5 1.5 0 0 1 0 3h-25A1.5 1.5 0 0 1 0 15.5Z"
            />
          </svg>
        </div>
        <Transition @click="">
          <div
            v-if="(openCategoryModal = true)"
            class="category-modal w-fit p-10 h-[100px] top-[70px] fixed bg-red-200 z-50"
          ></div>
        </Transition>

        <ul class="nav__list">
          <li><NuxtLink to="/about">Biz haqimizda</NuxtLink></li>
          <li><NuxtLink to="/news">Yangiliklar</NuxtLink></li>
          <li><NuxtLink to="/library">Kutubxona</NuxtLink></li>
          <li><NuxtLink to="/contact">Bog’lanish</NuxtLink></li>
          <li class="bars" @click="openNavModal = !openNavModal">
            <svg
              v-if="!openNavModal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="21"
              viewBox="0 0 30 21"
              fill="none"
            >
              <rect width="30" height="3" rx="1.5" fill="#A0664E" />
              <path
                d="M0 10.5C0 9.67157 0.671573 9 1.5 9H28.5C29.3284 9 30 9.67157 30 10.5C30 11.3284 29.3284 12 28.5 12H1.5C0.671573 12 0 11.3284 0 10.5Z"
                fill="#A0664E"
              />
              <path
                d="M0 19.5C0 18.6716 0.671573 18 1.5 18H28.5C29.3284 18 30 18.6716 30 19.5C30 20.3284 29.3284 21 28.5 21H1.5C0.671573 21 0 20.3284 0 19.5Z"
                fill="#A0664E"
              />
            </svg>
            <svg
              v-else
              class="close"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="35"
              height="35"
              viewBox="0,0,256,256"
            >
              <g
                fill="#a07048"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="2"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <g transform="scale(5.12,5.12)">
                  <path
                    d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"
                  ></path>
                </g>
              </g>
            </svg>
          </li>
        </ul>
      </div>
      <div class="nav__right">
        <div v-if="tekshir">
          <SearchInput />
        </div>
        <NuxtLink to="/profile" class="user">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              fill="#fff"
              d="M12 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"
            />
          </svg>
          <span>Shaxsiy xona</span>
        </NuxtLink>
        <div class="blind">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              fill="#fff"
              d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5ZM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z"
            />
          </svg>
          <span>Zaif koʻruvchilar uchun</span>
        </div>
      </div>
    </div>
    <div class="resNav" :class="{ openResNav: openNavModal }">
      <div class="catalog btn">
        <span>Manbalar</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="17"
          fill="none"
        >
          <rect width="20" height="3" fill="#fff" rx="1.5" />
          <path
            fill="#fff"
            d="M0 8.5A1.5 1.5 0 0 1 1.5 7h21a1.5 1.5 0 0 1 0 3h-21A1.5 1.5 0 0 1 0 8.5ZM0 15.5A1.5 1.5 0 0 1 1.5 14h25a1.5 1.5 0 0 1 0 3h-25A1.5 1.5 0 0 1 0 15.5Z"
          />
        </svg>
      </div>
      <ul class="resNav__list">
        <li>
          <NuxtLink @click="openNavModal = false" to="/about"
            >Biz haqimizda</NuxtLink
          >
        </li>
        <li>
          <NuxtLink @click="openNavModal = false" to="/news"
            >Yangiliklar</NuxtLink
          >
        </li>
        <li>
          <NuxtLink @click="openNavModal = false" to="/library"
            >Kutubxona</NuxtLink
          >
        </li>
        <li>
          <NuxtLink @click="openNavModal = false" to="/contact"
            >Bog’lanish</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                fill="#fff"
                d="M12 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"
              />
            </svg>
            <span>Shaxsiy xona</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                fill="#fff"
                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5ZM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z"
              />
            </svg>
            <span>Zaif koʻruvchilar uchun</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { Transition } from "vue";
import { ref } from "vue";

const openNavModal = ref(false);
const route = useRoute();
const tekshir = ref(false);
const openCategoryModal = ref(false);

watch(
  () => {
    route.path == "/" ? (tekshir.value = false) : (tekshir.value = true);
  },
  () => {}
);

watch(route, (val) => {});
</script>

<style lang="scss" scoped>
.catalog .v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.catalog .v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
