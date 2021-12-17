import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  server: {
    host: '0.0.0.0'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - store-v1',
    title: 'store-v1',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'stylesheet', href: 'assets/web_fonts/tanha-font-v0.9/Tanha.ttf' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/farsiNumber.js',
    '~/plugins/vee-validate.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', { rtl: true }],
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    baseURL: process.env.NODE_ENV !== 'production'
      ? process.env.BASE_URL
      : 'http://192.168.114.21:3000',
    proxyHeaders: true,
    credentials: true

  },
  proxy: {
    '/api/': { target: 'http://192.168.114.21:3000', pathRewrite: { '^/api/': '' } }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],

    theme: {
      light: true,
      themes: {
        dark: {
          background1: colors.grey.darken4,
          yellow: colors.yellow.darken1,
          primary: colors.amber.darken1,
          accent: colors.grey.lighten3,
          secondary: colors.blueGrey.lighten1,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          edit: colors.blue.lighten3,
          delete: colors.orange.darken3

        },
        light: {
          background1: colors.grey.lighten5,
          yellow: colors.yellow.lighten1,
          primary: colors.amber.lighten1,
          accent: colors.grey.darken3,
          secondary: colors.blueGrey.darken1,
          info: colors.teal.darken1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          edit: colors.blue.lighten3,
          delete: colors.orange.darken3
        }
      }
    }
  },
  router: {
    // middleware: ['authenticated']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules']
  }
}
