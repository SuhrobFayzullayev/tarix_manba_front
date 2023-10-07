<script setup>
import { useArticleStore } from "@/store/article";
import { imgStoreUrl, baseURL } from "@/constants/index";

const { params } = useRoute();
const { id } = params;

const articleStore = useArticleStore();
await articleStore.fetchArticle(id);
const article = articleStore.article;

console.log(article);
</script>

<template>
  <div class="news-page__about-item">
    <div class="container">
      <div class="hero-top">
        <div class="hero-top__img">
          <img :src="baseURL + imgStoreUrl + article?.image" alt="" />
        </div>
        <div class="hero-top__text">
          <h1 class="title">{{ article?.title }}</h1>
          <p class="date">{{ article?.created_at?.slice(0, 10) }}</p>
          <div class="pi" v-html="article?.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
