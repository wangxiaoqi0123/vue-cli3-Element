<template>
  <div class="nav">
    <el-tag
      class="tps-tag"
      v-for="(item,index) in navList"
      effect="dark"
      :key="index"
      @click="goJump(item)"
    >{{item.name}}</el-tag>
  </div>
</template>
<script>
export default {
  name: "Content",
  data() {
    return {
      navList: [
        {
          path: "/information_collection",
          name: "信息采集页"
        },
        {
          path: "/test",
          name: "测试页面"
        },
        {
          path: "/editor",
          name: "富文本编辑器"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  mounted() { },
  methods: {
    goJump(item) {
      this.$router.push(item.path);
    }
  }
};
</script>
<style lang='less' scoped>
.nav {
  padding: 20px;
}

.tps-tag {
  margin-left: 20px;
  background-color: #e3a25b;
  border-color: #e3a25b;
  min-width: 160px;
  text-align: center;
}
</style>
