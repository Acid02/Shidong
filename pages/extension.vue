<template>
  <div>
    <!-- 整合营销推广 -->
    <div class="extension-app padd-or padd flex-center exbj">
      <p class="plan-title">整合营销推广</p>
      <img
        src="~static/duobx.png"
        class="plan-icon"
        width="24px"
        alt="整合营销推广"
      />
      <div class="ext-webdestile exttop">
        <p class="title O-title">推广方案策划制定</p>
        <p class="desc O-txt">
          策划、操作、运营、维护全套营销解决方案和服务，由互联网营
          销专家全程媒介策略支持，精心为您的推广提供策划方案，可满
          足不同行业品牌的营销需求。并在基于大数据前提下的专业分析，
          为营销提供更精准、更科学的参考，为找准最佳突破口。
        </p>
      </div>
    </div>
    <!-- 搜索引擎优化 -->
    <div class="yinq padd-or padd flex-center">
      <img src="~static/yinq.png" class="yinq-left" alt="搜索引擎优化" />
      <div class="yinq-right">
        <img src="~static/yqbd.png" class="icon" />
        <div class="webdestill">
          <p class="title">搜索引擎优化</p>
          <p class="desc">
            进行有针对性的优化，精准引流，提高网站在搜索引擎
            中的自然排名，吸引更多的用户访问网站，提高网站的
            访问量，提高网站的销售能力和宣传能力，从而提升网 站的品牌效应。
          </p>
        </div>
        <img src="~static/yqbd2.png" class="icon" style="float: right" />
      </div>
    </div>
    <!-- 新媒体账号主体运营 -->
    <div class="xmtzh extension-app padd-or padd flex-center">
      <p class="O-title">新媒体账号主体运营</p>
      <p class="O-title-en">
        拥有国内外主流新媒体资源，同时配备经验丰富的移动互联网营销推广团队，满足不同行业品牌的需求，
        可灵活服务于各类不同场景，满足不同目标客户的营销需求。
      </p>
      <img src="~static/dylog.png" width="100%" alt="新媒体账号主体运营" />
    </div>
    <!-- 推广内容策划制作宣推 -->
    <div class="tuig xmtzh extension-app padd-or padd flex-center">
      <p class="O-title">推广内容策划制作宣推</p>
      <p class="O-title-en">
        拍摄、编辑、剪辑、排版、推送，提供一站式网络营销服务!
      </p>
      <p class="O-title-en">
        专业内容团队帮企业操作全套专业营销服务，从创意策划广告内容设计到日常维护到降低成本，提高效果，
        包括进行内容策划、运营策划、宣传推广、红人转发、品牌监测等。
      </p>
      <div class="tuig-list flex-center">
        <img src="~static/imgtest.png" v-for="item in 8" />
      </div>
    </div>
    <!-- 粉丝互动活动策划 -->
    <div class="fshd extension-app padd-or padd flex-center">
      <div class="ext-webdestile">
        <p class="title O-title">粉丝互动活动策划</p>
        <p class="desc O-txt">
          推出粉丝互动活动，借助粉丝力量产生病毒式裂变。
          将线上人气拉进线下，帮助品牌定制营销方案，
          让企业品牌得到足够大的曝光。
        </p>
      </div>
      <img class="fs-right" src="~static/cj.png" />
    </div>
    <!-- 印刷品策划、设计、印刷、制作、物流派送 -->
    <div class="tuig xmtzh extension-app padd-or padd flex-center">
      <p class="O-title">印刷品策划、设计、印刷、制作、物流派送</p>
      <p class="O-title-en">纸质宣传品能够帮助企业或个人迅速传递信息。</p>
      <p class="O-title-en">
        由多年从事媒介软文发布的专业团队，精心为您的推广提供策划方案；并提供设计、印刷、制作、物流派送等一站式服务。
      </p>
      <div class="tuig-list flex-center">
        <img src="~static/imgtest.png" v-for="item in 8" />
      </div>
    </div>
    <!-- 其他配套宣传品策划、设计、制作 -->
    <div
      class="tuig xmtzh extension-app padd-or padd flex-center"
      style="background: #fff"
    >
      <p class="O-title">其他配套宣传品策划、设计、制作</p>
      <div class="tuig-list flex-center">
        <img src="~static/imgtest.png" v-for="item in 4" />
      </div>
    </div>
    <!-- 活动数据跟踪和分析 -->
    <div class="hdsjf fshd extension-app padd-or padd flex-center">
      <img class="fs-right" src="~static/cjch.png" />
      <div class="ext-webdestile">
        <p class="title O-title">活动数据跟踪和分析</p>
        <p class="desc O-txt">
          对活动数据进行分析，随时监控优化推广效果，出具数据报
          告掌握优化情况，提供详细的营销汇报和持续的跟进维护，
          让您坐享网络营销服
        </p>
      </div>
    </div>
  </div>
</template>
<style>
@import url(~static/css/extension);
</style>