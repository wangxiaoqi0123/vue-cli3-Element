<template>
  <div>
    <div class="dialog" @click="open">dialog</div>
    <FormDialog :visible.sync="dialogVisible" />
    <!-- <el-upload
      class="upload-demo"
      :auto-upload="false"
      ref="upload"
      drag
      action
      :http-request="uploadFile"
      multiple
    />
    <button @click="$refs.upload.submit()">点击</button> -->
  </div>
</template>
<script>
import FormDialog from "./contents/FormDialog";
export default {
  components: {
    FormDialog
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  computed: {},
  watch: {},
  mounted() { },
  methods: {
    open() {
      alert();
      this.dialogVisible = true;
    },
    uploadFile(params) {
      console.log("params :>> ", params);
    }
  }
};
</script>
<style lang='less' scoped>
.dialog {
  width: 160px;
  line-height: 40px;
  border: 1px solid #409eff;
  text-align: center;
}
</style>
