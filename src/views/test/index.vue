<template>
  <el-container class="info-collection">
    <el-header class="info-header">越秀管理系统</el-header>
    <el-container>
      <el-aside width="200px">
        <ul class="side-nav">
          <li v-for="(item,index) in testChildren" :key="index" @click="goJump(item)">{{item.name}}</li>
        </ul>
      </el-aside>
      <el-main>
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      testChildren: [
        {
          path: "/form",
          name: "表单测试页面"
        },
        {
          path: "/tabs",
          name: "表单校验页面"
        },
        {
          path: "/form_component",
          name: "表单组件页面"
        },
        {
          path: "/dialog",
          name: "流程弹框页面"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  mounted() { },
  methods: {
    goJump(item) {
      this.$router.replace(item.path);
    }
  }
};
</script>
<style lang='less' scoped>
.el-header,
.el-footer {
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #f4f5f7;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.info-collection {
  min-height: 100vh;
  background: #f4f5f7;
}
.info-header {
  background-color: #eda04b;
}

.side-nav {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  & > li {
    width: 100%;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    margin-bottom: 4px;
    border-radius: 4px;
    font-weight: 600;
  }
}

.el-main {
  background-color: #fff;
}
</style>
