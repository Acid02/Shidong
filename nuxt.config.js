export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Shidong',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: "utf-8" },
      /*优先使用 IE 最新版本和 Chrome*/
      { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" },
      { name: "format-detection", content: "telephone=no" },
      { hid: "renderer", name: "renderer", content: `webkit` },
      // {
      //   hid: "viewport",
      //   name: "viewport",
      //   content:
      //     "width=device-width,viewport-fit=cover,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      // },
      {
        hid: "keywords",
        name: "keywords",
        content: ` `
      },
      {
        hid: "description",
        name: "description",
        content:
          ""
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ], 
    script: [
      // { src: '/rem.js', type: 'text/javascript', charset: 'utf-8'}
      { src: '/devicePixelRatio.js', type: 'text/javascript', charset: 'utf-8'}
],
  },
  loading: {
    color: '#1ecc9c',
    height: '5px'
  },
  router: {
    base: '/'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/main.css','~assets/reset.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/api',
    {
      src: '@/plugins/vue-lazyload',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  // 需要代理，可以打开底下的注释
  // axios: {
  //   proxy: true
  // },
  // proxy: {
  //   '/api/': 'https://www.jianshu.com'
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
