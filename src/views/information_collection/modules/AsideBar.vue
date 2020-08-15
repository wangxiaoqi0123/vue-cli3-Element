<template>
  <div class="bar-box">
    <ul class="left-sidebar">
      <li
        v-for="(item,index) in navList"
        :key="index"
        :class="{'active':navActive==item.id}"
        @click="$store.commit('information_collection/SET_NAVACTIVE',item.id)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      navList: state => state.information_collection.navList,
      navActive: state => state.information_collection.navActive
    })
  },
  watch: {},
  mounted() { },
  methods: {

  }
};
</script>
<style lang='less' scoped>
.bar-box {
  width: 100%;
  height: 100%;
  padding: 20px 0px 0px 20px;
  box-sizing: border-box;
}
.left-sidebar {
  li {
    border-radius: 2px;
    height: 36px;
    line-height: 36px;
    margin-bottom: 2px;
    font-weight: 400;
    padding-left: 16px;
    box-sizing: border-box;
    background-color: #fff;
    color: #303133;
    font-size: 13px;
    cursor: pointer;
  }
  li:last-child {
    margin: 0;
  }
  li:hover,
  .active {
    background: #eda04b;
    color: #fff;
  }
}
</style>
