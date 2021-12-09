<template>
  <header id="header">
    <div class="SubMenu-left">
      <img src="~static/logo.png" alt="上海世栋" />
    </div>
    <ul class="SubMenu-right">
      <li
        v-for="(item, index) in Navlist"
        :key="index"
        :class="{ active: index == navIndex }"
        @click="navIndex = index"
      >
        <nuxt-link :to="item.url" class="a">{{ item.value }}</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  props: {
    Navlist: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      navIndex: 10,
    };
  },
  created() {
    this.Navlist.forEach((el, index) => {
      if (el.url.includes(this.$route.name)) {
        this.navIndex = index;
      }
      if (this.$route.path == "/" || !this.$route.path) {
        this.navIndex = 0;
      }
    });
  },
};
</script>

<style>
#header,
.SubMenu-right {
  display: flex;
  justify-content: space-between;
  height: 109px;
  align-items: center;
}
#header {
  position: sticky;
  top: 0;
  background: #fff;
  padding: 0 251px;
  box-sizing: border-box;
  flex-wrap: wrap;
  z-index: 999;
}
.SubMenu-left {
  width: 249px;
}
.SubMenu-left > img {
  width: 100%;
}
.SubMenu-right > li {
  height: 100%;
  font-weight: 500;
}
.SubMenu-right > li.active {
  background: #1b1b1b;
  color: #ffffff;
}
.SubMenu-right > li .a {
  padding: 0 40px;
  box-sizing: border-box;
  font-size: 20px;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>