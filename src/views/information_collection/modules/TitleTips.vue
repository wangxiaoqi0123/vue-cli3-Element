<template>
  <div class="tips-content">
    <div class="header" @click="show=!show">
      <div class="back" @click.stop="$router.back()">返回</div>
      <p class="tips-text">填写说明</p>
    </div>
    <div class="main" v-if="show">
      <p>1、带*号字符的为必填信息，每项信息填写后请注意点击保存。</p>
      <p>2、填写人需保证填写资料均属正确，如有任何虚假，用人单位可按规进行处置，同时有权追究因此引起的所有责任。</p>
      <p>3、信息收集范围为法律合规范围内，公司将保证对所填写信息进行保密。</p>
      <p>4、上传照片格式为jpg，大小小于1MB。</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  },
  computed: {},
  watch: {},
  mounted() { },
  methods: {}
};
</script>
<style lang='less' scoped>
.tips-content {
  margin-bottom: 4px;
}
.header {
  color: #f99d33;
  font-size: 14px;
  cursor: pointer;
}
.back {
  display: inline-block;
  border: 1px solid #f99d33;
  padding: 3px 14px;
  background-color: #fff;
}
.tips-text {
  display: inline-block;
  margin-left: 20px;
}

.main {
  padding: 10px 15px;
  margin: 10px 0;
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;

  & > p {
    margin-top: 5px;
    line-height: 1.42857143;
  }
}
</style>
