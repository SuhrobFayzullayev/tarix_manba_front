import { defineStore } from "pinia";
// import { useErrorHandlerStore } from './errorHandler'
import { apiFetch } from "@/plugins/http/fetch";

export interface Article {
  id: number;
  slug: string;
  title: string;
  content: string;
  image: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  updated_at: string;
}

export const useArticleStore = defineStore({
  id: "article",
  state: () => ({
    articles: [] as Article[],
    pagination: {
      currentPage: 1,
      perPage: 1,
      numberOfPages: 1,
      total: 1,
    },
    article: {} as Article,
    isLoading: false,
  }),
  actions: {
    async fetchArticles(page: number | null = null) {
      // const errorHandlerStore = useErrorHandlerStore()
      try {
        this.isLoading = true;
        const res = await apiFetch("/api/articles", { params: { page } });
        const data = res.data;
        this.articles = data.data;
        console.log(data.data);

        this.pagination.currentPage = data.current_page;
        this.pagination.perPage = data.per_page;
        this.pagination.numberOfPages = data.last_page;
        this.pagination.total = data.total;
      } catch (err) {
        // errorHandlerStore.setRequestError(err);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchArticle(id: number | string) {
      // const errorHandlerStore = useErrorHandlerStore()
      try {
        this.isLoading = true;
        const res = await apiFetch(`/api/article/${id}`);
        this.article = res.data;
      } catch (err) {
        // errorHandlerStore.setRequestError(err)
      } finally {
        this.isLoading = false;
      }
    },
  },
});
