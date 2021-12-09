<template>
  <div>
    <!-- 线下活动支持 -->
    <div class="extension-app padd-or padd flex-center">
      <p class="plan-title">线下活动支持</p>
      <img
        src="~static/duobx.png"
        class="plan-icon"
        width="24px"
        alt="活动方案策划"
      />
      <div class="xxhd hdsjf fshd extension-app flex-center">
        <div class="ext-webdestile">
          <p class="title O-title">活动数据跟踪和分析</p>
          <p class="desc O-txt">
            专业的服务精准锁定客户需求，信息
            准确直达，追求完美执行，丰富的执行经验，强烈地责任心，灵活的应
            变能力我们用专业态度确保每个项目完美实施。为企业提供优质的创意
            服务，打造专属的体验。
          </p>
        </div>
        <img class="fs-right" src="~static/ex0.png" />
      </div>
    </div>
    <!-- 展台设计搭建 -->
    <div class="zt tuig xmtzh extension-app padd-or padd flex-center">
      <p class="O-title">展台设计搭建</p>
      <p class="O-title-en">
        提供专业的展台设计搭建服务，特装展台设计制作、搭建制作、展台设计搭建、
        展台搭建装修、大型会议活动现场布置等，为您创造完美的品牌营销。
      </p>
      <div class="tuig-list flex-center">
        <img src="~static/imgtest.png" v-for="item in 4" />
      </div>
    </div>
    <!-- 我们的服务 -->
    <div
      class="tuig xmtzh extension-app padd-or padd flex-center"
      style="background: #fff"
    >
      <p class="O-title">我们的服务</p>
      <img src="~static/ex1.png" alt="我们的服务" style="margin-top: 0" />
    </div>
    <!-- 配套系统开发 -->
    <div class="tuig xmtzh extension-app padd-or padd flex-center">
      <p class="O-title">配套系统开发</p>
      <p class="O-title-en">专业开发团队将根据客户需求开发配套活动系统，</p>
      <p class="O-title-en">
        通过线下互动活动，可增加与粉丝互动，也可以实地的接触拉近与粉丝的距离。
        同时，这也是线下活动的推广窗口，有效控制宣传成本，达到效果最大化。
      </p>
      <img src="~static/ex2.png" width="100%" alt="配套系统开发" />
    </div>
    <!-- 活动数据跟踪 -->
    <div
      class="hdsjf fshd extension-app padd-or padd flex-center"
      style="background: #fff"
    >
      <img class="fs-right" src="~static/cjch.png" />
      <div class="ext-webdestile">
        <p class="title O-title">活动数据跟踪</p>
        <p class="desc O-txt">
          对活动数据进行分析，随时监控优化推广效果，出具数据报
          告，分析活动情况及转化数据，提供详细的营销汇报，并针
          对数据分析情况对活动提出合理建议，用数据实力来证明！
        </p>
      </div>
    </div>
  </div>
</template>
<style>
@import url(~static/css/extension);
/* <!-- 线下活动支持 --> */
.xxhd {
  margin-top: 29px;
  width: 100%;
  background: #fff;
}
.xxhd .ext-webdestile {
  width: 626px;
}
.xxhd .fs-right {
  width: 475px;
}
.xxhd .O-title {
  font-weight: bold;
  color: #17587e;
}
/* 展台设计搭建 */
.zt {
  background: #ededed url(~static/cehbg.png) no-repeat center/cover;
}
.zt .O-title-en {
  width: 76%;
}
</style>