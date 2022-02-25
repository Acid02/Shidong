export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '上海世栋信息科技有限公司',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: "utf-8" },
      /*优先使用 IE 最新版本和 Chrome*/
      { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" },
      { name: "format-detection", content: "telephone=no" },
      { hid: "renderer", name: "renderer", content: `webkit` },
      {
        hid: "viewport",
        name: "viewport",
        content:
          "width=device-width,viewport-fit=cover,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      },
      {
        hid: "keywords",
        name: "keywords",
        content: `上海世栋信息科技有限公司,世栋信息,上海世栋,城市旅游优惠平台,优惠产品`
      },
      {
        hid: "description",
        name: "description",
        content:"上海世栋信息科技有限公司成立于2003年，是一家专门从事信息技术整合、软件开发及应用、活动整体策划运维、整体营销推广的企业。公司的产品采用目前主流的开发技术，具有跨平台、可扩展、开放、安全、分布等特性，适应主流PC、手机端、移动端平台。经过多年的发展，世栋已经成为一家直接面向最终用户的，并且拥有自己成熟产品的互联网+企业。"
      },
      {
        hid: "copyright",
        name: "copyright",
        content:"上海世栋信息科技有限公司"
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
    },
    {
      src:'@/plugins/vue-preview',
      ssr:false 
    },
  ],
  devServer: {
    https: true
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
 
  modules: [
    '@nuxtjs/axios',
    "@nuxtjs/pwa"
  ],

  pwa: {  
    manifest: {
      name: "上海世栋",
      short_name: "上海世栋",
      description: "上海世栋信息科技有限公司成立于2003年，是一家专门从事信息技术整合、软件开发及应用、活动整体策划运维、整体营销推广的企业。公司的产品采用目前主流的开发技术，具有跨平台、可扩展、开放、安全、分布等特性，适应主流PC、手机端、移动端平台。经过多年的发展，世栋已经成为一家直接面向最终用户的，并且拥有自己成熟产品的互联网",
      background_color: "#000000",
      theme_color: "#000000",
      lang: "zh-CN",
      start_url: "/",
      icon: {
        source: "/icon.png",  //路径为static中的icon2.png
        fileName: '上海世东信息'
      },
    },
    // workbox: {        //开发环境取消注释,调试pwa, 打包时注释
    //   dev: true 
    // }
  },
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
