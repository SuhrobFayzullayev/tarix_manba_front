<template>
  <div class="profile__content favorites">
    <div class="profile__content-top favorites__top">
      <div class="icon">
        <img src="~/assets/icons/heart.svg" alt="" />
      </div>
      <h1 class="title">Избранное</h1>
    </div>
    <div class="profile__content-main">
      <div class="favorites__item" v-for="item in 2" :key="item">
        <div class="img">
          <img src="https://picsum.photos/80/80" alt="">
          <p>Ut enim ad minim</p>
        </div>
        <div>
          <img src="~/assets/icons/delete.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>