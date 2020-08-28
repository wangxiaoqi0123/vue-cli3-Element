<template>
  <div class="avatar-content">
    <div class="avatar-img">头像</div>
    <div class="up-btn" @click="uploadClick">点击上传</div>
    <input ref="file" type="file" style="display:none" @change="Upload" />
    <div class="avatar-tips">（上传要求：格式为JPG，小于1MB的照片）</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() { },
  methods: {
    uploadClick() {
      this.$refs.file.value = "";
      this.$refs.file.dispatchEvent(new MouseEvent("click"));
    },
    Upload() {
      const file = this.$refs.file.files[0];
      // 模拟附件上传
      const loading = this.$loading({
        lock: true,
        text: "附件上传中...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      console.log("file :>> ", file);
      setTimeout(() => {
        // let res = {
        //   "fileUrl": file.name,
        //   "id": file.size,
        //   "name": file.name,
        //   "pernr": "",
        //   "planId": "",
        //   "planNodeId": "",
        //   "planStepId": "",
        //   "showName": file.name
        // };
        // this.fileListModel.push(res);
        loading.close();
      }, 1000);
    }
  }
};
</script>
<style lang='less' scoped>
.avatar-content {
  width: 100%;
  box-sizing: border-box;
  float: right;
  text-align: center;
  padding-top: 6px;

  .avatar-img {
    width: 118px;
    min-width: 118px;
    max-width: 118px;
    height: 160px;
    min-height: 160px;
    max-height: 160px;
    background-color: #eda04b;
    display: inline-block;
  }
  .avatar-tips {
    font-size: 13px;
    color: #f99d33;
    letter-spacing: 0;
    text-align: center;
    height: 28px;
    line-height: 28px;
  }
  .up-btn {
    font-size: 13px;
    color: #f99d33;
    letter-spacing: 0;
    text-align: center;
    text-decoration: underline;
    height: 28px;
    line-height: 28px;
    margin-top: 4px;
    cursor: pointer;
  }
}
</style>
