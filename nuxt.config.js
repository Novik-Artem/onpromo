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
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/logo.jpg' },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ONPROMO.BY',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        property: 'og:title',
        content: 'ONPROMO.BY',
      },
      {
        property: 'og:image',
        content: '/favicons/logo.jpg',
      },
      {
        property: 'og:description',
        content: 'ONPROMO.BY',
      },
      {
        name: 'twitter:image',
        content: '/favicons/logo.jpg',
      },
      {
        name: 'twitter:title',
        content: 'ONPROMO.BY',
      },
      {
        name: 'twitter:description',
        content: 'ONPROMO.BY',
      },
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
  ],
  axios: {
    baseURL: 'https://onpromo.by/api/'
  },
  build: {},
}
