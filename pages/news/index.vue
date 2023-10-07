<script setup>
import { useArticleStore } from "@/store/article";
import { news } from "/public/images/helpers.js";

const articleStore = useArticleStore();
await articleStore.fetchArticles();
const articlesData = articleStore.articles;
</script>

<template>
  <div class="news-page">
    <div class="container">
      <h1 class="title">Yangiliklar</h1>
      <div class="news-page__content">
        <NewsItem
          :item="item"
          v-for="item in articlesData"
          :key="item.id"
          @next="$router.push(`/news/${item.id}`)"
        >
        </NewsItem>
      </div>
      <Pagination />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
