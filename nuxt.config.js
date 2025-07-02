import dotenv from 'dotenv'
dotenv.config()

export default {
  target: 'static',
  head: {
    title: 'ONPROMO.BY',
    htmlAttrs: {
      lang: 'ru',
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/logo.ico' },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ONPROMO.BY',
      },
      {
        name: "description",
        content: "Брест. Аренда света, звука, экранов, спецэффекты. Звук и свет для мероприятий. Концертное оборудование, аренда сцены"
      },
      {
        property: "og:locale",
        content: "ru_RU"
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        property: 'og:title',
        content: 'ONPROMO.BY',
      },
      {
        property: "og:site_name",
        content: "ONPROMO.BY"
      },
      {
        property: 'og:image',
        content: '/favicons/logo.ico',
      },
      {
        property: 'og:description',
        content: 'Брест. Аренда света, звука, экранов, спецэффекты. Звук и свет для мероприятий. Концертное оборудование, аренда сцены',
      },
      {
        name: 'twitter:card',
        content: '/favicons/logo.ico',
      },
      {
        name: 'twitter:image',
        content: '/favicons/logo.ico',
      },
      {
        name: 'twitter:title',
        content: 'ONPROMO.BY',
      },
      {
        name: 'twitter:description',
        content: 'Брест. Аренда света, звука, экранов, спецэффекты. Звук и свет для мероприятий. Концертное оборудование, аренда сцены',
      },
      {
        name: 'keywords',
        content: 'аренда звук свет экраны, аренда звук свет экраны Брест, световое оборудование, звуковое оборудование, сценическое оборудование, экраны, аренда света, аренда звука, аренда экрана, спецэффекты, прокат света, прокат звука, прокат экранов, звук для мероприятий, свет для мероприятий, экраны для мероприятий, оборудование на свадьбу, свет на свадьбу, звук на свадьбу, экран на свадьбу, тяжёлый дым, концертное оборудование, оборудование для концертов, аренда сцены, сцена на праздники, сцена на мероприятие, сценический комплекс'
      }
    ],
  },
  loading: { color: 'transparent' },
  css: [{ src: '~/assets/styles/reset.scss', lang: 'sass' }],
  styleResources: {
    scss: [
      '~/assets/styles/colors.scss',
      '~/assets/styles/breakpoints.scss',
      '~/assets/styles/mixins.scss',
      '~/assets/styles/fonts.scss',
    ],
  },
  plugins: ['~/plugins/axios-port.js'],
  components: true,
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
  ],
  modules: [
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
  ],
  axios: {
    baseURL: 'https://onpromo.by/api/'
  },
  build: {},
}
