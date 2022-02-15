import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  preLoad: 1.33,// 预加载的宽高比，4:3
  error: 'http://demo.couponblu.com/static/error.jpeg', // 加载失败时使用的图片
  loading: 'http://demo.couponblu.com/static/loading.gif',// 加载时的loading图
  attempt: 2,//尝试加载次数
  throttleWait: 500,//间隔多少时间重新加载
})