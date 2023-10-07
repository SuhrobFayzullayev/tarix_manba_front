<template>
  <div class="sponsorship">
    <div class="container">
      <h1>Homiylik qilish</h1>
      <div class="sponsorship__text">
        <p>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit.
        </p>
        <div class="sponsorship__btns">
          <div @click="openModal = true">
            <img src="../assets/images/payme.svg" alt="" />
          </div>
          <div @click="openModal = true">
            <img src="../assets/images/click.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="overlay" @click="openModal = false" v-show="openModal"></div>
    <div class="modal" v-show="openModal">
        <form action="" class="form-modal">
            <h1 class="title">Homiylik qilish</h1>
            <div class="form-modal__content">
                <label for="">Ataganingiz</label>
                <input type="text">
                <div class="multiselect">
                    <ul>
                        <li v-for="li in 3" :key="li">50 000</li>
                    </ul>
                </div>
            </div>
            <div class="form-modal__content">
                <label for="">Tilaklaringiz</label>
                <textarea name="" id=""></textarea>
            </div>
            <div class="form-modal__content">
                <label for="">Tel nomer</label>
                <input type="text">
            </div>
            <button @click="openModal = false" class="btn submit-btn">Yuborish</button>
        </form>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
const openModal = ref(false)
</script>

<style lang="scss" scoped>
</style>