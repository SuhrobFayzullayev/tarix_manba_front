<template>
  <div class="signup-page">
    <form action="" class="form">
      <h1 class="title">Ro’yhatdan o’tish</h1>
      <div class="form__content">
        <label for="">F.I.SH</label>
        <div class="form__input">
          <input type="text" />
        </div>
      </div>
      <div class="form__content">
        <label for="">Email</label>
        <div class="form__input">
          <input type="text" />
        </div>
      </div>
      <div class="form__content">
        <label for="">Parol</label>
        <div class="form__input">
          <input type="text" />
          <button class="lock">
           <img src="../assets/icons/silver-eye.svg" alt="">
          </button>
        </div>
      </div>
      <div class="form__content">
        <label for="">Parolni qayta kiriting</label>
        <div class="form__input">
          <input type="text" />
          <button class="lock">
           <img src="../assets/icons/silver-eye.svg" alt="">
          </button>
        </div>
      </div>
      <div class="form__content form__content-robot">
        <button>
          <img src="/images/nerobot.png" alt="" />
        </button>
        <div class="form__input">
          <input type="text" />
        </div>
      </div>
      <button class="form__content form__content-links google">
        <span>Войти через Google</span>
        <img src="../assets/icons/google.svg" alt="" />
      </button>
      <button class="form__content form__content-links facebook">
        <span>Войти через facebook</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M13.7971 32.25H19.7971V20.235H25.2031L25.7971 14.265H19.7971V11.25C19.7971 10.8522 19.9552 10.4706 20.2365 10.1893C20.5178 9.90804 20.8993 9.75 21.2971 9.75H25.7971V3.75H21.2971C19.308 3.75 17.4003 4.54018 15.9938 5.9467C14.5873 7.35322 13.7971 9.26088 13.7971 11.25V14.265H10.7971L10.2031 20.235H13.7971V32.25Z"
            fill="white"
          />
        </svg>
      </button>
      <div class="form__content form__content-links signup-btn">
        <button class="btn">Ro’yhatdan o’tish</button>
      </div>
      <div class="form__content form__content-regbtn">
        <button>Parolni tiklash</button>
        <button>Tizimga kirish</button>
      </div>
    </form>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>