<template>
  <el-card class="box-card" shadow="never">
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item
        v-for="(item,index) in navList"
        :key="index"
        :title="item.name"
        :name="item.id"
      >
        <slot :name="item.id">
          <!-- 添加 name 名称 外部可指定name名称来定义内容 -->
        </slot>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // activeNames: []
    };
  },
  computed: {
    ...mapState({
      navList: state => state.information_collection.navList,
      navActive: state => state.information_collection.navActive
    }),
    activeNames: {
      get() {
        return this.navActive;
      },
      set(val) {
        this.$store.commit("information_collection/SET_NAVACTIVE", val);
      }
    }
  },
  methods: {
    handleChange(val) {
      // console.log(val);
    }
  }
};
</script>
<style lang='less' scoped>
.box-card {
  /deep/ .el-card__body {
    padding: 0;
    .el-collapse-item__content {
      padding: 0;
    }
  }
  /deep/ .el-collapse-item__header {
    font-size: 14px;
    padding: 0px 10px 0px 20px;
    box-sizing: border-box;
  }
  /deep/ .el-collapse-item__header {
    &:hover,
    &:active,
    &:focus,
    &:link {
      color: #303133 !important;
    }
  }
}
</style>
