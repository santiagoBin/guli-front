import Vue from 'vue'
import VueQriously from 'vue-qriously'
Vue.use(VueQriously)
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
Vue.use(VueAwesomeSwiper)
export default{
  // some nuxt config...
  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js',ssr:false }
  ],
  css: [
    'swiper/dist/css/swiper.css',
  ],
}
