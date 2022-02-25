<template>
  <div v-if="prompt" @click="download">保存至桌面</div>
</template>

<script>
export default {
  data() {
    return {
      prompt: null,
    };
  },
  mounted() {
    window.addEventListener("beforeinstallprompt", this.beforeinstallprompt);
  },

  methods: {
    beforeinstallprompt(e) {
      this.prompt = e;
      e.preventDefault();
      return false;
    },
    download() {
      if (this.prompt) {
        // 异步触发横幅显示，弹出选择框，代替浏览器默认动作
        this.prompt.prompt();
        // 接收选择结果
        this.prompt.userChoice
          .then((result) => {
            // {outcome: "dismissed", platform: ""} // 取消添加
            // {outcome: "accepted", platform: "web"} // 完成添加
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>