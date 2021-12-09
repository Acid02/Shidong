<template>
  <div>
    <!-- 案例展示 -->
    <div class="padd-or index-app flex-center Company business typical">
      <p class="casetitle-en">TYPICAL CASE</p>
      <p class="casetitle">案例展示</p>
      <div class="typi-list flex-center" v-for="(item, index) in 6">
        <div class="typi-pic flex-center">
          <div>
            <img src="~static/imgtest.png" />
            <p class="typ-txt">文化旅游展会</p>
          </div>
          <div>
            <img src="~static/imgtest.png" />
            <p class="typ-txt">文化旅游展会 拷贝</p>
          </div>
          <div>
            <img src="~static/imgtest.png" />
            <p class="typ-txt">景点线下推广活动</p>
          </div>
        </div>
      </div>
    </div>
    <div class="paging flex-center">
      <div class="front invalid"><</div>
      <div class="number-list flex-center">
        <div class="number active">1</div>
        <div class="number">2</div>
      </div>
      <div class="after">></div>
    </div>
  </div>
</template>

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