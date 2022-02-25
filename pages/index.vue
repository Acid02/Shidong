<template>
  <div>
    <!-- 公司介绍 -->
    <div class="padd-or index-app flex-center Company Jea">
      <div class="left">
        <p class="O-title">公司介绍</p>
        <p class="O-title-en">ABOUT US</p>
        <div class="O-txt">
          上海世栋信息科技有限公司成立于2003年，是一家专门从事信息技术整合、软件开发及应用、活动整体策划运维、整体营销推广的企业。公司的产品采用目前主流的开发技术，具有跨平台、可扩展、开放、安全、分布等特性，适应主流PC、手机端、移动端平台。经过多年的发展，世栋已经成为一家直接面向最终用户的，并且拥有自己成熟产品的互联网+企业。
        </div>
        <nuxt-link class="more" to="/about">了解更多+</nuxt-link>
      </div>
      <img src="~static/pexels.png" class="pexels" alt="公司介绍" />
    </div>
    <!-- 主营业务 -->
    <div class="padd-or index-app flex-center Company business zyban">
      <p class="O-title">主营业务</p>
      <p class="O-title-en">BUSINESS</p>
      <div class="bus-icon flex-center">
        <div class="icon-item">
          <img src="~static/icon1.png" alt="平台策划建设运维" />
          <p>平台策划建设运维</p>
        </div>
        <div class="icon-item">
          <img src="~static/icon2.png" alt="内容整合营销推广" />
          <p>内容整合营销推广</p>
        </div>
        <div class="icon-item">
          <img src="~static/icon3.png" alt="线下活动支持" />
          <p>线下活动支持</p>
        </div>
      </div>
    </div>
    <!-- 我们的优势 -->
    <div class="padd-or index-app flex-center Company advantage">
      <p class="O-title">我们的优势</p>
      <p class="O-title-en">OUR ADVANTAGE</p>
      <div class="adv-list flex-center">
        <div
          class="adv-item flex-center"
          v-for="item in advantage"
          :key="item.id"
        >
          <p class="adv-key" :style="{ color: item.color }">0{{ item.id }}</p>
          <div class="adv-dsec flex-center">
            <p class="title" :style="{ color: item.color }">{{ item.title }}</p>
            <p class="O-txt">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 案例展示 -->
    <div class="padd-or index-app flex-center Company business typical">
      <p class="O-title">案例展示</p>
      <p class="O-title-en">TYPICAL CASE</p>
      <div
        class="typi-list flex-center"
        v-for="(item, index) in info"
        :key="index"
      >
        <div class="typi-pic flex-center">
          <div v-for="(pic, key) in item.picurl" :key="key">
            <img v-lazy="pic" :large="pic" :preview="0" preview-text="" />
          </div>
          <p class="typ-txt">{{ item.listlabel }}</p>
        </div>
      </div>
      <nuxt-link class="more" to="/case">了解更多+</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return { info: {} };
  },
  computed: mapState("storage", ["advantage"]),
  async mounted() {
    let {
      data: { info = [] },
    } = await this.$api.selPic({ data: { pagesize: 3 } });

    this.info = info.map((el) => {
      el.picurl = el.picurl.split(",");
      return el;
    });
    this.$nextTick(() => {
      this.$previewRefresh();
    });
  },
  // async asyncData(context) {
  //   let {
  //     data: { info },
  //   } = await context.app.api.selPic();
  //   info = info.map((el) => {
  //     el.picurl = el.picurl.split(",");
  //     return el;
  //   });
  //   return { info };
  // },
  methods: {},
};
</script>
<style>
@import url("~static/css/index");
</style>