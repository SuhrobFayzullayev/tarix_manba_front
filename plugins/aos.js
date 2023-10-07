import { defineNuxtPlugin } from '#app'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.AOS = AOS.init({
      once: false,
    });
    // if (typeof window !== 'undefined') {
    // }
});
