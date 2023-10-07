<template>
  <div class="document">
    <div class="container">
      <h1 class="title">Xon tuhfasi</h1>
    </div>
    <div class="container">
      <div class="document__header">
        <div class="document__header-img">
          <img src="https://picsum.photos/460/460" alt="" />
        </div>
        <div class="document__header-info">
          <ul>
            <li>Asar muallifi: <span>Muhammad Vafo Karmanagiy</span></li>
            <li>Asar yozilgan yili: <span>1722-1782</span></li>
            <li>Asar yozilgan tili: <span> Fors tili</span></li>
            <li>Asar yozilgan yeri: <span>Buxoro</span></li>
          </ul>
          <div class="content__icons">
            <div class="icon">
              <span>Audio</span>
              <div>
                <img src="../assets/icons/audio.svg" alt="" />
              </div>
            </div>
            <div class="icon">
              <span>Rasm</span>
              <div>
                <img src="../assets/icons/camera.svg" alt="" />
              </div>
            </div>
            <div class="icon">
              <span>Tekst</span>
              <div>
                <img src="../assets/icons/book.svg" alt="" />
              </div>
            </div>
            <div class="icon">
              <span>Xarita</span>
              <div>
                <img src="../assets/icons/globus.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="share">
            <p class="proxima-14-20-400">Ulashilgan: 13</p>
            <img src="../assets/icons/share.svg" alt="" />
          </div>
          <div class="cart__icons">
            <div class="icon">
              <img src="../assets/icons/silver-eye.svg" alt="" />
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
          <div class="favorites">
            <p class="proxima-14-20-400">Tanlanganlarga qo'shish</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z"
                fill="#A20025"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="document__menu">
        <ul>
          <li
            v-for="(list, i) in mapCategoryList"
            :key="i"
            @click="changeInfo(list, i)"
          >
            <img :src="list.img" alt="" />
            <span>{{ list.title }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="document__main">
        <h1>Ma’lumot</h1>
        <div class="text">
          <p>
            Muallifning to‘liq oti:<span>
              Muhammad Qozi Vafo Karmanagiy (مخمر قاضی وفا کرمینگی)</span
            >
          </p>
          <p>
            Tug‘ilgan yili:<span>
              1685 - yili Karmana viloyatida tug‘ilgan.</span
            >
          </p>
          <p>Tug‘ilgan yeri:<span> Buxoro.</span></p>
        </div>
        <div class="text">
          <p>
            Oilasi:<span>
              Otasi Muhammad Zohir Karmanagiy ashtarxoniylar zamonida qozi
              amalida ishlagan. Albatta, u o‘g‘lining tarbiyasiga jiddiy e’tibor
              qaratgan, madrasalarda ta’lim olishini ta’minlagan.</span
            >
          </p>
        </div>
        <div class="text">
          <p>
            Muallifning to‘liq oti:<span>
              Muhammad Qozi Vafo Karmanagiy (مخمر قاضی وفا کرمینگی)</span
            >
          </p>
        </div>
        <div class="text">
          <p>
            Asarning o‘rganilganlik darajasi:
            <span>
              Anke fon Kyugelgen o‘zining “Легитимация Среднеазиатской династии
              мангитов в произведениях их историков (XVIII – XIX вв.)” asarida
              Muhammad Rahimxonning Buxoroda hokimiyatni egallash jarayonini
              yoritishda “Tuhfat ul-Xoniy”ning ba’zi bir qismlaridan
              foydalangan. Shuningdek, Bo‘riboy Ahmedov ham asarni qimmatli
              manba ekanligini o‘zining “Историко-географическая литература
              Среднеи Азии ХVI –XVIII вв” asarida keltirib o‘tadi. Asarning
              ahamiyati:</span
            >
          </p>
        </div>
        <h3>Asarning tarjimalari:</h3>
        <div class="text">
          <p>
            Asarning tuzulishi:
            <span>
              — Azamat nasabli oliyjanob, zafarmand, davlati baland eng yahshi —
              tanlangan amirning nasablari bayoni. — Muholif lashkarlarining
              umdat ul-umaro (amirlarning ustuni) bo‘lgan Amirga qarshi muhoraba
              jangi va amirning isyonkor muholifatchilar ustidan g‘alabasi
              bayoni. — Oliymaqom Amirning dushman shohi va muxolifat
              qo‘shinlariga qarshi jangi va dushmanning qo‘rquv ila mag‘lubiyati
              bayoni. — Hazrati Sohib Zamoniyning yoshlik davridagi hayoti,
              Olloh taolo fazli-marhamati ostida Ulug‘ otasining bergan ta’lim
              va tarbiyasi bayoni.</span
            >
          </p>
        </div>
        <div class="text">
          <p>
            Asarning asl (ko‘chirma) nusxalarining muqovalari, betlari,
            xoshiyalari, bezaklari, minatyuralarining surati).
          </p>
        </div>
      </div>
    </div>
    <TextComponent/>
    <ContentProduct></ContentProduct>
    <TextComponent/>
    <TextComponent/>
    <TextComponent/>
    <div class="container">
      <AudioComponent>Audio</AudioComponent>
      <VideoComponent> Video </VideoComponent>
      <MemorialSpecifiedTime></MemorialSpecifiedTime>
    </div>
    <div class="container">
      <div class="document__branch">
        <div>
          <p>Nusxa</p>
          <h1>Beruniy O’zR FA SHI№124</h1>
        </div>
        <div>
          <p>Nusxa</p>
          <h1>Sankt-Peterburg №124</h1>
        </div>
      </div>
    </div>
    <section class="document__map container">
      <MapComponent></MapComponent>
    </section>
    <Sponsorship></Sponsorship>
    <section class="archaeological-monument">
      <div class="container">
        <div class="archaeological-monument__header">
          <h1 class="title">Aloqador manbalar</h1>
        </div>
        <div class="swiper-container">
          <Swiper
            :modules="modules2"
            class="swiper"
            :breakpoints="breakpoints"
            :slidesPerView="'auto'"
            :navigation="true"
          >
            <SwiperSlide
              class="swiper-slide"
              v-for="product in archaeologicalMonuments"
              :key="product.id"
            >
              <CartComponent :product="product" class="cart"></CartComponent>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
    <CustomersOpinion></CustomersOpinion>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Grid, Navigation, Autoplay } from "swiper/modules";
import { ref } from "vue";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

import {
  mapCategoryList,
  archaeologicalMonuments,
} from "../public/images/helpers.js";

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
</script>

<style lang="scss" scoped>
</style>