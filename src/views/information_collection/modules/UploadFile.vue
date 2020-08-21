<template>
  <div class="upload-file">
    <div class="btn" @click="uploadClick">
      <p class="sl-1">添加附件</p>
      <input ref="file" type="file" multiple="multiple" style="display:none" @change="Upload" />
    </div>
    <ul class="file-list">
      <li v-for="(item,index) in fileListModel" :key="index">
        <i class="icon-left el-icon-document"></i>
        <span class="file-message">{{item.name}}</span>
        <i class="icon-right el-icon-delete" @click="onDel(index,item)"></i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    fileList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    valueModel: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit("input", newVal);
      }
    },
    fileListModel: {
      get() {
        return this.fileList;
      },
      set(newVal) {
        this.$emit("update:fileList", newVal);
      }
    }
  },
  watch: {
    "fileListModel": {
      deep: true,
      immediate: true,
      handler(newVal) {
        if (newVal && newVal.length > 0) {
          this.valueModel = newVal.map(item => item.id).join(",");
        } else {
          this.valueModel = "";
        }
      }
    }
  },
  data() {
    return {
    };
  },
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
      setTimeout(() => {
        let res = {
          "fileUrl": file.name,
          "id": file.size,
          "name": file.name,
          "pernr": "",
          "planId": "",
          "planNodeId": "",
          "planStepId": "",
          "showName": file.name
        };
        this.fileListModel.push(res);
        loading.close();
      }, 1000);
    },
    onDel(index, item) {
      this.$confirm("确定删除该附件", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.fileListModel.splice(index, 1);
      }).catch(() => { });
    }
  }
};
</script>
<style lang='less' scoped>
.btn {
  height: 30px;
  line-height: 30px;
  border-radius: 18px;
  padding: 0px 15px;
  color: #f99d33;
  background: #fff;
  border: 1px solid #f99d33;
  box-sizing: border-box;
  width: 120px;
  font-weight: 500;
  text-align: center;
  margin-top: 5px;
}
.btn:hover {
  background-color: #f99d33;
  color: #fff;
}
.upload-file {
  width: 620px !important;
}
.file-list {
  margin-top: 10px;
  li {
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #606266;
    cursor: pointer;
    .icon-left {
      margin-left: 4px;
    }
    .file-message {
      margin-left: 4px;
    }
    .icon-right {
      float: right;
      height: 24px;
      line-height: 24px;
      margin-right: 4px;
    }
  }
  li + li {
    margin-top: 4px;
  }
  li:hover {
    background-color: #f99d33;
    color: #fff;
  }
}
</style>
