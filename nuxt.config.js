import dotenv from 'dotenv'
dotenv.config()

const url = "https://onpromo.by"

export default {
  target: 'static',
  head: {
    title: 'ONPROMO.BY - Звук, свет, светодиодные экраны и сценические конструкции. Брест',
    htmlAttrs: {
      lang: 'ru',
    },
    link: [
      {
        rel: "canonical",
        href: url,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/favicon.ico`,
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: "description",
        content: "Прокат света, звука, светодиодных экранов, сценических конструкций. Брест"
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
        property: "og:url",
        content: url
      },
      {
        property: 'og:description',
        content: 'Прокат света, звука, светодиодных экранов, сценических конструкций. Брест',
      },
      {
        name: 'twitter:card',
        content: url + '/favicons/logo.png',
      },
      {
        name: 'twitter:image',
        content: url + '/favicons/logo.png',
      },
      {
        property: 'og:image',
        content: url + '/favicons/logo.png',
      },
      {
        name: 'twitter:title',
        content: 'ONPROMO.BY',
      },
      {
        name: 'twitter:description',
        content: 'Прокат света, звука, светодиодных экранов, сценических конструкций. Брест',
      },
      {
        name: 'keywords',
        content: 'звук свет экраны, звук свет экраны Брест, световое оборудование, звуковое оборудование, сценическое оборудование, экраны, спецэффекты, прокат света, прокат звука, прокат экранов, звук для мероприятий, свет для мероприятий, экраны для мероприятий, оборудование на свадьбу, свет на свадьбу, звук на свадьбу, экран на свадьбу, тяжёлый дым, концертное оборудование, оборудование для концертов, прокат сцены, сцена на праздники, сцена на мероприятие, сценический комплекс'
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