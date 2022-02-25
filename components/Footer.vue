<template>
  <footer id="footer">
    <div class="ter-top">
      <ul class="bt">
        <li v-for="(item, index) in NavList" :key="index">
          <nuxt-link :to="item.url" class="a">{{ item.value }}</nuxt-link>
        </li>
      </ul>
      <div class="contact">
        <div class="title">联系方式</div>
        <div class="list">
          地 址：上海市普陀区铜川路68号 创邑SPACE品尊 312室<br />
          电 话：+86 021 55808923<br />
          传 真：+86 021 55896971<br />
          邮 箱：fredi@sh-datastone.com
        </div>
      </div>
    </div>
    <div class="ter-bottom">
      <p class="copyright-t">
        上海世栋信息科技有限公司 版权所有 沪ICP备13040008号
      </p>
      <p class="copyright-b">
        Copyright © 2013-2020 www.sh-datastone.com ，All Rights Reserved
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    NavList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style>
.ter-top {
  background: #2b2d41;
  padding: 29px 395px;
  box-sizing: border-box;
}
.ter-top > .bt,
.ter-top > .contact {
  display: flex;
}
.ter-top > .bt {
  color: #fff;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;
}
.ter-top > .bt > li {
  position: relative;
}
.ter-top > .bt > li::after {
  position: absolute;
  content: "";
  height: 100%;
  background: #fff;
  width: 1px;
  right: -48px;
}
.ter-top > .bt > li:last-child::after {
  display: none;
}
.ter-top > .contact {
  width: fit-content;
  margin-top: 32px;
  font-size: 17px;
  border: 1px solid #bcbcbd;
}
.ter-top > .contact > .title {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #2b2d41;
  width: 27px;
  background: #bcbcbd;
  line-height: 30px;
}

.ter-top > .contact > .list {
  padding: 20px 46px 20px 23px;
  box-sizing: border-box;
  color: #cccccc;
  line-height: 30px;
}

.ter-bottom {
  height: 80px;
  width: 100%;
  text-align: center;
  font-size: 17px;
  color: #cccccc;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ter-bottom > p {
  line-height: 27px;
}
@media screen and (max-width: 768px) {
  .ter-top {
    padding: 20px;
  }
  .ter-top > .bt {
    display: none;
  }
  .ter-top > .contact {
    margin-top: 0;
  }
  .ter-bottom {
    font-size: 12px;
  }
  .ter-top > .contact > .title {
    width: 52px;
  }
}
</style>