<template>
  <div class="profile__content">
    <div class="profile__content-top">
      <div class="icon">
        <img src="~/assets/icons/enterance.svg" alt="" />
      </div>
      <h1 class="title">Информация для входа</h1>
    </div>
    <div class="profile__content-main">
      <div class="phone-number">
        <p>+998 ** *** ** 34</p>
        <div class="pencil">
          <img src="~/assets/icons/pencil.svg" alt="" />
        </div>
      </div>
      <div class="password" v-if="changePassword">
        <p>Изменить пароль</p>
        <div class="pencil" @click="changePassword = false">
          <img src="~/assets/icons/pencil.svg" alt="" />
        </div>
      </div>
      <div class="change-password" v-else>
        <form action="" @submit.prevent="submitPassword">
          <div class="inputs">
            <input
              v-model="oldPassword"
              type="text"
              placeholder="Старый пароль"
            />
            <input
              v-model="newPassword"
              type="text"
              placeholder="Новый пароль"
            />
            <input
              v-model="returnNewPassword"
              type="text"
              placeholder="Повторите новый пароль"
            />
          </div>
          <button class="change-password-btn">Сохранить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const changePassword = ref(true);
const oldPassword = ref('');
const newPassword = ref('');
const returnNewPassword = ref('');

function submitPassword() {
  if (oldPassword.value && newPassword.value && returnNewPassword.value) {
    changePassword.value = true;
  }
}
</script>