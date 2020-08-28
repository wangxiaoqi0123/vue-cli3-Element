<template>
  <el-container>
    <el-header class="header" />
    <el-container>
      <el-aside width="200px">
        <Notice />
      </el-aside>
      <el-main>
        <Content />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Notice from "./contents/Notice";
import Content from "./contents/Content";
export default {
  name: "home",
  components: {
    Notice,
    Content
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() { }
};
</script>
<style lang="less" scoped>
.header {
  background: url("../../assets/img/home_header.png");
  background-size: cover;
  height: 260px !important;
  width: 100%;
}
</style>
