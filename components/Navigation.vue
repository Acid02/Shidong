<template>
  <header id="header" class="padd-or">
    <nuxt-link class="SubMenu-left" to="/">
      <img src="~static/logo.png" alt="上海世栋" />
    </nuxt-link>
    <ul class="SubMenu-right" :class="SubMenuIos && 'SubMenu-ios'">
      <div class="mask-close" v-show="SubMenuIos" @click="SubMenuIos = false">
        ✕
      </div>
      <li
        v-for="(item, index) in NavList"
        :key="index"
        :class="{ active: index == navIndex }"
        @click="(navIndex = index), (SubMenuIos = false)"
      >
        <nuxt-link :to="item.url" class="a">{{ item.value }}</nuxt-link>
      </li>
      <div class="SubMenu-right-icon" @click="SubMenuIos = true">
        <svg
          t="1645596476958"
          class="icon"
          viewBox="0 0 1403 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1401"
        >
          <path
            d="M189.62963 113.777778v196.683852h1061.925926V113.777778H189.62963z m0 477.601185h1061.925926v-196.683852H189.62963v196.683852zM189.62963 872.296296h1061.925926v-196.683852H189.62963V872.296296z"
            fill="#000000"
            p-id="1402"
          ></path>
        </svg>
      </div>
    </ul>
  </header>
</template>

<script>
export default {
  props: {
    NavList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      navIndex: 10,
      SubMenuIos: false,
    };
  },
  created() {
    this.NavList.forEach((el, index) => {
      if (el.url.includes(this.$route.name)) {
        this.navIndex = index;
      }
      if (this.$route.path == "/" || !this.$route.path) {
        this.navIndex = 0;
      }
    });
  },
  watch: {
    $route(to, from) {
      this.navIndex = this.NavList.findIndex((el) => el.url == to.path);
    },
  },
  methods: {
    subs() {
      alert(1);
    },
  },
};
</script>

<style>
#header,
.SubMenu-right {
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
}
#header {
  position: sticky;
  top: 0;
  background: #fff;
  box-sizing: border-box;
  flex-wrap: wrap;
  z-index: 999;
}
.SubMenu-left {
  width: 220px;
  line-height: 70px;
  height: 100%;
}
.SubMenu-left > img {
  width: 100%;
}
.SubMenu-right > li {
  height: 100%;
  font-weight: 500;
  color: #000;
}
.SubMenu-right > li.active {
  background: #1b1b1b;
  color: #ffffff;
}
.SubMenu-right > li .a {
  padding: 0 40px;
  box-sizing: border-box;
  font-size: 12px;
  height: 100%;
  display: flex;
  align-items: center;
}
.SubMenu-right-icon {
  display: none;
}
@media screen and (max-width: 768px) {
  #header {
    width: 100%;
    align-items: unset;
  }
  .SubMenu-left {
    width: 99px;
  }
  .SubMenu-right-icon {
    display: block;
  }
  .SubMenu-right > li,
  .SubMenu-ios > .SubMenu-right-icon {
    display: none;
  }
  .SubMenu-right-icon {
    width: 30px;
    margin-top: 10px;
  }
  .SubMenu-ios {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.8);
    flex-direction: column;
    justify-content: start;
    z-index: 9999;
  }
  .SubMenu-ios > li {
    width: 100%;
    height: 44px;
    display: block;
  }
  .mask-close {
    display: none;
    width: 60px;
    font-size: 36px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    align-self: flex-end;
  }
  .SubMenu-ios > .mask-close {
    display: block;
  }
}
</style>