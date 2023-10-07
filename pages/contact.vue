<template>
  <div class="contact">
    <div class="container">
      <div class="contact__info">
        <h1 class="title">Kontaktlar</h1>
        <div class="contact__info-item">
          <h5>Адрес</h5>
          <p>Узбекистан, г. Ташкент, Ул. Садыка Азимова, 68</p>
        </div>
        <div class="contact__info-item">
          <h5>Ориентиры</h5>
          <p>145 школа, кафе Efendi, Правительственная поликлиника</p>
        </div>
        <div class="contact__info-item">
          <h5>Телефон</h5>
          <p class="">+998 94 505 45 05</p>
        </div>
        <div class="contact__info-item">
          <h5>Email</h5>
          <p class="">info@sos.uz</p>
        </div>
      </div>
      <div class="contact__form">
        <h1 class="contact__form-title">Bog’lanish</h1>
        <form action="#" class="form">
          <input type="text" placeholder="Ваше имя" name="name" />
          <div class="half">
            <input type="tel" placeholder="Телефон" name="phone" />
            <input type="email" placeholder="Email" name="email" />
          </div>
          <textarea name="message" id="" placeholder="Сообщение"></textarea>
          <button class="form__btn">Отправить</button>
        </form>
      </div>
    </div>
    <div class="container">
      <button class="contact__btn">Мы на карте</button>
    </div>
    <div class="contact__map">
      <MapComponent/>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const map = ref(false);
</script>

<style lang="scss" scoped>
</style>