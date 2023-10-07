<template>
  <div class="product">
    <div class="product__img">
      <div class="img">
        <img src="https://picsum.photos/200/180" alt="" />
      </div>
      <div class="product__icons">
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
    </div>
    <div class="product__info">
      <div class="content">
        <div class="content__info">
          <p>Asar nomi: <span>Tarixi tabariy</span></p>
          <p>Yili: <span>839-923</span></p>
          <p>Tili: <span class="lang">Arab</span> <span>tili</span></p>
          <p>Yeri: <span>Eron</span></p>
        </div>
        <div class="content__icons">
          <div class="icon" @click="openAudio = true">
            <span>Audio</span>
            <div>
              <img src="../assets/icons/audio.svg" alt="" />
            </div>
          </div>
          <div class="icon" @click="imagesSlider = true">
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
          <div class="icon" @click="openVideo = true">
            <span>Video</span>
            <div>
              <img src="../assets/icons/video.svg" alt="" />
            </div>
          </div>
          <div class="icon" @click="threeDView = true">
            <span>3D</span>
            <div>
              <img src="../assets/icons/3d.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product__share">
      <div class="selected">
        <span>Tanlanganlarga qo'shish</span>
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
      <div class="chat">
        <span>Ulashish</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M6.8985 16.125H9.8985V10.1175H12.6015L12.8985 7.1325H9.8985V5.625C9.8985 5.42609 9.97752 5.23532 10.1182 5.09467C10.2588 4.95402 10.4496 4.875 10.6485 4.875H12.8985V1.875H10.6485C9.65394 1.875 8.70011 2.27009 7.99685 2.97335C7.29359 3.67661 6.8985 4.63044 6.8985 5.625V7.1325H5.3985L5.1015 10.1175H6.8985V16.125Z"
            fill="#A20025"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M9.00073 6.75C8.404 6.75 7.8317 6.98705 7.40974 7.40901C6.98779 7.83097 6.75073 8.40326 6.75073 9C6.75073 9.59674 6.98779 10.169 7.40974 10.591C7.8317 11.0129 8.404 11.25 9.00073 11.25C9.59747 11.25 10.1698 11.0129 10.5917 10.591C11.0137 10.169 11.2507 9.59674 11.2507 9C11.2507 8.40326 11.0137 7.83097 10.5917 7.40901C10.1698 6.98705 9.59747 6.75 9.00073 6.75ZM9.00073 5.25C9.99529 5.25 10.9491 5.64509 11.6524 6.34835C12.3556 7.05161 12.7507 8.00544 12.7507 9C12.7507 9.99456 12.3556 10.9484 11.6524 11.6517C10.9491 12.3549 9.99529 12.75 9.00073 12.75C8.00617 12.75 7.05234 12.3549 6.34908 11.6517C5.64582 10.9484 5.25073 9.99456 5.25073 9C5.25073 8.00544 5.64582 7.05161 6.34908 6.34835C7.05234 5.64509 8.00617 5.25 9.00073 5.25ZM13.8757 5.0625C13.8757 5.31114 13.777 5.5496 13.6011 5.72541C13.4253 5.90123 13.1869 6 12.9382 6C12.6896 6 12.4511 5.90123 12.2753 5.72541C12.0995 5.5496 12.0007 5.31114 12.0007 5.0625C12.0007 4.81386 12.0995 4.5754 12.2753 4.39959C12.4511 4.22377 12.6896 4.125 12.9382 4.125C13.1869 4.125 13.4253 4.22377 13.6011 4.39959C13.777 4.5754 13.8757 4.81386 13.8757 5.0625ZM9.00073 3C7.14523 3 6.84223 3.00525 5.97898 3.0435C5.39098 3.07125 4.99648 3.15 4.63048 3.2925C4.32419 3.40495 4.04729 3.5852 3.82048 3.81975C3.58574 4.04655 3.40525 4.32344 3.29248 4.62975C3.14998 4.99725 3.07123 5.391 3.04423 5.97825C3.00523 6.80625 2.99998 7.09575 2.99998 9C2.99998 10.8562 3.00523 11.1585 3.04348 12.0217C3.07123 12.609 3.14998 13.0043 3.29173 13.3695C3.41923 13.6958 3.56923 13.9305 3.81823 14.1795C4.07098 14.4315 4.30573 14.5822 4.62823 14.7067C4.99873 14.85 5.39323 14.9295 5.97823 14.9565C6.80623 14.9955 7.09573 15 8.99998 15C10.8562 15 11.1585 14.9948 12.0217 14.9565C12.6082 14.9288 13.0027 14.85 13.3695 14.7083C13.6755 14.5952 13.9523 14.4151 14.1795 14.181C14.4322 13.929 14.583 13.6942 14.7075 13.371C14.85 13.002 14.9295 12.6075 14.9565 12.021C14.9955 11.1937 15 10.9035 15 9C15 7.1445 14.9947 6.8415 14.9565 5.97825C14.9287 5.39175 14.8492 4.99575 14.7075 4.62975C14.5944 4.32376 14.4143 4.04699 14.1802 3.81975C13.9535 3.58488 13.6766 3.40438 13.3702 3.29175C13.0027 3.14925 12.6082 3.0705 12.0217 3.0435C11.1945 3.0045 10.9057 3 9.00073 3ZM9.00073 1.5C11.0385 1.5 11.2927 1.5075 12.093 1.545C12.891 1.5825 13.4355 1.70775 13.9132 1.89375C14.4082 2.08425 14.8252 2.34225 15.2422 2.7585C15.6236 3.13342 15.9187 3.58694 16.107 4.0875C16.2922 4.56525 16.4182 5.10975 16.4557 5.9085C16.491 6.708 16.5007 6.96225 16.5007 9C16.5007 11.0378 16.4932 11.292 16.4557 12.0915C16.4182 12.8903 16.2922 13.434 16.107 13.9125C15.9192 14.4133 15.6241 14.8669 15.2422 15.2415C14.8672 15.6227 14.4137 15.9178 13.9132 16.1063C13.4355 16.2915 12.891 16.4175 12.093 16.455C11.2927 16.4903 11.0385 16.5 9.00073 16.5C6.96298 16.5 6.70873 16.4925 5.90848 16.455C5.11048 16.4175 4.56673 16.2915 4.08823 16.1063C3.58748 15.9184 3.13388 15.6232 2.75923 15.2415C2.37781 14.8666 2.0827 14.4131 1.89448 13.9125C1.70848 13.4347 1.58323 12.8903 1.54573 12.0915C1.50973 11.292 1.50073 11.0378 1.50073 9C1.50073 6.96225 1.50823 6.708 1.54573 5.9085C1.58323 5.109 1.70848 4.566 1.89448 4.0875C2.08216 3.58663 2.37734 3.13299 2.75923 2.7585C3.13399 2.37692 3.58755 2.0818 4.08823 1.89375C4.56598 1.70775 5.10973 1.5825 5.90848 1.545C6.70873 1.50975 6.96298 1.5 9.00073 1.5Z"
            fill="#A20025"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M16.845 4.5C16.2675 4.7625 15.645 4.935 15 5.0175C15.66 4.62 16.17 3.99 16.41 3.2325C15.7875 3.6075 15.0975 3.87 14.37 4.02C13.7775 3.375 12.945 3 12 3C10.2375 3 8.79753 4.44 8.79753 6.2175C8.79753 6.4725 8.82753 6.72 8.88003 6.9525C6.21003 6.8175 3.83253 5.535 2.25003 3.5925C1.97253 4.065 1.81503 4.62 1.81503 5.205C1.81503 6.3225 2.37753 7.3125 3.24753 7.875C2.71503 7.875 2.22003 7.725 1.78503 7.5V7.5225C1.78503 9.0825 2.89503 10.3875 4.36503 10.68C3.89307 10.8092 3.3976 10.8271 2.91753 10.7325C3.12123 11.3719 3.52018 11.9313 4.05829 12.3322C4.5964 12.7331 5.24661 12.9553 5.91753 12.9675C4.78025 13.8678 3.37053 14.3545 1.92003 14.3475C1.66503 14.3475 1.41003 14.3325 1.15503 14.3025C2.58003 15.2175 4.27503 15.75 6.09003 15.75C12 15.75 15.2475 10.845 15.2475 6.5925C15.2475 6.45 15.2475 6.315 15.24 6.1725C15.87 5.7225 16.41 5.1525 16.845 4.5Z"
            fill="#A20025"
          />
        </svg>
      </div>
    </div>
    <!-- VIDEO MODAL -->
    <div class="overlay" @click="openVideo = false" v-show="openVideo"></div>
    <div class="modal video-modal" v-show="openVideo">
      <VideoComponent>Tarixi tabariy</VideoComponent>
    </div>
    <!-- AUDIO MODAL -->
    <div class="overlay" @click="openAudio = false" v-show="openAudio"></div>
    <div class="modal audio-modal" v-show="openAudio">
      <AudioComponent>Tarixi tabariy</AudioComponent>
    </div>
    <!-- IMAGES MODAL -->
    <div
      class="overlay"
      @click="imagesSlider = false"
      v-show="imagesSlider"
    ></div>
    <div class="modal images-modal" v-show="imagesSlider">
      <ImagesComponent>Tarixi tabariy</ImagesComponent>
    </div>
    <!-- 3D MODAL -->
    <div
      class="overlay"
      @click="threeDView = false"
      v-show="threeDView"
    ></div>
    <div class="modal images-modal" v-show="threeDView">
      <ThreeDComponent>Tarixi tabariy</ThreeDComponent>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const openVideo = ref(false);
const openAudio = ref(false);
const imagesSlider = ref(false);
const threeDView = ref(false);

</script>

<style lang="scss" scoped>
</style>