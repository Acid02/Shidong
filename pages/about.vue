<template>
  <div>
    <!-- 关于我们 -->
    <div class="index-app business padd-or flex-center">
      <p class="casetitle-en">ABOUT US</p>
      <p class="casetitle">关于我们</p>
      <div class="about-gy flex-center">
        <div class="img">
          <img src="~static/pexels.png" width="100%" alt="关于我们" />
        </div>
        <div class="desc">
          <p>
            &#12288;&#12288;上海世栋信息科技有限公司是一家专门从事信息技术整合、软件开发及应用、活动整体策划运维、整体营销推广的企业。
          </p>
          <p>
            &#12288;&#12288;公司的产品采用目前主流的开发技术，具有跨平台、可扩展、开放、安全、分布等特性，适应主流PC、手机端、移动端平台。经过多年的发展，世栋已经成为一家直接面向最终用户的，并且拥有自己成熟产品的互联网+企业。
          </p>
          <p>
            &#12288;&#12288;公司拥有丰富的活动策划执行及整体营销推广经验，秉承为中国的企业和消费用户提供优秀的产品并以一流的咨询服务使客户能最大限度地发挥系统的功能，提高企业的效率，做好对外形象及活动推广宣传，提高知名度。与多家企事业单位展开了良好的合作。
          </p>
        </div>
      </div>
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
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState("storage", ["advantage"]),
  mounted() {},
  methods: {},
};
</script>
<style>
@import url("~static/css/index");
.about-gy {
  margin-top: 66px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 80px;
}
.about-gy .img {
  width: 552px;
  position: relative;
}
.about-gy .img > img {
  position: relative;
  z-index: 1;
}
.about-gy .img::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  border: 2px solid #494d6e;
  left: 27px;
  top: 36px;
}
.about-gy .desc {
  width: 500px;
  font-size: 19px;
  color: #646464;
  line-height: 34px;
}
@media screen and (max-width: 768px) {
  .about-gy {
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 0 !important;
  }
  .about-gy .desc {
    width: 100%;
  }
  .about-gy .img {
    width: 100%;
    order: 1;
  }
  .about-gy .img::after {
    display: none;
  }
}
</style>