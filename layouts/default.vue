<template>
  <div>
    <Navigation :NavList="NavList" />
    <div class="banner">
      <p class="ban-title">一站式互联网营销解决方案</p>
      <p class="ban-desc">助力企业实现内容整合营销</p>
      <p class="ban-box">产品服务 · 内容整合 · 营销推广</p>
    </div>
    <section class="section">
      <Nuxt />
    </section>
    <Footer :NavList="NavList" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      NavList: [
        {
          key: 0,
          value: "首页",
          url: "/",
        },
        {
          key: 1,
          value: "平台策划建设运维",
          url: "/plan",
        },
        {
          key: 2,
          value: "整合营销推广",
          url: "/extension",
        },
        {
          key: 3,
          value: "线下活动支持",
          url: "/activity",
        },
        {
          key: 4,
          value: "案例展示",
          url: "/case",
        },
        {
          key: 5,
          value: "关于我们",
          url: "/about",
        },
      ],
    };
  },
  mounted() {
    new DevicePixelRatio().init();
    this.$store.commit("storage/setWindow");
    window.onresize = () => this.$store.commit("storage/setWindow");
  },
};
</script>
<style >
.section {
  min-height: calc(100vh - 352px - 109px);
}
.banner {
  width: 100%;
  height: 424px;
  background: #f1585b url(~static/bannerbg.png) no-repeat center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: #fff;
}
.banner > .ban-title {
  font-size: 67px;
  font-weight: bold;
}
.banner > .ban-desc {
  font-size: 47px;
  font-weight: 400;
  margin-top: 24px;
}
.banner > .ban-box {
  font-size: 27px;
  padding: 15px 50px;
  background: #1b1b1b;
  border-radius: 100px;
  margin-top: 45px;
}
@media screen and (max-width: 768px) {
  .banner {
    height: 170px;
  }
  .banner > .ban-title {
    font-size: 27px;
  }
  .banner > .ban-desc {
    font-size: 19px;
    margin-top: 10px;
  }
  .banner > .ban-box {
    font-size: 11px;
    margin-top: 18px;
    padding: 11px 20px;
  }
}
</style>