<template>
  <div ref="editor"></div>
</template>

<script>
/*
  1. v-model  富文本内容
  2. 注意：富文本展示时 表格和code代码 样式存在缺陷，需要官方提供的辅助css
    - https://www.kancloud.cn/wangfupeng/wangeditor3/335775 查看
*/
import E from "wangeditor";
export default {
  name: "Wangeditor",
  props: {
    value: {
      type: String,
      default: () => ""
    }
  },
  data() {
    return {
      editor: null // 富文本编辑器实例对象
    };
  },
  computed: {
    modelValue: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit("input", newVal);
      }
    }
  },
  mounted() {
    this.editorConfig();
  },
  methods: {
    editorConfig() {
      let editor = new E(this.$refs.editor);
      editor.customConfig.onchange = (html) => {
        this.modelValue = html;
      };
      editor.customConfig.uploadImgShowBase64 = true;// 使用 base64 保存图片
      editor.create();
      this.editor = editor;
      this.editor.txt.html(this.modelValue);
    }
  }
};
</script>

<style lang="less" scoped>
/* 添加css 实现wangeditor高度自适应 */
/deep/ .w-e-text-container {
  height: auto !important;
  min-height: 300px;
}
</style>
