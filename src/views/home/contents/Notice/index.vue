<template>
  <div class="notice">
    <ul class="nav">
      <li @click="goJump('/announcements')">通知提醒</li>
      <li @click="goJump('/proceed')">代办事项</li>
      <li @click="goJump('/myapply')">我的发起</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Notice",
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() { },
  methods: {
    goJump(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang='less' scoped>
.notice {
  padding: 20px;
  padding-right: 0;
}
.nav {
  li {
    height: 40px;
    line-height: 40px;
    border: 1px solid #001528;
    text-align: center;
    cursor: pointer;
  }
}
</style>
