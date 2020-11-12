<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter" />
    <!-- 在路由中添加meta属性 控住Footer组件显示隐藏 -->
  </div>
</template>

<script>
import { mapActions } from "vuex";

import FooterGuide from "./components/FooterGuide/FooterGuide.vue";

export default {
  mounted() {
    // this.$store.dispatch('getAddress')
    this.getAddress();
    this.getUserInfo();
  },

  methods: {
    // 请求数据
    ...mapActions(["getAddress", "getUserInfo","getUserInfo"]),
  },

  components: {
    FooterGuide,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%
  background #f5f5f5
</style>
