<template>
  <div>
    <!-- 平台策划建设运维 -->
    <div class="plan-app padd-or padd flex-center plbj">
      <p class="plan-title">平台策划建设运维</p>
      <img
        src="~static/duobx.png"
        class="plan-icon"
        width="24px"
        alt="平台策划建设运维"
      />
      <div class="plan-webdesc flex-center">
        <div class="webleft">
          <img src="~static/yqbd.png" class="icon" alt="shidong" />
          <p class="title">
            电脑站 移动站 微官网 小程序 H5 公众号等 整体策划搭建
          </p>
          <p class="desc">
            一个精美的电脑站和移动站是网络推广的基础，设计精
            美完善的网站，不仅可以展示品牌的内涵和实力，还能
            提高品牌的形象。从企业建站整体规划到网站搭建，从
            内容整合到平台运维，将由专业团队提供一站式服务!
          </p>
        </div>
      </div>
    </div>
    <!-- 软件应用开发 -->
    <div class="Software plan-app padd-or padd flex-center">
      <p class="O-title">软件应用开发</p>
      <p class="O-title-en">10年开发经验，为您提供优质的服务</p>

      <div class="sof-list flex-center">
        <div class="sof-item flex-center">
          <div class="sof-icon flex-center">
            <img src="~static/wzicon1.png" alt="网站建设" />
          </div>
          <div class="sof-text">
            <p class="title">网站建设</p>
            <p class="desc">企业官网解决方案，全面满足建设核心与运行管理</p>
          </div>
        </div>
        <div class="sof-item flex-center">
          <div class="sof-icon flex-center" style="background: #4679ff">
            <img src="~static/kf.png" alt="软件开发" />
          </div>
          <div class="sof-text">
            <p class="title">软件开发</p>
            <p class="desc">软件定制开发，测试，部署，管理和维护技术服务</p>
          </div>
        </div>
        <div class="sof-item flex-center">
          <div class="sof-icon flex-center" style="background: #15aaec">
            <img src="~static/sj.png" alt="手机端开发" />
          </div>
          <div class="sof-text">
            <p class="title">手机端开发</p>
            <p class="desc">手机端网站定制建设，微信官网公众号等建设服务</p>
          </div>
        </div>
        <div class="sof-item flex-center">
          <div class="sof-icon flex-center" style="background: #15b8bf">
            <img src="~static/hlw.png" alt="互联网需求服务" />
          </div>
          <div class="sof-text">
            <p class="title">互联网需求服务</p>
            <p class="desc">满足各互联网创新项目需求，实现您的各种想法</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 相关资料整理、编辑、录入 -->
    <div class="upd plan-app padd-or padd flex-center">
      <p class="O-title">相关资料整理、编辑、录入</p>
      <img src="~/static/upd.png" />
    </div>
    <!-- 多语种服务 -->
    <img src="~/static/dyz.png" width="100%" />
    <!-- 平常日运维 -->
    <img
      src="~/static/pcyw.png"
      width="70%"
      style="display: block; margin: 0 auto"
    />
    <!-- 专题活动页面策划、设计、制作 -->
    <div class="special plan-app padd-or padd flex-center">
      <p class="O-title">专题活动页面策划、设计、制作</p>
      <p class="O-title-en">配合相关活动</p>
      <img src="~static/sjx.png" alt="配合相关活动" class="special-icon" />
      <div class="special-list flex-center">
        <div class="item first flex-center">
          <img src="~static/imgtest.png" alt="" />
          <img src="~static/imgtest.png" alt="" />
          <img src="~static/imgtest.png" alt="" />
        </div>
        <div class="item flex-center">
          <img src="~static/imgtest.png" alt="" />
          <img src="~static/imgtest.png" alt="" />
          <img src="~static/imgtest.png" alt="" />
          <img src="~static/imgtest.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
/* 平台策划建设运维 */
.plan-app {
  flex-direction: column;
}
.plbj {
  background-image: url(~static/pint.png);
  background-size: 43%;
  background-repeat: no-repeat;
  background-position-x: 82%;
  background-position-y: center;
}
.plan-title {
  color: #323232;
  font-size: 34px;
}
.plan-icon {
  margin-top: 23px;
}
.plan-webdesc {
  margin-top: 27px;
  align-self: flex-start;
}
.webleft {
  margin-right: 21px;
  width: 492px;
}
.webleft .icon {
  width: 90px;
  height: 76px;
}
.webleft .title {
  text-align: center;
  font-size: 27px;
  color: #f7475e;
  line-height: 40px;
  margin: 40px auto;
}
.webleft .desc {
  font-size: 20px;
  color: #646464;
  line-height: 40px;
}
.webright {
  width: 587px;
  /* height: 581px; */
}
/* 软件应用开发 */
.Software {
  background: #ededed url(~static/cehbg.png) no-repeat center/cover;
}
.Software .O-title-en {
  margin-top: 36px;
}
.Software .sof-list {
  margin-top: 76px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.Software .sof-list .sof-item {
  margin-bottom: 31px;
  width: calc(50% - 31px / 2);
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  justify-content: flex-start;
  align-items: end;
}
.Software .sof-list .sof-item .sof-icon {
  width: 102px;
  height: 143px;
  background: #ffbb17;
  /* padding: 18px 44px; */
  flex-shrink: 0;
}
.Software .sof-list .sof-item .sof-icon img {
  width: 65px;
}
.sof-text {
  padding: 36px 24px;
}

.sof-text .title {
  color: #323232;
  font-size: 34px;
  margin-bottom: 19px;
}
.sof-text .desc {
  font-size: 18px;
  width: 422px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
/* 相关资料整理、编辑、录入 */
.upd .O-title {
  color: #24397c;
  font-weight: bold;
}
.upd img {
  width: 1022px;
}

/* 专题活动页面策划、设计、制作 */
.special {
  background: #f5f5f5;
}
.special .O-title {
  font-size: 27px;
  font-weight: bold;
  color: #323232;
}
.special .O-title-en {
  font-size: 22px;
  color: #323232;
  margin-top: 42px;
  margin-bottom: 10px;
}
.special-icon {
  width: 131px;
  margin-bottom: 45px;
}
.special-list {
  flex-direction: column;
}
.special-list .item {
  justify-content: space-between;
  margin-bottom: 25px;
}

.special-list .item > img {
  border-radius: 16px;
  width: calc(100% / 4 - 52px / 3);
}
.special-list .item.first > img {
  width: calc(100% / 3 - 52px / 3);
}
</style>