<template>
  <div>
    <!-- 案例展示 -->
    <div class="padd-or index-app flex-center Company business typical">
      <p class="casetitle-en">TYPICAL CASE</p>
      <p class="casetitle">案例展示</p>
      <div
        class="typi-list flex-center"
        v-for="(item, index) in info"
        :key="index"
      >
        <div class="typi-pic flex-center">
          <div v-for="(pic, indef) in item.picurl" :key="indef">
            <img v-lazy="pic" />
            <p class="typ-txt">{{ item.listlabel }}</p>
          </div>
          <!-- <div>
            <img src="~static/imgtest.png" />
            <p class="typ-txt">文化旅游展会 拷贝</p>
          </div>
          <div>
            <img src="~static/imgtest.png" />
            <p class="typ-txt">景点线下推广活动</p>
          </div> -->
        </div>
      </div>
    </div>
    <div class="paging flex-center">
      <div class="front" @click="cut('starts')" :class="page == 1 && 'invalid'">
        <
      </div>
      <div class="number-list flex-center">
        <div
          class="number"
          v-for="num in msg"
          :key="num"
          :class="page == num && 'active'"
          @click="navIndex(num)"
        >
          {{ num }}
        </div>
      </div>
      <div class="after" @click="cut('end')" :class="page == msg && 'invalid'">
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: {},
      msg: 0,
      page: 1,
      pagesize: 3,
    };
  },
  async created() {
    this.isLoad();
  },
  methods: {
    // 分页
    navIndex(index) {
      if (this.page == index) return;
      this.page = index;
      this.isLoad();
    },
    //分页左右按钮
    cut(res) {
      let page = this.page;
      if (res == "starts") {
        if (page > 1) {
          this.page = page - 1;
          this.isLoad();
        }
      } else {
        if (this.msg > page) {
          this.page = page + 1;
          this.isLoad();
        }
      }
    },
    async isLoad() {
      let { data } = await this.$api.selPic({
        data: { themeid: 1403, pagesize: this.pagesize, page: this.page },
      });
      this.info = data.info.map((el) => {
        el.picurl = el.picurl.split(",");
        return el;
      });
      this.msg = +data.msg / this.pagesize;
    },
  },
};
</script>
<style>
@import url("~static/css/index");
.paging {
  width: 100%;
  margin-bottom: 123px;
}
.paging > .front,
.paging > .after,
.paging > .number-list > div {
  font-size: 27px;
  padding: 14px 26px;
  border: 1px solid #323232;
  border-radius: 8px;
  background: #ffffff;
}
.number-list {
  margin-right: 8px;
}
.number-list > div {
  margin-left: 8px;
}
.number-list > div.active {
  background: #323232;
  color: #fff;
}
.paging .invalid {
  color: #c2c2c2;
  border-color: #c2c2c2;
}
</style>